import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ebqljtmwldygyyhqqsaw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVicWxqdG13bGR5Z3l5aHFxc2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1Nzg5MjgsImV4cCI6MjAwNTE1NDkyOH0.Zkz8NPbl2bEjM_mqCZ2QRXC7a9nxup7eMttyzhypoG0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
