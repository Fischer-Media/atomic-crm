-- If stage is an ENUM, convert to text first (safe generic path)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='deals'
      AND column_name='stage' AND data_type='USER-DEFINED'
  ) THEN
    ALTER TABLE public.deals
      ALTER COLUMN stage TYPE text USING stage::text;
  END IF;
END $$;

-- Drop any old CHECK constraint so we can remap then re-enforce
ALTER TABLE public.deals DROP CONSTRAINT IF EXISTS deals_stage_chk;

-- Backfill: map legacy -> new
UPDATE public.deals
SET stage = CASE stage
  WHEN 'new'        THEN 'opportunity'
  WHEN 'qualified'  THEN 'pending-quote'
  WHEN 'proposal'   THEN 'quote-sent'
  WHEN 'won'        THEN 'deposit-paid'   -- << you said “won” becomes “deposit-paid”
  -- keep 'pending-deposit' as-is
  -- if you ever stored 'delayed' literally, normalize it to 'lost':
  WHEN 'delayed'    THEN 'lost'
  ELSE stage
END
WHERE stage IN ('new','qualified','proposal','won','delayed');

-- Re-enforce allowed values
ALTER TABLE public.deals
  ADD CONSTRAINT deals_stage_chk CHECK (stage IN (
    'opportunity','pending-quote','quote-sent','pending-deposit','deposit-paid','lost', 'pending-install', 'install-complete'
  ));