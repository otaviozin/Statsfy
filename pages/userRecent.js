import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/navbar';
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
            <Head>
				<title>SpotInfo</title>
			</Head>
            <Navbar userRecent='active'/>
            <div className='container mt-4'>
                <h1 className='mb-4'>Your recently tracks</h1>
                <div className='row'>
                    {recent.map((item) => (
                        <div key={item.played_at} className='col-md-6 col-lg-4 mt-lg-5 d-flex justify-content-center mb-4'>
                            <div className='card h-100' style={{width: 288}}>
                                <Image src={item.track.album.images[0].url} priority='true' width={288} height={288} className='card-img-top rounded-top' alt='...' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.track.name}</h5>
                                    <p className='card-text'>by {item.track.artists[0].name}</p>
                                    <Link href={item.track.external_urls.spotify}>
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