import { useEffect  } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies.module";
import Hero from "../../components/Hero/Hero.module"; 
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { updateMovies } from "../../features/moviesSlice";
import { useDispatch } from "react-redux";
 
function TopRated() {
  // Membuat dispatch
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getTopRated();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getTopRated() {
        // Fetch data dari Axios
        const response = await axios(ENDPOINTS.TOPRATED);

        dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Top Rated" />       
    </>
  )
}

export default TopRated