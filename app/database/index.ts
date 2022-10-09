import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ahhxvqpcdnphysgumyaq.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

console.log({ supabaseKey })

export const supabase = createClient(supabaseUrl, supabaseKey || '')
