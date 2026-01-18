import type { CDDataType } from '../types';
import StoreIcons from './StoreIcons';

type StoresProps = {
  cdData: CDDataType;
};
export default function Stores({ cdData }: StoresProps) {
  return (
    <div className='flex flex-col w-full border-ridge bg-box'>
      <h1 className='bg-black text-amber-300 font-bold text-[12px] text-center'>
        Tiendas oficiales
      </h1>
      <div className='flex gap-2 h-[48px] pl-2'>
        <StoreIcons cdData={cdData} />
      </div>
    </div>
  );
}
