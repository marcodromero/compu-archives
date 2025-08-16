import Window from "../components/Window";
import logo from '../assets/compu-logo.png'

export default function Guestbook() {
  return (
    <Window id="social">
      <div className="h-[60px] flex items-center justify-between">
        <img src={logo} className="w-[100px]"/>
        <h1 className="text-[18px] text-white text-right w-[500px]">Libro de visitas</h1>
      </div>
      <section>
        
      </section>
    </Window>
  )
}
