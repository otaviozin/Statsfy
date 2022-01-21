import { useSession, signIn, signOut } from 'next-auth/react';
import Navbar from '../components/Navbar';

export default function Home(){
	const {data: session} = useSession();
	if(session){
		return(
			<div>
				<Navbar />
				<div className='container mx-auto text-slate-300'>
					<h1 className='m-4 text-2xl lg:font-semibold'>Hello, {session?.token?.name}!</h1>
					<p className='m-4 text-lg'>SpotInfos is a website where you can see your most listened songs and artists, as well as being able to see the songs you&apos;ve listened to recently.</p>
					<p className='m-4 text-lg'>To start, choose an option above and enjoy :)</p>
					<p className='m-4 text-lg'>Follow me on <a className='text-green-500' href='https://github.com/otaviozin'>Github</a>.</p>
					<div className='grid grid-cols-1 text-center'>
						<button className='mx-32 lg:mx-auto rounded mt-4 mb-12 bg-red-700 hover:bg-red-900 py-2 px-6' onClick={() => signOut()}>Sign Out</button>
					</div>
				</div>
			</div>	
		);
	}

	return(
		<div className='container lg:mt-40 mt-32 text-white mx-auto text-center'>
			<div className='grid grid-cols-1'>
				<h1 className='text-5xl font-bold'>Login with Spotify</h1>
				<button className='mx-32 lg:mx-auto rounded mt-12 mb-12 bg-green-500 hover:bg-green-700 py-2 px-6' onClick={() => signIn()}>Sign in</button>
				<p className='text-neutral-400'>Made by Otávio</p>
			</div>
		</div>
	);
}