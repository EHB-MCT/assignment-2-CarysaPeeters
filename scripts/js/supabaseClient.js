"use strict";

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://fhfkvmgqytrhirdaugkb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoZmt2bWdxeXRyaGlyZGF1Z2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NDA3MjcsImV4cCI6MjA0ODAxNjcyN30.bfBXRl-a6FOAzdaEcnhk6s1f_8-RZZjN71xvNuFdmis'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

