import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import CardContainer from "../components/CardContainer";
import ComboBox from "../components/ComboBox/ComboBox";
import { useEffect, useState } from "react";
import { useAnimes } from "../hooks/useAnimes";
import { genres } from "../constants/genres";
import { state } from "../constants/state";
import LoadingPage from "./LoadingPage";

function AnimesPage() {
  const { animes, getAnimes } = useAnimes();
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAnimes();
  }, [getAnimes]);

  if (!animes) {
    return <LoadingPage />;
  }
  return (
    <>
      <Navbar setQuery={setQuery}></Navbar>
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
          {animes
            .filter((anime) => anime.title.toLowerCase().includes(query))
            .map((anime, index) => (
              <CardContainer
                key={index}
                id={anime.anime_id}
                title={anime.title}
                poster_url={`/src/assets/posters/${anime.poster_url}`}
              />
            ))}
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default AnimesPage;
