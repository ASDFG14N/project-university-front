import SelectForm from "./SelectForm";
import FileInput from "./FileInput";
import TextArea from "./TextArea";
import ComboBox from "../ComboBox/ComboBox";
import SubmitButton from "../SubmitButton";
import TextInput from "../TextInput";
import { useAnimes } from "../../hooks/useAnimes";
import { genres } from "../../constants/genres";
import { optionsType } from "../../constants/types";
import { optionsStatus } from "../../constants/status";
import { optionsYear } from "../../constants/year";
function FormAnime() {
  const { createAnime } = useAnimes();

  const onSubmitAnime = async (event) => {
    event.preventDefault();
    const { name, dropzone, synopsis, type, year, status, genre } =
      event.target;
    let genres = [];
    for (var i = 0; i < genre.length; i++) {
      if (genre[i].checked) {
        genres.push(Number(genre[i].value));
      }
    }
    const jsonData = JSON.stringify({
      title: name.value,
      poster: dropzone.files[0].name.toString(),
      synopsis: synopsis.value,
      status: Number(status.value),
      year: Number(year.value),
      type: type.value,
      genres: genres,
    });
    createAnime(jsonData)
  };
  return (
    <div
      className="contForm hidden fixed top-2/4 left-2/4 z-50 
    overflow-hidden h-[90%] w-[62%] bg-[#1f284a] p-8
    -translate-x-2/4 -translate-y-2/4"
    >
      <form action="" className="w-full h-full" onSubmit={onSubmitAnime}>
        <div className="flex-col">
          {/* primera parte */}
          <div className="flex gap-5">
            {/* cuadro para subir imagenes */}
            <div>
              <FileInput name="dropzone" />
            </div>

            <div className="flex flex-col w-full">
              <div className="mb-14 h-16">
                <label className="block mb-2 text-2xl text-white">Nombre</label>
                <TextInput
                  type="text"
                  placeholder="Nombre del anime"
                  name="name"
                />
              </div>
              <div className="flex justify-between w-full">
                <SelectForm label="Tipo" name="type" options={optionsType} />
                <SelectForm
                  label="Estado"
                  name="status"
                  options={optionsStatus}
                />
                <SelectForm label="Año" name="year" options={optionsYear} />
              </div>
              <div className="mt-7">
                <ComboBox label="Géneros" items={genres} name="genre" />
              </div>
            </div>
          </div>
          {/* mensaje de descripcion */}
          <div className="mt-5">
            <label
              htmlFor="message"
              className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              Descripción
            </label>
            <TextArea id="textarea" name="synopsis" />
          </div>
          <div className="flex justify-end gap-6">
            <div className="w-48 h-16">
              <SubmitButton name="btn-update">Actualizar</SubmitButton>
            </div>
            <div className="w-40 h-16">
              <SubmitButton name="btn-save">Guardar</SubmitButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormAnime;
