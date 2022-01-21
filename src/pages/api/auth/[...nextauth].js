import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

var scopes = [
	'ugc-image-upload',
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing',
	'streaming',
	'app-remote-control',
	'user-read-email',
	'user-read-private',
	'playlist-read-collaborative',
	'playlist-modify-public',
	'playlist-read-private',
	'playlist-modify-private',
	'user-library-modify',
	'user-library-read',
	'user-top-read',
	'user-read-playback-position',
	'user-read-recently-played',
	'user-follow-read',
	'user-follow-modify'
];

export default NextAuth({
	providers: [
		SpotifyProvider({
			authorization:
			`https://accounts.spotify.com/authorize?scope=${scopes}`,
			clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
			clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
		}),
	],
	secret: process.env.JWT_SECRET,
	callbacks: {
		async jwt({token, account}){
			if (account) {
				token.accessToken = account.refresh_token;
			}
			return token;
		},
		async session(session, user){
			session.user = user;
			return session;
		},
	},
});
