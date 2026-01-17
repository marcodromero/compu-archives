export default function Covers({urlCover}) {
  return (
    <div className="flex justify-center items-center w-full md:w-[250px] h-[400px] md:h-[308px] border-ridge  bg-black">
      <img src={urlCover} className=" w-full md:w-[250px] h-full object-cover" alt ="Portada de la revista"/>
    </div>
  )
}
