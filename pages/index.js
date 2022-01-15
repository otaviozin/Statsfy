import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home(){
	const {data: session} = useSession();
	
	if(session){
		return(
			<div className='container p-5 mt-4'>
				<div className='row'>
					<div className='col-md-6'>
						<div className="card shadow-lg mb-3" style={{maxWidth: 540}}>
							<div className="row g-0">
								<div className="col-md-4 p-2 pt-3">
									<Image src={session?.token?.picture} height={500} width={500} className='img-fluid rounded-circle' alt='...' />
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title pt-4">{session?.token?.name}</h5>
										<p className="card-text">Email: {session?.token?.email}</p>
										<button className='btn btn-danger' onClick={() => signOut()}>Sign out</button>
									</div>
								</div>
							</div>
						</div>	
					</div>
					<div className='col-md-2 mb-4 mt-lg-5 text-center'>
						<Link href='/topTracks'>
							<a className='btn btn-primary ms-lg-5'>Your top tracks</a>
						</Link>
					</div>
					<div className='col-md-2 mb-4 mt-lg-5 text-center'>
						<Link href='/topArtists'>
							<a className='btn btn-secondary ms-lg-5'>Your top artists</a>
						</Link>
					</div>
					<div className='col-md-2 mt-lg-5 text-center'>
						<Link href='/userPlaylists'>
							<a className='btn btn-success'>Playlists</a>
						</Link>
					</div>
				</div>
			</div>	
		);
	}

	return(
		<div className='container text-center'>
			<div className='row'>
				<div className='col-md-12 mt-5 pt-5 mb-3'>
					<h2>Login with Spotify</h2>
				</div>
				<div className='col-md-12'>
					<button className='btn btn-success mb-4' onClick={() => signIn()}>Sign in</button>
					<p className='text-muted'>Made by Otávio</p>
				</div>
			</div>
		</div>
		
	);
}