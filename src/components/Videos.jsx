import staticTv from '../assets/static-tv.gif'

export default function Videos({src}) {
  return (
    <div className="w-full md:w-[200px] h-[260px] md:h-[172px] border-ridge bg-black overflow-hidden">
      <div className="bg-black text-amber-300 font-bold text-[12px] text-center">Publicidad en TV</div>
      {
        src
        ? <video src={src} controls className=" md:w-[200px] md:h-[150px]">
            Tu navegador no admite el elemento video.
          </video> 
        : <img src={staticTv} className="w-full  object-cover" alt="No hay video de la publicidad para esta revista"/>
      }
    </div>
  )
}
