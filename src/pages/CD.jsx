import { useParams } from "react-router-dom";
import cds  from "../data/cds";
import Window from "../components/Window";
import { useState } from "react";
import logo from '../assets/compu-logo.png'


export default function CD() {
  const { code } = useParams();
  const cdData = cds.find(cd => cd.code === code);
  const [index, setIndex] = useState(0)

  const images = cdData.images ? cdData.images : [];
  const lastIndex = images.length - 1;

  function handleClickNext(){
    (index < lastIndex) ? setIndex(index + 1) : setIndex(0)
    console.log(index)
  }
  function handleClickBack(){
    (index > 0) ? setIndex(index - 1) : setIndex(lastIndex)
  }

  return (
     <Window id="cd">
        <div className="h-[60px] flex items-center justify-between">
            <img src={logo} className="w-[100px]"/>
            <h1 className="text-[18px] text-white text-right w-[500px]">{cdData.title}</h1>
        </div>
        <section className="flex text-white justify-between " >
          <section className="flex flex-col w-[300px] border-ridge">
            <h1 className="bg-black text-amber-300 font-bold text-[1.2rem] text-center">Galeria de imágenes</h1>
            <div>
              {
                cdData.images
                ? <img src={cdData.images[index]} className="w-[300px]"/>
                : null
              }
              
            </div>
            <div>
              <button onClick={handleClickBack}>Anterior</button>
              <button onClick={handleClickNext}>Siguiente</button>
            </div>
          </section>
      
          <div className="flex flex-col w-[340px] border-ridge">
            <h2  className="bg-black text-amber-300 font-bold text-[1.2rem] text-center">Contenido del CD-ROM</h2>
            <ul className=" w-[340px] h-[200px] ">
              {
                cdData.content
                ?(cdData.content.map((item)=>{
                  return(
                    <li className="text-[13px]">🔸 {item}</li>
                  )
                }))
                : null
              }
            </ul>
            <div className="flex flex-col">
              {
                cdData.steam
                ? <a href={cdData.steam}>Ver en Steam</a>
                : null     
              }
              {
                cdData.gog
                ? <a href={cdData.gog}>Ver en GOG.com</a>
                : null
              }
              {
                cdData.website
                ? <a href={cdData.download}>Ver en el sitio oficial </a>
                : null
              }
            </div>
          </div>
    
        
      </section>
    </Window>
  )
}
