type WindowProps = {
  children: React.ReactNode;
  id: string;
};

function Window({ children, id }: WindowProps) {
  return (
    <>
      <section
        id={id}
        className='m-auto w-full md:w-[750px] md:h-[500px] min-h-dvh h-auto md:min-h-0  p-6 flex flex-col items-center  window select-none'
      >
        <main className='w-full md:w-[680px] md:h-[450px]'>{children}</main>
      </section>
    </>
  );
}

export default Window;
