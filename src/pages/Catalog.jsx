import { useState } from "react";
import Window from "../components/Window";
import data  from "../data/data";
import { useNavigate } from "react-router-dom";
import logo from '../assets/compu-logo.png'
import revistas_title from '../assets/revistas_y_cds.png'

import arrowRight from '../assets/arrow-right.png'
import arrowLeft from '../assets/arrow-left.png'

import staticTv from '../assets/static-tv.gif'

export default function Catalog() {
  const [indexData, setIndexData] = useState(0)
  const [indexGift, setIndexGift] = useState(0)

  const navigate = useNavigate();
  const lastIndexGifts = data[indexData].gifts.length - 1;

  function handleClickNextGift(){
    (indexGift < lastIndexGifts) ? setIndexGift(indexGift + 1) : setIndexGift(0)
  }
  function handleClickBackGift(){
    (indexGift > 0) ? setIndexGift(indexGift - 1) : setIndexGift(lastIndexGifts)
  }

  function handleClickSetIndexData(i){
    setIndexData(i)
    setIndexGift(0)
  }

  function handleClickCD(code){
    navigate(`/cd/${code}`)
  }

  return (
    <Window id="catalog">
      <div className="h-[60px] flex items-center justify-between">
        <img src={logo} className="w-[100px]"/>
        <img src={revistas_title} className="w-[150px]"/>
      </div>
      
      <section className="flex flex-col md:flex-row md:justify-around">
        <div className="w-full h-[350px] md:w-[200px] flex flex-col border-ridge">
            <div className="bg-black text-amber-300 font-bold text-[1.2rem] text-center">REVISTAS</div>
            <div className="w-full h-full overflow-scroll  bg-white  ">
            {
              data.map((bc, i)=>{
                return (
                  <button key={`bc${bc.edition}`}  id={`bc${bc.edition}`} onClick={()=>handleClickSetIndexData(i)} className="block text-[1.2rem]  hover:bg-gray-400 w-full text-left ">{`N°${bc.edition} - ${bc.published} `}</button>
                )
              })
            }
            </div>
        </div>

        {/*Magazines*/}
        <section className="flex flex-col md:justify-between">
          <div className="flex justify-center items-center w-[250px] h-[308px] border-ridge  bg-black">
            <img src={data[indexData].cover} className=" w-[250px] h-full object-cover"/>
          </div>
          <div class="w-[250px] h-[30px] border-ridge bg-[#3541ab] overflow-hidden">

          </div>
        </section>

        
        <div className="flex flex-col justify-between ">
        {/*Videos*/}
          <div className="w-[200px] h-[172px] border-ridge bg-black overflow-hidden">
            <div className="bg-black text-amber-300 font-bold text-[1.2rem] text-center">PUBLICIDAD EN TV</div>
            {
              data[indexData].video?
                <video src={data[indexData].video} controls className="w-[200px] h-[150px]">
              Tu navegador no admite el elemento video.
              </video> :
              <img src={staticTv} className="w-[full] h-[full] object-cover"/>
              
            }
          </div>
        {/*CD's*/}
          <div className="w-[200px] h-[170px] bg-blue-900  border-ridge">
            <div className="bg-black text-amber-300 font-bold text-[1.2rem] text-center">CD-ROMS</div>
            <div className="flex flex-col justify-between h-[144px] items-center">
              {
                
                    <button className=" w-[150px] h-[120px] flex justify-center" onClick={()=>handleClickCD(data[indexData].gifts[indexGift].code)} ><img src={data[indexData].gifts[indexGift].preview} className=" w-[150px] h-[120px] object-contain"/>
                    </button> 
                
              }
              
            
            <div className="flex justify-center items-center w-full h-[20px] bg-fuchsia-700">
              {data[indexData].gifts.length > 1 &&
              <button onClick={handleClickBackGift}><img src={arrowLeft} className="w-[20px]" /></button>}
                <p className="font-bold w-[100px] text-center">CD-ROM N°1</p>
              {data[indexData].gifts.length > 1 &&
              <button onClick={handleClickNextGift}><img src={arrowRight} className="w-[20px]" /></button>}
            </div>

            </div>
            
            
          </div>
        </div>
      </section>
    </Window>
  )
}
