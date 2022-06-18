import Hero from "../components/Hero/Hero.module";
import Movies from "../components/Movies/Movies.module";

function Home() {

  return(
    <div>
      <Hero />
      <Movies title="Latest Movies" />
    </div>
  );
}

export default Home;