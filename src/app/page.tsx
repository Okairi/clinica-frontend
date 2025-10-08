'use client'
import { createClient } from '@/utils/supabase/client'

export default function Home() {
  const supabase = createClient()

  async function probarConexion() {
    const { data, error } = await supabase.from('doctores').select('*')
    console.log('Datos:', data, 'Error:', error)
  }

  return (
    <main>
      <h1>Clínica Supabase</h1>
      <button onClick={probarConexion}>Probar conexión</button>
    </main>
  )
}
