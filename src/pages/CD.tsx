import { NavLink } from 'react-router-dom';
import { Window, Stores, Header } from '../components';
import { useCDGallery } from '../custom/useCDGallery';
import btnReturn from '../assets/btn-return.webp';
import arrowRight from '../assets/static-red-arrow-right.webp';
import arrowLeft from '../assets/static-red-arrow-left.webp';

export default function CD() {
  const { index, cdData, handleClickNext, handleClickBack } = useCDGallery();
  return (
    <Window id='cd'>
      <Header title={cdData?.title} />
      <section className='flex text-white flex-col md:flex-row md:justify-between '>
        <section className='flex flex-col w-full md:w-[370px] h-[340px] border-ridge bg-box'>
          <h1 className='bg-black text-amber-300 font-bold text-[12px] text-center'>
            Galeria de imágenes
          </h1>
          <div>
            {cdData?.images ? (
              <img
                src={cdData.images[index]}
                className=' w-[370px] h-[280px] object-contain'
                alt='Capturas del CD y contenido'
              />
            ) : null}
          </div>
          <div className='flex justify-center items-center w-full h-[60px] gap-10'>
            <button onClick={handleClickBack}>
              <img
                src={arrowLeft}
                className='w-[30px] h-[20px] object-contain big-zoom'
                alt='Mostrar imagen anterior del CD'
              />
            </button>
            <button onClick={handleClickNext}>
              <img
                src={arrowRight}
                className='w-[30px] h-[20px] object-contain big-zoom'
                alt='Mostrar imagen siguiente del CD'
              />
            </button>
          </div>
        </section>

        <div className='flex flex-col w-full md:w-[300px] justify-between'>
          <div className='flex flex-col w-full border-ridge bg-box'>
            <h2 className='bg-black text-amber-300 font-bold text-[12px] text-center'>
              Contenido del CD-ROM
            </h2>
            <ul className=' w-full h-[230px] '>
              {cdData?.content
                ? cdData.content.map((item, i) => {
                    return (
                      <li className='text-[13px] m-2' key={i}>
                        🔸 {item}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>

          {cdData && <Stores cdData={cdData} />}
        </div>
      </section>
      <div className='h-[60px] flex items-center justify-end'>
        <NavLink to='/revistas'>
          <img
            src={btnReturn}
            className='tiny-zoom  w-[40px] h-[40px]'
            alt='Volver al catalogo de revistas'
          />
        </NavLink>
      </div>
    </Window>
  );
}
