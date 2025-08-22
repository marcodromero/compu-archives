
import Window from "../components/Window";
import logo from '../assets/compu-logo.png'
import todo from '../data/todo'
import btnReturn from '../assets/btn-return.png'
import { NavLink } from "react-router-dom";

export default function About() {
  
  return (
    <Window id="about">
      <div className="h-[60px] flex items-center justify-between">
            <img src={logo} className="w-[100px]"/>
            <h1 className="text-[18px] text-white text-right w-[500px]">Sobre el proyecto</h1>
      </div>
      <section className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full h-auto md:w-[440px] md:h-[340px]">
          <h1 className='text-[15px] font-bold  '>¿Qué fue Billiken Compu?</h1>
          <p className='my-4 text-[12px]'>
            <b>Billiken Compu</b> fue una revista Argentina de informática dirigida al público infantil y adolescente, que se publicó mensualmente desde octubre de 1999 hasta diciembre de 2001. Cada ejemplar incluia uno, dos o tres CD-ROMS con juegos y programas. 
          </p>
          <h1 className='text-[15px] font-bold  '>Antecedentes del proyecto</h1>
          <p className='my-4 text-[12px]'>En 2018 realizé un <a href="https://web.archive.org/web/20180618063417/https://www.taringa.net/%2Bjuegos/billiken-compu-info-de-los-juegos-2018_16bqzi" className="font-bold underline text-blue-900" target='_blank'>post en Taringa!</a> con el objetivo de ofrecer información de como se podia obtener los videojuegos de la revista.</p>
          <p className='my-4 text-[12px]'>En 2022 realizé un nuevo <a href="https://web.archive.org/web/20220418143615/https://www.taringa.net/+juegos/billiken-compu-info-de-los-juegos-2022_4ztkc9" className="underline font-bold text-blue-900" target='_blank'>post en Taringa!</a> esta vez enfocado en recopilar información de cada edición de la revista y sus cds. </p>
          <h1 className='text-[15px] font-bold '>Sobre el contenido</h1>
          <p className='my-4 text-[12px]'>La información ha sido recopilada de diferentes fuentes en internet y material propio. como scans de las portadas y CD-Roms, CD-Roms fisicos, videos e imágenes publicitarias,  y el <a href="https://web.archive.org/web/20031010082555/http://www.billiken.com.ar:80/revista/compu/brc.htm" className="underline text-blue-900 font-bold" target='_blank'>sitio oficial de Billiken Compu</a>. Los enlaces compartidos para obtener los juegos son los oficiales.</p>
        </div>
      
        <div className="w-full md:w-[220px] h-[340px]  flex flex-col border-ridge bg-box">
          <div className="bg-black text-amber-300 font-bold text-[12px] text-center">AÚN SE NECESITA</div>
          <div className="w-full h-full overflow-y-auto  text-[12px] ">
            {
              todo.map((item)=>{
                return(
                  <ul><li className=" m-4">🔸 {item}</li></ul>
                )
              })
            }
        </div>
      </div>
    </section>

      <div className="h-[60px] flex items-center justify-end">
        <NavLink to="/home"><img src={btnReturn} className="zoom  w-[40px] h-[40px]"/></NavLink>
      </div>
    </Window>
  )
}
