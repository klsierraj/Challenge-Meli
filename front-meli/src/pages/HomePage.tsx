import { Head } from "../components/Head/Head"

export const HomePage = () => {
  return (
    <section>
    <Head title="Home" />

    <div style={{
        display:"flex",
        justifyContent: 'center',
        alignItems:'center',
        height: '100vh'
    }}>
    <h2>Bienvenido a mercado libre</h2>
    </div>
    
    </section>
  )
}
