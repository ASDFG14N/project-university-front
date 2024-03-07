/* eslint-disable react/prop-types */
import Row from "../components/Row";
import { formVisibility } from "../components/formVisibility";
import { useAnimes } from "../hooks/useAnimes";

function RowContainer({ data }) {
  const { getAnime } = useAnimes();
  const handleEditButton = async (e) => {
    e.preventDefault();
    const anime = await getAnime(data.anime_id);
    document.getElementsByName("name")[0].value = anime.title;
    document.getElementsByName("type")[0].value = anime.type;
    document.getElementsByName("status")[0].value = anime.status;
    document.getElementsByName("year")[0].value = anime.year;
    document.getElementsByName("synopsis")[0].value = anime.synopsis;
    document.getElementsByName("genre")[0];
    
    anime.genres;
    formVisibility();
  };
  return <Row data={data} handleEditButton={handleEditButton} />;
}

export default RowContainer;
