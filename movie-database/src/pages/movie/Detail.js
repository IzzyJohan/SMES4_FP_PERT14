import { useEffect } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import Movies from "../../components/Movies/Movies.module";
import DetailMovie from "../../components/DetailMovie";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function Detail() {
  const params = useParams();

  // Membuat state movies
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  async function getDetail() {
        // Fetch data dari Axios
        const response = await axios(ENDPOINTS.DETAIL(params.id));

        dispatch(updateMovies(response.data.results));

  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendations"/>       
    </>
  );
}

export default Detail