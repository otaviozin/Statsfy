import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function TopArtists(){
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const getMyTopArtists = async () => {
            const res = await fetch('api/userTopArtists');
            const {items} = await res.json();
            setArtists(items);
        }
        getMyTopArtists();
    }, []);

    return(
        <div>
            <Navbar />
            <div className='container mx-auto text-center lg:text-left text-slate-300'>
                <h1 className='my-4 font-semibold text-2xl lg:ml-3'>Your top 20 most listened artists</h1>
                <div className='grid grid-cols-1 text-left'>
                    {artists.map((item) => (
                        <Link key={item.id} href={item.external_urls.spotify} passHref >
                            <div className='bg-zinc-800 hover:bg-zinc-900 outline outline-transparent hover:outline-green-500 p-3 mx-2 my-1 rounded-lg cursor-pointer'>
                                <div className='grid grid-rows-2 grid-flow-col flex justify-start'>
                                    <div className='row-span-2 mt-1'>
                                        <Image src={item.images[0].url} priority='true' width={80} height={80} className='rounded-full' alt='...' /> 
                                    </div>
                                    <div className='col-span-2 row-span-2 ml-8 mt-8'>
                                        <h1>{item.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}