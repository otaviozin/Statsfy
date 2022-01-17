import { useState, useEffect } from 'react';  
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar/navbar';

export default function UserPlaylists(){
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const getMyPlaylists = async () => {
            const res = await fetch('../../api/userPlaylists');
            const {items} = await res.json();
            setPlaylists(items);
        }
        getMyPlaylists();
    }, []);

    return(
        <div>
            <Head>
                <title>SpotInfo</title>
            </Head>
            <Navbar userPlaylists='active'/>
            <div className='container mt-4'>
            <h1 className='mb-4'>Your playlists</h1>
                <div className='row'>
                    {playlists.map((item) => (
                        <div key={item.id} className='col-md-6 col-lg-4 mt-lg-5 d-flex justify-content-center mb-4'>
                            <div className='card h-100' style={{width: 288}}>
                                <Image src={item.images[0].url} priority='true' width={288} height={288} className='card-img-top rounded-top' alt='...' /> 
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <p className='card-text'>by {item.owner.display_name}</p>
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