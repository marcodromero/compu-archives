
import Window from "../components/Window";
import logo from '../assets/compu-logo.png'

export default function About() {
  
  return (
    <Window id="links">
      <div className="h-[60px] flex items-center justify-between">
            <img src={logo} className="w-[100px]"/>
            <h1 className="text-[18px] text-white text-right w-[500px]">Sobre el proyecto</h1>
      </div>
      <section className="flex justify-between">
      <div className="w-[440px]">
        <h1 className='text-[15px] font-bold  '>¿Qué fue Billiken Compu?</h1>
        <p className='my-4 text-[12px]'>
          <b>Billiken Compu</b> fue una revista de informática dirigida al público infantil y adolescente, que se publicó mensualmente desde octubre de 1999 hasta diciembre de 2001. Cada ejemplar venía con uno o varios CD-ROM que incluían juegos y programas. La revista dejó de publicarse en coincidencia con el estallido social y la crisis económica que afectaba a la Argentina en aquel momento.
        </p>
        <h1 className='text-[15px] font-bold  '>Antecedentes del proyecto</h1>
        <p className='my-4 text-[12px]'>En 2018 realizé un <a href="https://web.archive.org/web/20180618063417/https://www.taringa.net/%2Bjuegos/billiken-compu-info-de-los-juegos-2018_16bqzi" className="underline text-blue-900" target='_blank'>post en Taringa!</a> con el objetivo de ofrecer información de como se podia obtener los videojuegos de la revista.</p>
        <p className='my-4 text-[12px]'>En 2022 realizé un nuevo <a href="https://web.archive.org/web/20220418143615/https://www.taringa.net/+juegos/billiken-compu-info-de-los-juegos-2022_4ztkc9" className="underline text-blue-900" target='_blank'>post en Taringa!</a> esta vez enfocado en recopilar información de cada edición de la revista y sus cds. </p>
        <h1 className='text-[15px] font-bold '>Sobre el contenido</h1>
        <p className='my-4 text-[12px]'>La información ha sido recopilada y organizada gracias a diferentes fuentes como scans de las portadas y CD-Roms, CD-Roms fisicos, videos e imágenes publicitarias,  y el <a href="https://web.archive.org/web/20031010082555/http://www.billiken.com.ar:80/revista/compu/brc.htm" className="underline text-blue-900" target='_blank'>sitio oficial de Billiken Compu</a>. Los enlaces compartidos para obtener los juegos son los oficiales.</p>
      </div>
      
        <div className="w-[220px] h-[350px]  flex flex-col border-ridge">
            <div className="bg-black text-amber-300 font-bold text-[12px] text-center">NOVEDADES</div>
            <div className="w-full h-full overflow-y-auto  bg-neutral-600 text-white  ">
              <ul><li>Sitio puesto en Linea.</li></ul>
            </div>
        </div>
  
      
      
      </section>
    </Window>
  )
}
