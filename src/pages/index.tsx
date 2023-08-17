"use client";
import Header from "./components/Organisms/header";
import News from "./components/Atoms/news";
import TokyoWeather from "./components/Atoms/weatherButton";

function HomePage() {
  return (  
    <div>
      <header className="fixed w-full top-0">
        <Header/>
      </header>
      <main className="bg-gray-900 mt-20">
        <h1 className='text-white ml-8'>Headlines</h1>
        <div className="flex flex-col md:flex-row mx-0">
          <div className="flex-1 mx-8 mb-2 md:mb-0">
            <News />
          </div>
          <div className='flex-2 mx-8 mb-2'>
            <TokyoWeather />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage

