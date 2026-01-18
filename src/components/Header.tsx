import logo from '../assets/compu-logo.webp';

type HeaderProps = {
  title?: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <div className='h-[60px] flex items-center justify-between'>
      <img src={logo} className='w-[100px]' alt='' />
      <h1 className='text-[18px] text-white text-right w-[500px]'>{title}</h1>
    </div>
  );
}
