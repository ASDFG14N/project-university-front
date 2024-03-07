import "./Footer.css";
function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="w-[95%]">
        <div className="flex justify-between">
          <div>
            <h3 className="my-12 mx-0">Sitio</h3>
            <ul className="list">
              <li className="pb-3">
                <a className="text-2xl" href="#">
                  Preguntas fecuentes
                </a>
              </li>
              <li className="pb-3">
                <a className="text-2xl" href="#">
                  Normas de la comunidad
                </a>
              </li>
              <li className="pb-3">
                <a className="text-2xl" href="#">
                  Terminos de uso
                </a>
              </li>
              <li className="pb-3">
                <a className="text-2xl" href="#">
                  Politica de Privacidad
                </a>
              </li>
              <li className="pb-3">
                <a className="text-2xl" href="#">
                  Cookies
                </a>
              </li>
              <li className="pb-3">
                <a className="text-2xl" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="box2">
            <h3 className="my-12 mx-0">Explorar</h3>
          </div>

          <div className="box3">
            <div>
              <h3 className="my-12 mx-0">Contenidos</h3>
              <p className="text-2xl">
                Descripcion Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Iure, dicta suscipit. Tempore rem praesentium debitis
                fuga, alias totam nesciunt atque voluptatibus non error earum
                suscipit voluptates eius repellendus cupiditate corporis!
              </p>
            </div>
            <div>
              <h3 className="mt-12 mx-0">Redes Sociales</h3>
              <div className="mb-8">
                <ul className="flex">
                  <li className="inline">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f hover:bg-[#247ae4]"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ASDFG14N">
                      <i className="fa-brands fa-github hover:bg-[#5a32a3]"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
