import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/navbar';
import Head from 'next/head';
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
            <Head>
				<title>SpotInfo</title>
			</Head>
            <Navbar topTracks='active'/>
            <div className='container mt-4'>
                <h1 className='mb-4'>Your top 15 most listened songs</h1>
                <div className='row'>
                    {tracks.map((item) => (
                        <div key={item.id} className='col-md-6 col-lg-4 mt-lg-5 d-flex justify-content-center mb-4'>
                            <div className='card h-100' style={{width: 288}}>
                                <Image src={item.album.images[0].url} priority='true' width={288} height={288} className='card-img-top rounded-top' alt='...' /> 
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <p className='card-text'>by {item.artists[0].name}</p>
                                    <Link href={item.external_urls.spotify}>
                                        <a className='btn btn-success'>Listen on Spotify</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}