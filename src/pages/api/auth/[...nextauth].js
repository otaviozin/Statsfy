import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

var scopes = [
	'user-read-email',
	'user-top-read',
	'user-read-recently-played',
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
