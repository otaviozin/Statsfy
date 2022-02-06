import { useSession, signIn, signOut } from 'next-auth/react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

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
		<div className='container lg:mt-12 mt-8 text-white mx-auto text-center'>
			<h1 className='text-5xl font-bold'>Statsfy</h1>
			<div className='grid grid-cols-2 text-center mx-4 mt-4'>
				<div className='col-span-2 lg:col-span-1 lg:text-left'>
					<h2 className='text-3xl font-bold mt-7'>Required Spotify access</h2>
					<p className='text-slate-300 mt-4'>The app requires access to your account, but we do not change or save any user data.</p>
					<h2 className='text-3xl font-bold mt-7'>Scopes</h2>
					<p className='text-slate-300 mt-4'>Scopes allow the app to use user-specific information. In this app we use the following scopes:</p>
					<ul className='list-disc ml-12 mt-4 underline text-left'>
						<Link href='https://developer.spotify.com/documentation/general/guides/authorization/scopes/#user-read-email'>
							<a><li>user-read-email</li></a>
						</Link>
						<Link href='https://developer.spotify.com/documentation/general/guides/authorization/scopes/#user-top-read'>
							<a><li>user-top-read</li></a>
						</Link>
						<Link href='https://developer.spotify.com/documentation/general/guides/authorization/scopes/#user-read-recently-played'>
							<a><li>user-read-recently-played</li></a>
						</Link>
					</ul>
					<Link href='https://developer.spotify.com/documentation/general/guides/authorization/scopes/'>
						<a><p className='text-slate-300 mt-4 underline'>Read more about Spotify scopes</p></a>
					</Link>
				</div>
				<div className='col-span-2 lg:col-span-1'>
					<h2 className='text-3xl font-bold mt-8'>Ready to see your stats? Sign in with Spotify</h2>
					<button className='rounded mt-8 mb-8 bg-green-500 hover:bg-green-700 py-2 px-6' onClick={() => signIn('spotify')}>Sign in</button>
				</div>
			</div>
			<p className='text-neutral-400 mb-8'>Made by Otávio</p>
		</div>
	);
}
