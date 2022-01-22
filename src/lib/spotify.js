const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

// Endpoints
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const USERTOPTRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term';
const USERTOPARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists?time_range=short_term';
const USERRECENTTRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played';

const getAccessToken = async (refresh_token) => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token,
		}),
	});
	
	return response.json();
};

// User's recent tracks
export const getUsersRecentTracks = async (refresh_token) => {
	const { access_token } = await getAccessToken(refresh_token);
	return fetch(USERRECENTTRACKS_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

// User's top tracks
export const getUsersTopTracks = async (refresh_token) => {
	const { access_token } = await getAccessToken(refresh_token);
	return fetch(USERTOPTRACKS_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		}
	});
};

// User's top artists
export const getUsersTopArtists = async (refresh_token) => {
	const { access_token } = await getAccessToken(refresh_token);
	return fetch(USERTOPARTISTS_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		}
	});
};
