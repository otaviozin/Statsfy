import Link from 'next/link';

export default function Navbar(props){

    let Classname = 'nav-link ';

    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <Link href='/'>
                    <a className='navbar-brand'>SpotInfos</a>
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav ms-auto align-items-center'>
                        <Link href='/topTracks'>
                            <a className={Classname + props.topTracks}>Top tracks</a>
                        </Link>
                        <Link href='/topArtists'>
                            <a className={Classname + props.topArtists}>Top artists</a>
                        </Link>
                        <Link href='/userPlaylists'>
                            <a className={Classname + props.userPlaylists}>Playlists</a>
                        </Link>
                        <Link href='/userRecent'>
                            <a className={Classname + props.userRecent}>Recent tracks</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}