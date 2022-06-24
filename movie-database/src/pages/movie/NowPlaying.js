import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies.module";
import Hero from "../../components/Hero/Hero.module";
import ENDPOINTS from "../../components/utils/constants/endpoints"; 
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function NowPlaying() {
  // Membuat dispatch
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getNowPlaying();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getNowPlaying() {
        // Fetch data dari Axios
        const response = await axios(ENDPOINTS.NOWPLAYING);

        dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing" />       
    </>
  );
}

export default NowPlaying