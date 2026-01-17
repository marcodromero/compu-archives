import Window from "../components/Window";
import btnHome from '../assets/btn-home.png'
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

export default function NotFoundPage() {
  return (
    <Window id="notFound">
      <Header />
      <div className="flex flex-col justify-center items-center h-[300px]">
        <h1 className="text-[24px] font-bold">La página que buscás no existe</h1>
        <NavLink to="/" className="w-[186px] zoom"><img src={btnHome} alt="Ir a la pagina de inicio"/></NavLink>
      </div>
    </Window>
  )
}
