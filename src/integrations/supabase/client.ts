// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ylnswbazmlcxyyuuvqbk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsbnN3YmF6bWxjeHl5dXV2cWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMzIzNzksImV4cCI6MjA1NzgwODM3OX0.-YiKUCuxuzYUMY52OB5ROp04ClK-czv9Nm2qeGq7AFg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);