import Link from 'next/link';

const Tabs: React.FC = () => {
    return (
        <div className="tabs flex justify-between md:justify-start">
            <Link href="/" className='border p-1 rounded text-white w-1/5 md:w-auto text-xs md:text-base text-center md:text-left'>Top stories</Link>
            <Link href="/business" className='border p-1 rounded text-white w-1/5 md:w-auto text-xs md:text-base text-center md:text-left'>Business</Link>
            <Link href="/technology" className='border p-1 rounded text-white w-1/5 md:w-auto text-xs md:text-base text-center md:text-left'>Technology</Link>
            <Link href="/entertainment" className='border p-1 rounded text-white w-1/5 md:w-auto text-xs md:text-base text-center md:text-left'>Entertainment</Link>
            <Link href="/sports" className='border p-1 rounded text-white w-1/5 md:w-auto text-xs md:text-base text-center md:text-left'>Sports</Link>
        </div>
    );
};

export default Tabs;
