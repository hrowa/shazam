import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts, Rock, Alternative } from './pages';
 
const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/shazam" element={<Discover />} />
              <Route path="/shazam/rock" element={<Rock />} />
              <Route path="/shazam/alternative" element={<Alternative />} />
              <Route path="/shazam/top-artists" element={<TopArtists />} />
              <Route path="/shazam/top-charts" element={<TopCharts />} />
              <Route path="/shazam/around-you" element={<AroundYou />} />
              <Route path="/shazam/artists/:id" element={<ArtistDetails />} />
              <Route path="/shazam/songs/:songid" element={<SongDetails />} />
              <Route path="/shazam/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
