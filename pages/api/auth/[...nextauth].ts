import NextAuth from "next-auth";
import IdentityServer4Provider from "next-auth/providers/identity-server4";

export default NextAuth({
	providers: [
		IdentityServer4Provider({
			id: "identity-server4",
			name: "Delta - Identity Server",
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			authorization: {
				params: {
					scope: "openid profile name email",
					
				},
			},
			issuer: "https://identita.delta-skola.cz",

		}),
	],
	jwt: {
		secret: process.env.JWT_SIGNING_PRIVATE_KEY,

	},
	// callbacks: {
	// 	jwt: async (token, user, account, profile, isNewUser) => {
	// 		if (profile) {
	// 			token.profile = profile;
	// 		}
	// 		return Promise.resolve(token);
	// 	},
	// 	session: async (session, user) => {
	// 		return Promise.resolve({
	// 			...session,
	// 			user: { ...user },
	// 		});
	// 	},
	// },
});
