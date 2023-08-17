import { useRouter } from 'next/router';
import Header from './components/Organisms/header';
import News from './components/Atoms/news';
import React from 'react';

const TabContent = () => {
    const router = useRouter();
    const { id } = router.query;

    switch (id) {
      case 'business':
        return ( 
          <div>
          <header className="fixed w-full top-0 ">
            <Header/>
          </header>
          <div className="flex flex-center mx-0">
            <main className="bg-gray-900 mt-20">
              <h1 className='text-white ml-24 mt-5'>Business</h1>
              <div className="flex-1 mx-24">
                <News />
              </div>
            </main>
          </div>
          </div>
      );
      case 'technology':
        return ( 
          <div>
          <header className="fixed w-full top-0 z-0">
            <Header/>
          </header>
          <div className="flex flex-center mx-0">
            <main className="bg-gray-900 mt-20">
              <h1 className='text-white ml-24 mt-5'>Technology</h1>
              <div className="flex-1 mx-24">
                <News />
              </div>
            </main>
          </div>
          </div>
        );
      case 'entertainment':
        return ( 
          <div>
          <header className="fixed w-full top-0 z-0">
            <Header/>
          </header>
          <div className="flex flex-center mx-0">
            <main className="bg-gray-900 mt-20">
              <h1 className='text-white ml-24 mt-5'>Entertainment</h1>
              <div className="flex-1 mx-24">
                <News />
              </div>
            </main>
          </div>
          </div>
        );
      case 'sports':
        return ( 
          <div>
          <header className="fixed w-full top-0 z-0">
            <Header/>
          </header>
          <div className="flex flex-center mx-0">
            <main className="bg-gray-900 mt-20">
              <h1 className='text-white ml-24 mt-5'>Sports</h1>
              <div className="flex-1 mx-24">
                <News />
              </div>
            </main>
          </div>
          </div>
        );   
      default:
        return <div>Not Found</div>;
  }
};

export default TabContent;
