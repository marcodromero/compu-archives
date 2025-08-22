import Window from "../components/Window";
import logo from '../assets/compu-logo.png'
import btnReturn from '../assets/btn-return.png'
import { NavLink } from "react-router-dom";

export default function Guestbook() {
  return (
    <Window id="guestbook">
      <div className="h-[60px] flex items-center justify-between">
        <img src={logo} className="w-[100px]"/>
        <h1 className="text-[18px] text-white text-right w-[500px]">Libro de visitas</h1>
      </div>
      <section>
        
      </section>
       <div className="h-[60px] flex items-center justify-end">
        <NavLink to="/home"><img src={btnReturn} className="zoom  w-[40px] h-[40px]"/></NavLink>
      </div>
    </Window>
  )
}
