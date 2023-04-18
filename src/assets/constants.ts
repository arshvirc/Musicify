import { IconType } from "react-icons";
import { TiHome } from "react-icons/ti";
import { RiSearch2Fill } from "react-icons/ri";
import { ImLibrary } from "react-icons/im";
import { IoIosAddCircle } from "react-icons/io";

export interface NavItemDesc {
  text: string;
  link: string;
  icon: IconType;
}

export const NavBundle = {
  Home: {
    text: "Home",
    link: "#",
    icon: TiHome,
  },
  Browse: {
    text: "Explore",
    link: "#",
    icon: RiSearch2Fill, // Todo: update music icon
  },
  ForYou: {
    text: "For You",
    link: "#",
    icon: ImLibrary, //  Todo: update icon
  },
  LikedSongs: {
    text: "LikedSongs",
    link: "#",
    icon: TiHome,
  },
  Artists: {
    text: "Artists",
    link: "#",
    icon: RiSearch2Fill, // Todo: update music icon
  },
  Suggestions: {
    text: "Suggestions",
    link: "#",
    icon: ImLibrary, //  Todo: update icon
  },
  Podcasts: {
    text: "Podcasts",
    link: "#",
    icon: IoIosAddCircle,
  },
  CreatePlaylist: {
    text: "Create Playlist",
    link: "#",
    icon: IoIosAddCircle,
  },
};

export const genres = [
  { title: "Pop", value: "POP" },
  { title: "Hip-Hop", value: "HIP_HOP_RAP" },
  { title: "Dance", value: "DANCE" },
  { title: "Electronic", value: "ELECTRONIC" },
  { title: "Soul", value: "SOUL_RNB" },
  { title: "Alternative", value: "ALTERNATIVE" },
  { title: "Rock", value: "ROCK" },
  { title: "Latin", value: "LATIN" },
  { title: "Film", value: "FILM_TV" },
  { title: "Country", value: "COUNTRY" },
  { title: "Worldwide", value: "WORLDWIDE" },
  { title: "Reggae", value: "REGGAE_DANCE_HALL" },
  { title: "House", value: "HOUSE" },
  { title: "K-Pop", value: "K_POP" },
];
