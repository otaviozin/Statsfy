import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/navbar';
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
            <Navbar topArtists='active'/>
            <div className='container mt-4'>
                <h1 className='mb-4'>Your top 15 most listened artists</h1>
                <div className='row'>
                    {artists.map((item) => (
                        <div key={item.id} className='col-md-6 col-lg-4 mt-lg-5 d-flex justify-content-center mb-4'>
                            <div className='card h-100' style={{width: 288}}>
                                <Image src={item.images[0].url} priority='true' width={288} height={288} className='card-img-top rounded-top' alt='...' /> 
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <p className='card-text'>by {item.name}</p>
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