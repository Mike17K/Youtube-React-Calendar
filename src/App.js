import './App.css';

function App() {
  const dateView = new Date(
    Date.UTC(2019, 0, 1)
  );

  return (
    <div className='w-[100vw] h-[100vh]'>
      {/* Side right bar */}
      <div className='h-full w-[20vw] bg-black flex flex-col justify-between py-10 items-center fixed'>
        <p className='text-[#84C8ED] text-[2rem]'>2019</p>
        <div className='flex flex-col items-center justify-center'>
          <div className='bg-transparent border-4 border-[#84C8ED] w-[4.5rem] h-[4.5rem] rounded-full'></div>
          <p className='text-[#84C8ED]'>www.jusdafda.nte.be</p>
        </div>
      </div>

      {/* Side image */}
      <div className='rounded-full fixed left-[20vw] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] flex items-center justify-center bg-cover'>
        <img src='/icons/stake.png' alt='stake image' className='h-full rounded-full'/>
        
        {/* Note */}
        <div className=' border-4 border-white absolute rounded-full -top-5 -right-5 bg-[#84C8ED] w-[8rem] h-[8rem] flex items-center justify-center text-white text-[4rem]'>01</div>
      </div>

      {/* Calendar View */}
      <div className='w-[50vw] ml-auto mr-[5rem]'>
        <h1 className='text-[3rem] w-[3rem] border-b-4 border-[#84C8ED] '>JANEIRO</h1>

        {/* Calendar Header */}
        <div className='w-full grid grid-cols-7 gap-2 my-10'>
          {
            ['SEG', 'TER', 'QUA', 'QUI', 'SEX','SAB', 'DOM'].map((day, index) => (
              <div key={index} 
              className={`text-center ${index > 4? "text-white bg-[#84C8ED]":"text-black"}  rounded-full border-2 border-black  aspect-square text-[1.5rem] flex items-center justify-center`}>{day}</div>
            ))
            }

          {/* Calendar Body */}
          {
            Array(6*7).fill(0).map((_, index) => {
              let offset = 0;
              if ((0 + 2) - (new Date(Date.UTC(dateView.getUTCFullYear(), dateView.getUTCMonth(), 1)).getUTCDay()) > 0) {
                offset = 7;
              } 

              const date = new Date(Date.UTC(dateView.getUTCFullYear(), dateView.getUTCMonth(), (index + 2 - offset) - (new Date(Date.UTC(dateView.getUTCFullYear(), dateView.getUTCMonth(), 1)).getUTCDay())));
              const isSelectedDate = dateView.getFullYear() === date.getFullYear() && dateView.getMonth() === date.getMonth() && dateView.getDate() === date.getDate();
              return <div key={index} 
              className={`
                flex items-center justify-center text-[1.5rem]
                ${isSelectedDate? 'text-red-600':''}
                ${date.getUTCDay() === 0 || date.getUTCDay() === 6 ? 'text-[#84C8ED]':'text-black'}
                ${date.getMonth() !== dateView.getMonth()? 'text-gray-400':''}
                `}
              >{date.getDate()}</div>
            })
          }
      </div>

      {/* Calendar Footer */}
      <div className='border-2 border-black border-dotted w-[50vw]'></div>
      <p className='w-full text-end'>Cibtratenuza Ybuversak - Ano Novo</p>
      
      <div className='w-[70vw] fixed bottom-10 right-10 flex gap-4 items-center justify-between'>
        <p>[16]9 9364 9438</p>
        <p>www.jusdafda.nte.be</p>
        <p>Rua Luis Puglia,2018 Jd.Rivera</p>
      </div>

      </div>
    </div>
  );
  }

export default App;
