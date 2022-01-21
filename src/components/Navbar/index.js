import Link from 'next/link';

export default function Navbar(){
    return(
        <nav className='bg-zinc-800 p-4'>
            <div className='container'>
                <div className='flex justify-around text-center text-slate-300'>
                    <div className='grid grid-cols-1'>
                        <i className='fas fa-home'></i>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </div>
                    <div className='grid grid-cols-1'>
                        <i className='fas fa-heart'></i>
                        <Link href='/topTracks'>
                            <a>Top tracks</a>
                        </Link>
                    </div>
                    <div className='grid grid-cols-1'>
                        <i className='fas fa-star'></i>
                        <Link href='/topArtists'>
                            <a>Top artists</a>
                        </Link>
                    </div>
                    <div className='grid grid-cols-1'>
                        <i className='fas fa-history'></i>
                        <Link href='/userRecent'>
                            <a>Recent tracks</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}