import { IconType } from "react-icons";
import { TiHome } from "react-icons/ti";
import { RiSearch2Fill } from "react-icons/ri";
import { ImLibrary } from "react-icons/im";
import { IoIosAddCircle } from "react-icons/io";
import { GiAbstract116 } from "react-icons/gi";

interface NavItemDesc {
  text: string;
  link: string;
  icon: IconType;
}

// Hardcoded for now
const Home: NavItemDesc = {
  text: "Home",
  link: "#",
  icon: TiHome,
};
const Browse: NavItemDesc = {
  text: "Browse",
  link: "#",
  icon: RiSearch2Fill,
};
const YourLibrary: NavItemDesc = {
  text: "Your Library",
  link: "#",
  icon: ImLibrary,
};

const CreatePlaylist: NavItemDesc = {
  text: "Create Playlist",
  link: "#",
  icon: IoIosAddCircle,
};

// Generates a navigation item for the user to click on
function NavItem(props: NavItemDesc) {
  return (
    <li className="hover:text-primary hover:bg-gray-900 rounded-xl">
      <a href={props.link} className="flex items-center p-2 rounded-lg">
        <props.icon
          className="w-6 h-6 transition duration-75"
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

const a: NavItemDesc[] = [Home];

export function Navigation() {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-[#050505] border-r border-primary">
      <div className="h-full px-3 py-4 overflow-y-auto pl-8">
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
        <ul className="pt-4 mt-4 space-y-2 font-medium">
          <p></p>
          <NavItem {...Home} />
          <NavItem {...Browse} />
          <NavItem {...YourLibrary} />
        </ul>
        <ul className="pt-8 mt-8 space-y-2 font-medium">
          <p className="">YOUR MUSIC</p>
          <NavItem {...CreatePlaylist} />
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-black">
          {/* Make this scrollable by using css or whatever you need */}
          <p className="">YOUR PLAYLISTS</p>
        </ul>
      </div>
    </aside>
  );
}
