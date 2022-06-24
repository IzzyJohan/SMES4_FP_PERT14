import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero/Hero.module";
import Movies from "../components/Movies/Movies.module";
import { updateLocal } from "../features/moviesSlice";
import { useEffect } from "react";

function Home() {
  
  const local = useSelector((store) => store.movies.local);

  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { 
    getHome();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getHome() {
    dispatch(updateLocal(local))
  }


  /**
   * Note
   * Dispatch home works
   * Can't create new data after dispatch home
   * local dan API object rendered both, API object first then local
   * The form inputed new data goes to API oject, not local
   */

  return(
    <div>
      <Hero />
      <Movies title="Latest Movies" />
    </div>
  );
}

export default Home;