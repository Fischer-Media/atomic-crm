CREATE OR REPLACE VIEW public.contacts_summary
WITH (security_invoker = on) AS
SELECT
  co.id,                          -- 1
  co.first_name,                  -- 2
  co.last_name,                   -- 3
  co.gender,                      -- 4
  co.title,                       -- 5
  co.email_jsonb,                 -- 6
  COALESCE(co.email_jsonb->0->>'email','')::text AS email_fts,  -- 7
  co.phone_jsonb,                 -- 8
  COALESCE(co.phone_jsonb->0->>'number','')::text AS phone_fts, -- 9
  co.background,                  -- 10
  co.avatar,                      -- 11
  co.first_seen,                  -- 12
  co.last_seen,                   -- 13
  co.has_newsletter,              -- 14
  co.status,                      -- 15
  co.tags,                        -- 16
  co.company_id,                  -- 17
  co.sales_id,                    -- 18
  co.linkedin_url,                -- 19
  c.name AS company_name,         -- 20
  COUNT(DISTINCT t.id) AS nb_tasks, -- 21
  co.address_line1,               -- 22
  co.address_line2,               -- 23
  co.city,                        -- 24
  co."state",                     -- 25
  co.postal_code                  -- 26
FROM public.contacts AS co
LEFT JOIN public.tasks      AS t ON co.id = t.contact_id
LEFT JOIN public.companies  AS c ON co.company_id = c.id
GROUP BY co.id, c.name;