import { NavLink } from 'react-router-dom';
import useCatalogo from './hooks/useCatalogo';
import btnReturn from '../../assets/images/btn-return.webp';
import Window from '../../components/Window';
import Header from '../../components/Header';
import MagazineList from './components/MagazineList';
import Covers from './components/MagazineCover';
import Videos from './components/VideoPlayer';
import CDGallery from './components/CDSlider';

export default function Catalog() {
  const {
    idMagazine,
    magazines,
    currentCD,
    currentCDNumber,
    currentMagazine,
    totalCDs,
    handleSelectMagazine,
    handleShowNextCD,
  } = useCatalogo();

  return (
    <Window id='catalog'>
      <Header title='Revistas y CD-Roms' />
      <section className='flex flex-col md:flex-row md:justify-around'>
        <MagazineList
          magazines={magazines}
          handleSelectMagazine={handleSelectMagazine}
          idMagazine={idMagazine}
        />

        <section className='flex flex-col md:justify-between h-[425px] md:h-[340px]'>
          <Covers urlCover={currentMagazine.cover} />
          <div className='w-full md:w-[250px] h-[25px] border-ridge bg-[#3541ab] '></div>
        </section>

        <div className='flex flex-col justify-between  md:h-[340px]'>
          <Videos src={currentMagazine.video} />
          <CDGallery
            handleShowNextCD={handleShowNextCD}
            currentCD={currentCD}
            totalCDs={totalCDs}
            currentCDNumber={currentCDNumber}
          />
        </div>
      </section>

      <div className='h-[60px] flex items-center justify-end'>
        <NavLink to='/'>
          <img
            src={btnReturn}
            className='tiny-zoom w-[40px] h-[40px]'
            alt='Ir a la página principal del sitio'
          />
        </NavLink>
      </div>
    </Window>
  );
}
