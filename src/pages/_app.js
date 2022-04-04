import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import Script from 'next/script';
import '../index.css';

export default function App({Component, pageProps: {session, ...pageProps}}){
	return(
		<div>
			<Head>
				<title>Statsfy</title>
			</Head>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
			<Script src='https://kit.fontawesome.com/aef06a57f1.js' crossorigin='anonymous' />
		</div>
	);
}
