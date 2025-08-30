-- A) Columns (additive; won’t touch existing rows)
ALTER TABLE public.contacts
  ADD COLUMN IF NOT EXISTS address_line1  text,
  ADD COLUMN IF NOT EXISTS address_line2  text,
  ADD COLUMN IF NOT EXISTS city           text,
  ADD COLUMN IF NOT EXISTS state          text,
  ADD COLUMN IF NOT EXISTS postal_code    text;

-- B) Lightweight constraints (tune to your needs; optional)
ALTER TABLE public.contacts DROP CONSTRAINT IF EXISTS contacts_state_chk;
ALTER TABLE public.contacts
  ADD CONSTRAINT contacts_state_chk CHECK (state IS NULL OR char_length(state) BETWEEN 2 AND 50);

ALTER TABLE public.contacts DROP CONSTRAINT IF EXISTS contacts_postal_code_chk;
ALTER TABLE public.contacts
  ADD CONSTRAINT contacts_postal_code_chk CHECK (postal_code IS NULL OR char_length(postal_code) BETWEEN 3 AND 20);

-- C) Helpful indexes for filtering/search (optional but recommended)
CREATE INDEX IF NOT EXISTS contacts_city_idx        ON public.contacts (city);
CREATE INDEX IF NOT EXISTS contacts_postal_code_idx ON public.contacts (postal_code);