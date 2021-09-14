import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	providers: [
		Providers.IdentityServer4({
			id: "identity-server4",
			name: "Delta - Identity Server",
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			params: { grant_type: "authorization_code" },
			scope: "openid profile name email roles",
			domain: "identita.delta-skola.cz",
		}),
	],
	jwt: {
		secret: process.env.JWT_SIGNING_PRIVATE_KEY,
	},
	callbacks: {
		jwt: async (token, _user, _account, profile, _isNewUser) => {
			if (profile) {
				token.profile = profile;
			}
			return Promise.resolve(token);
		},
		session: async (session, user) => {
			return Promise.resolve({
				...session,
				user: { ...user },
			});
		},
	},
});
