import {Window, Header} from "../components";
import todo from '../data/todo'
import btnReturn from '../assets/btn-return.png'
import btnSources from '../assets/btn-sources.png'
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <Window id="about">
      <Header title="Sobre el proyecto"/>
      <section className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0"  >
        <div className="w-full h-auto md:w-[440px] md:h-[340px]">
          <h1 className='text-[15px] font-bold  '>¿Qué fue Billiken Compu?</h1>
          <p className='my-4 text-[12px]'>
            <b><a href="https://web.archive.org/web/20031010082555/http://www.billiken.com.ar:80/revista/compu/brc.htm" className="underline text-blue-900 font-bold" target='_blank' aria-label="Sitio web oficial de Billiken Compu en web archive">Billiken Compu</a></b> fue una revista Argentina de informática dirigida al público infantil y adolescente, que se publicó mensualmente desde octubre de 1999 hasta diciembre de 2001. Cada ejemplar incluia uno, dos o tres CD-ROMS con juegos y programas. 
          </p>
          <h1 className='text-[15px] font-bold  '>Antecedentes del proyecto</h1>
          <p className='my-4 text-[12px]'>En 2018 realicé un <a href="https://web.archive.org/web/20180618063417/https://www.taringa.net/%2Bjuegos/billiken-compu-info-de-los-juegos-2018_16bqzi" className="font-bold underline  text-blue-900" target='_blank' aria-label="Mi post en Taringa del 2018">post en Taringa!</a> con el objetivo de ofrecer información de como se podia obtener los videojuegos de la revista.</p>
          <p className='my-4 text-[12px]'>En 2022 realicé un nuevo <a href="https://web.archive.org/web/20220418143615/https://www.taringa.net/+juegos/billiken-compu-info-de-los-juegos-2022_4ztkc9" className="underline font-bold text-blue-900" target='_blank' aria-label="Mi post en Taringa del 2022">post en Taringa!</a> esta vez enfocado en recopilar información de cada edición de la revista y sus cds. </p>
          <h1 className='text-[15px] font-bold '>Sobre el contenido</h1>
          <p className='my-4 text-[12px]'>La información ha sido recopilada de diferentes fuentes que puedes consultar pulsando el siguiente botón.</p>
          <NavLink to="/fuentes" className="md:w-[100px] flex justify-start"><img src={btnSources} className="w-1/3 h-full md:w-[100px] zoom" alt="Ir a la lista de fuentes"/></NavLink>
        </div>
      
        <div className="w-full md:w-[220px] h-[340px]  flex flex-col border-ridge bg-box">
          <div className="bg-black text-amber-300 font-bold text-[12px] text-center">AÚN SE NECESITA</div>
          <div className="w-full h-full overflow-y-auto  text-[12px] ">
            <ul>
            {
              todo.map((item)=>{
                return(
                  <li className="m-4">🔸 {item}</li>
                )
              })
            }
            </ul>
        </div>
      </div>
    </section>

      <div className="h-[60px] flex items-center justify-end">
        <NavLink to="/"><img src={btnReturn} className="zoom  w-[40px] h-[40px]" alt="Ir a la página principal del sitio"/></NavLink>
      </div>
    </Window>
  )
}
