import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import Script from 'next/script';
import '../index.css';

export default function App({Component, pageProps: {session, ...pageProps}}){
	return(
		<div>
			<Head>
				<title>SpotInfos</title>
			</Head>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
			<Script src='https://kit.fontawesome.com/137d032f44.js' crossorigin='anonymous' />
		</div>
	);
}