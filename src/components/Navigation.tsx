import { GiAbstract116 } from "react-icons/gi";
import { NavBundle, NavItemDesc } from "./constants";
import { GoDiffAdded } from "react-icons/go";
import { IoIosAddCircle } from "react-icons/io";

// Generates a navigation item for the user to click on
function NavItem(props: NavItemDesc) {
  return (
    <li className="hover:text-black rounded-xl">
      <a href={props.link} className="flex items-center p-2 rounded-lg">
        <props.icon
          className="w-4 h-4 transition duration-75"
          fill="currentColor"
        />
        <span className="ml-3">{props.text}</span>
      </a>
    </li>
  );
}

// Retrieve and pass in the playlist data as NavItemDesc to generate all the playlists at once
// This function makes sense to automatically generate since it is the most dynamically changing of all options
function PlaylistBundle(props: NavItemDesc[]) {
  return (
    <div>
      {props.map((Playlist: NavItemDesc) => (
        <NavItem {...Playlist} />
      ))}
    </div>
  );
}

const a: NavItemDesc[] = [NavBundle.Home];

export function Navigation() {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-[#050505] border-r border-primary">
      <div className="h-full px-3 py-4 overflow-y-auto pl-8 bg-primary">
        {/* Web App Logo */}
        <a href="#" className="flex items-center pl-2 pt-4 mb-5">
          <GiAbstract116
            className="w-10 h-10 transition duration-75"
            fill="currentColor"
          />
          <span className="ml-3 self-center text-xl font-semibold whitespace-nowrap">
            Musicify
          </span>
        </a>
        <ul className="pt-4 mt-4 space-y-2 text-md">
          <p></p>
          <NavItem {...NavBundle.Home} />
          <NavItem {...NavBundle.Browse} />
          <NavItem {...NavBundle.ForYou} />
        </ul>
        <ul className="pt-4 mt-4 space-y-2 text-md">
          <p className="pl-2 text-sm">YOUR MUSIC</p>
          <NavItem {...NavBundle.LikedSongs} />
          <NavItem {...NavBundle.Artists} />
          <NavItem {...NavBundle.Suggestions} />
          <NavItem {...NavBundle.Podcasts} />
        </ul>
        <ul className="pt-8 mt-8 space-y-2 text-md border-t border-primary">
          <p className="pl-2 text-sm">YOUR PLAYLISTS</p>
        </ul>
        <ul className="">
          <NavItem {...NavBundle.CreatePlaylist} />
        </ul>
      </div>
    </aside>
  );
}
