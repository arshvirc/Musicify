import { SongCard } from "../components";
import { genres } from "../assets/constants";
import { useSearchQuery } from "../redux/services/spotify";
import { exploreResults } from "../redux/services/testResults";

const Explore = () => {
  const genreTitle = "Pop";
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Explore</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-highlight p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {exploreResults.albums.items.map((song) => (
          <div>
            <p>{song.data.name} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
