import { IconType } from "react-icons";
import { GoSettings } from "react-icons/go";
import { BsCollectionPlay } from "react-icons/bs";
import { HiOutlineHome, HiMusicNote } from "react-icons/hi";

import { FaUserFriends } from "react-icons/fa";

export interface NavItemDesc {
  text: string;
  link: string;
  icon: IconType;
}

export const links = [
  { name: "Home", to: "/", icon: HiOutlineHome },
  { name: "Browse", to: "/browse", icon: HiMusicNote },
  { name: "Friends", to: "/friends", icon: FaUserFriends },
  { name: "My Playlists", to: "/my-playlists", icon: BsCollectionPlay },
  { name: "Settings", to: "/settings", icon: GoSettings },
];

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
