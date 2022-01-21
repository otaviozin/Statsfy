import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function RecentTracks(){
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        const getRecentTracks = async () => {
            const res = await fetch('api/userRecentTracks');
            const {items} = await res.json();
            setRecent(items);
        }
        getRecentTracks();
    }, []);
    return(


        <div>
            <Navbar />
            <div className='container mx-auto text-center lg:text-left text-slate-300'>
                <h1 className='my-4 font-semibold text-2xl lg:ml-3'>Your recently tracks</h1>
                <div className='grid grid-cols-1 text-left'>
                    {recent.map((item) => (
                        <Link key={item.id} href={item.track.external_urls.spotify} passHref >
                            <div className='bg-zinc-800 hover:bg-zinc-900 outline outline-transparent hover:outline-green-500 p-3 mx-2 my-1 rounded-lg cursor-pointer'>
                                <div className='grid grid-rows-2 grid-flow-col flex justify-start'>
                                    <div className='row-span-2 mt-1'>
                                        <Image src={item.track.album.images[0].url} priority='true' width={80} height={80} className='rounded-full' alt='...' /> 
                                    </div>
                                    <div className='col-span-2 ml-8 mt-4'>
                                        <h1>{item.track.name}</h1>
                                    </div>
                                    <div className='col-span-2 ml-8'>
                                        <h1>by {item.track.artists[0].name}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>


        // <div>
        //     <Navbar />
        //     <div className='container mt-4'>
        //         <h1 className='mb-4'>Your recently tracks</h1>
        //         <div className='row'>
        //             {recent.map((item) => (
        //                 <div key={item.played_at} className='col-md-6 col-lg-4 mt-lg-5 d-flex justify-content-center mb-4'>
        //                     <div className='card h-100' style={{width: 288}}>
        //                         <Image src={item.track.album.images[0].url} priority='true' width={288} height={288} className='card-img-top rounded-top' alt='...' />
        //                         <div className='card-body'>
        //                             <h5 className='card-title'>{item.track.name}</h5>
        //                             <p className='card-text'>by {item.track.artists[0].name}</p>
        //                             <Link href={item.track.external_urls.spotify}>
        //                                 <a className='btn btn-success'>Listen on Spotify</a>
        //                             </Link>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))
        //             }
        //         </div>
        //     </div>
        // </div>
    );
}