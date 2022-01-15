import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App({Component, pageProps: {session, ...pageProps}}){
	return(
		<div>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
			<Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p' crossorigin='anonymous' />
		</div>
	);
}