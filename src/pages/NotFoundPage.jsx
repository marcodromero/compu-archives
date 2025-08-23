import Window from "../components/Window";
import logo from '../assets/compu-logo.png'
import btnHome from '../assets/btn-home.png'
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Window id="notFound">
      <div className="h-[60px] flex items-center justify-between">
            <img src={logo} className="w-[100px]"/>
          
      </div>
      <div className="flex flex-col justify-center items-center h-[300px]">
        <h1 className="text-[24px] font-bold">La página que buscás no existe.</h1>
        <NavLink to="/" className="w-[186px] zoom"><img src={btnHome}/></NavLink>
      </div>
    </Window>
  )
}
