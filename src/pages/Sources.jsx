import Window from "../components/Window";
import logo from '../assets/compu-logo.png'
import btnReturn from '../assets/btn-return.png'
import { NavLink } from "react-router-dom";
import sources from "../data/sources.js";

export default function Sources() {
  return (
    <Window id="sources">
      <div className="h-[60px] flex items-center justify-between">
            <img src={logo} className="w-[100px]"/>
            <h1 className="text-[18px] text-white text-right w-[500px]">Fuentes</h1>
      </div>
      <section>
        <div className="w-full md:w-full h-full md:h-[340px]  flex flex-col border-ridge bg-box">
                  <div className="bg-black text-amber-300 font-bold text-[12px] text-center">Se obtuvo información e imágenes de los siguientes sitios</div>
                  <div className="w-full h-full overflow-y-auto  text-[12px] ">
                    <ul className="m-4 flex flex-col gap-4">
                    {
                      sources.map((item,i)=>{
                        return(
                          <li key={i}>🔗 <a href={item.url} className="font-bold text-neutral-200 text-[14px] md:text-[12px]"> {item.description}</a></li>
                        )
                      })
                    }
                    </ul>
                </div>
              </div>
      </section>
      <div className="h-[60px] flex items-center justify-end">
        <NavLink to="/"><img src={btnReturn} className="zoom  w-[40px] h-[40px]"/></NavLink>
      </div>
    </Window>
  )
}