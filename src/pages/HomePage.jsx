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
function HomePage() {
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
              <Link className="bg-[#DA0040] rounded-md mr-8 px-5 py-2 text-3xl">Ver</Link>
              <Link className="bg-[#DA0040] rounded-md px-5 py-2 text-3xl">Mi Lista</Link>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      <Container>
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
      </Container>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
