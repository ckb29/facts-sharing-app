import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://bmbobjulljepwdlaykww.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtYm9ianVsbGplcHdkbGF5a3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMTcxODYsImV4cCI6MjA2Mjg5MzE4Nn0.NSMGjnOxsQMUhEj_eJx13ZbOsRJXEmpvxz1n9jPBx-I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
