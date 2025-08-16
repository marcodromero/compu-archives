
function Window({children, id}) {
  return (
    <>
      <section id={id} className="m-auto w-full md:w-[750px] md:h-[500px] h-full p-6 flex flex-col items-center justify-center window" >
        
        <main className='w-[680px] h-[450px]'>
          {children}
        </main>
      
      </section>
    </>
  );
}

export default Window;