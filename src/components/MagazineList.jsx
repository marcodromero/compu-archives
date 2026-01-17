export default function MagazineList({magazines, handleSelectMagazine, idMagazine}) {
  return (
    <div className="w-full h-[340px] md:w-[200px] flex flex-col border-ridge">
      <div className="bg-black text-amber-300 font-bold text-[12px] text-center">Revistas</div>
      <div className="w-full h-full overflow-scroll bg-white">
      {
        magazines.map((bc, i)=>{
          return (
            <button key={`bc${bc.edition}`}  id={`bc${bc.edition}`} onClick={()=>handleSelectMagazine(i)} className={`block text-[12px]  hover:bg-indigo-950 w-full text-left border-t-1 border-b-1 border-t-indigo-600 ${i === idMagazine ? "bg-indigo-950" : " bg-indigo-900" }  border-b-neutral-800 p-2 text-amber-300 `
              } title={`Revista N° ${bc.edition}`} ><span className="bg-amber-500 text-black rounded-full px-1 font-bold" >N°{bc.edition}</span>   {bc.published} <div ><small className=" text-white">{bc.description}</small></div></button>
          )
        })
      }
      </div>
  </div>
  )
}
