// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://cusiltcmhkkcwynydpjy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1c2lsdGNtaGtrY3d5bnlkcGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMTQ4MzEsImV4cCI6MjA2NDU5MDgzMX0._mVVBVahWWtauZkqvkUnVtQNbtC_MqO_DzpvndNGyuc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);