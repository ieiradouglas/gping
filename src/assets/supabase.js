import {createClient} from '@supabase/supabase-js'

const supaBaseUrl = import.meta.env.VITE_SUPA_URL
const supaBaseKey = import.meta.env.VITE_SUPA_KEY

export const supabase = createClient(supaBaseUrl, supaBaseKey)