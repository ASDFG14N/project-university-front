import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import img1 from "../assets/posters/img1.jpg";
import img2 from "../assets/posters/img2.jpg";
import img3 from "../assets/posters/img3.jpg";
import img4 from "../assets/posters/img4.jpg";
import img5 from "../assets/posters/img5.jpg";
import img6 from "../assets/posters/img6.jpg";
import video from "../assets/video/Classroom of the Elite Season 3  OFFICIAL TRAILER.mp4";
import CardSlide from "../components/CardSlide";
import Slider from "../components/Slider";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { useAnimes } from "../hooks/useAnimes";
import { useEffect } from "react";
function HomePage() {
  const { movies, getMovies } = useAnimes();

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <Navbar></Navbar>
      <div className="relative1 bg-black mb-20 h-[100vh]">
        <video autoPlay muted className="w-full h-full object-cover">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 text-white font-bold overlay-text z-10 flex items-center h-full px-12">
          <div className="">
            <h1 className="text-8xl w-2/4">Classroom of the Elite</h1>
            <h4>
              <span>2024</span> <span>Tercera Temp</span>
              <span>Romance</span> <span>Drama</span> <span>Fantasia</span>
            </h4>
            <p className="text-lg max-w-[50rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              voluptatibus soluta autem asperiores adipisci eum aut. Blanditiis
              minima, sint distinctio, labore neque ipsum mollitia autem iste
              itaque nobis, dolore ipsam?
            </p>
            <div className="mt-8">
              <Link className="bg-[#DA0040] rounded-md mr-8 px-5 py-2 text-3xl">
                <i className="fa-solid fa-play mr-3"></i> Ver
              </Link>
              <Link className="bg-[#DA0040] rounded-md px-5 py-2 text-3xl">
                <i className="fa-solid fa-bookmark mr-3"></i>
                Mi Lista
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Container>
        <h3 className="ml-[4rem] text-4xl mb-3">Top del día</h3>
        <Slider id={1}>
          <CardSlide img={img1} />
          <CardSlide img={img2} />
          <CardSlide img={img3} />
          <CardSlide img={img4} />
          <CardSlide img={img4} />
          <CardSlide img={img4} />
          <CardSlide img={img4} />
          <CardSlide img={img4} />
          <CardSlide img={img5} />
          <CardSlide img={img6} />
        </Slider>
        <h3 className="ml-[4rem] text-4xl mt-10 mb-3">
          Recientemente añadidos
        </h3>
        <Slider id={2}>
          <CardSlide img={img1} />
          <CardSlide img={img2} />
          <CardSlide img={img3} />
          <CardSlide img={img4} />
          <CardSlide img={img4} />
          <CardSlide img={img4} />
          <CardSlide img={img4} />
          <CardSlide img={img4} />
          <CardSlide img={img5} />
          <CardSlide img={img6} />
        </Slider>
        <h3 className="ml-[4rem] text-4xl mt-10 mb-3">Películas mas vistas</h3>
        <Slider id={3}>
          {movies.map((anime, index) => (
            <CardSlide
              key={index}
              img={`/src/assets/posters/${anime.poster_url}`}
            />
          ))}
          <CardSlide img={img1} />
          <CardSlide img={img2} />
          <CardSlide img={img3} />
        </Slider>
      </Container>
      <div className="my-[4rem]"></div>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
