import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import CardContainer from "../components/CardContainer";
import ComboBox from "../components/ComboBox/ComboBox";
import { useEffect } from "react";
import { useAnimes } from "../hooks/useAnimes";
import { genres } from "../constants/genres";
import { state } from "../constants/state";

function AnimesPage() {
  const { animes, getAnimes } = useAnimes();
  useEffect(() => {
    getAnimes();
  }, [getAnimes]);
  return (
    <>
      <Navbar></Navbar>
      <Container margin={true}>
        <div className="flex gap-5 mb-12">
          <ComboBox label="Género" items={genres} />
          <ComboBox label="Estado" items={state} />
        </div>
        <div
          className="grid-container w-full grid gap-[1rem] mb-12"
          style={{
            minHeight: "100vh",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(21rem, 100%), 1fr))",
          }}
        >
          {animes.map((anime, index) => (
            <CardContainer
              key={index}
              title={anime.title}
              poster_url={`/src/assets/posters/${anime.poster_url}`}
            />
          ))}
          <CardContainer
            title={"xdd"}
            poster_url={`/src/assets/posters/${"img6.jpg"}`}
          />
          <CardContainer
            title={"xdd"}
            poster_url={`/src/assets/posters/${"img6.jpg"}`}
          />
          <CardContainer
            title={"xdd"}
            poster_url={`/src/assets/posters/${"img6.jpg"}`}
          />
          <CardContainer
            title={"xdd"}
            poster_url={`/src/assets/posters/${"img6.jpg"}`}
          />
          <CardContainer
            title={"xdd"}
            poster_url={`/src/assets/posters/${"img6.jpg"}`}
          />
          <CardContainer
            title={"xdd"}
            poster_url={`/src/assets/posters/${"img6.jpg"}`}
          />
          <CardContainer
            title={"xdd"}
            poster_url={`/src/assets/posters/${"img6.jpg"}`}
          />
          <CardContainer
            title={"xdd"}
            poster_url={`/src/assets/posters/${"img6.jpg"}`}
          />
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default AnimesPage;
