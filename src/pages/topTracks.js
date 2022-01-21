import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function TopTracks(){
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const getMyTopTracks = async () => {
            const res = await fetch('api/userTopTracks');
            const {items} = await res.json();
            setTracks(items);
        }
        getMyTopTracks();
    }, []);

    return(

        <div>
            <Navbar />
            <div className='container mx-auto text-center lg:text-left text-slate-300'>
                <h1 className='my-4 font-semibold text-2xl lg:ml-3'>Your top 20 most listened tracks</h1>
                <div className='grid grid-cols-1 text-left'>
                    {tracks.map((item) => (
                        <Link key={item.id} href={item.external_urls.spotify} passHref >
                            <div className='bg-zinc-800 hover:bg-zinc-900 outline outline-transparent hover:outline-green-500 p-3 mx-2 my-1 rounded-lg cursor-pointer'>
                                <div className='grid grid-rows-2 grid-flow-col flex justify-start'>
                                    <div className='row-span-2 mt-1'>
                                        <Image src={item.album.images[0].url} priority='true' width={80} height={80} className='rounded-full' alt='...' /> 
                                    </div>
                                    <div className='col-span-2 ml-8 mt-4'>
                                        <h1>{item.name}</h1>
                                    </div>
                                    <div className='col-span-2 ml-8'>
                                        <h1>by {item.artists[0].name}</h1>
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
        //     <div className='container mx-auto text-slate-300'>
        //         <h1 className=''>Your top 20 most listened songs</h1>
        //         {tracks.map((item) => (
        //             <div key={item.id} className='col-md-6 col-lg-4 mt-lg-5 d-flex justify-content-center mb-4'>
        //                 <div className='card h-100' style={{width: 288}}>
        //                     <Image src={item.album.images[0].url} priority='true' width={288} height={288} className='card-img-top rounded-top' alt='...' /> 
        //                     <div className='card-body'>
        //                         <h5 className='card-title'>{item.name}</h5>
        //                         <p className='card-text'>by {item.artists[0].name}</p>
        //                         <Link href={item.external_urls.spotify}>
        //                             <a className='btn btn-success'>Listen on Spotify</a>
        //                         </Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))
        //         }
        //     </div>
        // </div>
    );
}