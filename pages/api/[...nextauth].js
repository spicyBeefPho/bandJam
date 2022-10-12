import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions = {
  // Configure one or more auth providers
  providers: [
    SpotifyProvider({
      clientID: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ..add more providers here
    //  ie songkick, apple music, etc
  ],
};

export default NextAuth(authOptions);
