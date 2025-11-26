/*
  # Create contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `subject` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp)
      - `email_sent` (boolean, tracks if confirmation email was sent)
      - `ip_address` (text, for spam detection)
      - `user_agent` (text, for spam detection)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting (public can submit)
    - Add policy for admin to view all submissions (placeholder for future admin dashboard)

  3. Purpose
    - Store all contact form submissions
    - Track which submissions had emails sent
    - Store metadata for spam/bot detection
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  email_sent boolean DEFAULT false,
  ip_address text,
  user_agent text
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read all submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
