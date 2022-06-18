import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies.module";
import Hero from "../../components/Hero/Hero.module"; 
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";
 
function PopularMovie() {
  // Membuat dispatch
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPopularMovies() {
        // Fetch data dari Axios
        const response = await axios(ENDPOINTS.POPULAR);

        dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Popular" />       
    </>
  );
}

export default PopularMovie