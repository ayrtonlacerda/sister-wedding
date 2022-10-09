import { supabase } from '~/database'

export type GuestType = {
  id?: string
  name: string
  email: string
  celphone: string
  amount_children: string
}

export const GuestsModel = {
  findAll: async () => {
    const { data: guests, error } = await supabase.from('guests').select('*')

    return [error, guests]
  },
  create: async (guest: GuestType) => {
    const { data, error } = await supabase.from('guests').insert([guest])

    if (error) throw error

    return data
  },
}
