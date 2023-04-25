import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify23.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "52f21d1ff9mshacea9e5ca4d10b2p186715jsn73b8625d33fd"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    search: builder.query({
      query: () =>
        `/search/?q=q&type=multi&offset=0&limit=10&numberOfTopResults=5`,
    }),
  }),
});

export const { useSearchQuery } = spotifyApi;
