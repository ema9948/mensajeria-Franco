import { useState } from "react";
import Modal from "./components/Modal";
import bg from "./img/bg2.png";
import icon from "./icons/icon.svg";
import whatsappIco from "./icons/whatsapp.svg";
import whatsappIco2 from "./icons/whatsapp2.svg";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" h-screen w-full grid grid-rows-6 grid-cols-1 gap-5 relative bg-black">
        {open && <Modal close={setOpen} />}
        {/* header  */}
        <div className="row-span-1 col-span-1   flex">
          <nav className="text-white w-full h-20 shadow-lg shadow-gray-800 bg-gray-900  flex justify-around items-center">
            <img src={icon} alt="icon" className="w-10 md:w-12" />
            <h1 className="text-lg md:text-4xl font-sans  font-extrabold text-yellow-300 text-center ">
              Mensajeria Franco°
            </h1>
            <div className="hidden md:flex items-center gap-5">
              <img src={whatsappIco} alt="" className="w-10" />
              <h2 className="font-sans font-extrabold text-2xl">
                2255-5422780
              </h2>
            </div>
          </nav>
        </div>
        <div className="row-span-4 col-span-1 w-full h-full flex ">
          <div className="flex-1 text-white flex  flex-col justify-around items-center ">
            <h2 className="text-yellow-300  md:text-4xl font-extrabold text-center">
              ¿POR QUÉ ELEGIR NUESTOS SERVICIOS?
            </h2>
            <div className="text-center md:text-2xl font-extrabold w-5/6">
              <p className="">
                En Tiempo y Forma Sabemos lo importante que es para vos que tus
                paquetes lleguen sanos y a tiempo. Por eso estarás informado en
                todo momento, inclusive te compartimos nuestra geolocalización
                para que el motomandado sea exitoso.
              </p>
              <p>Nos Encontramos en Villa Gesell</p>
              <p className="md:text-4xl py-2">🌟🌟🌟🌟🌟</p>
            </div>
            <div className="text-black w-full flex justify-center ">
              <button
                className="bg-white p-1 md:text-2xl font-extrabold flex gap-5 justify-center  items-center md:w-96 rounded-md"
                onClick={() => setOpen(true)}
              >
                <img src={whatsappIco2} alt="ico2" className="w-10" />
                Solicitar servicio!
              </button>
            </div>
          </div>
          <div className="hidden  md:flex flex-1 text-white  flex-col justify-center items-center ">
            <img src={bg} alt="bg" className="" />
          </div>
        </div>
        <div className="row-span-1 col-span-1 flex justify-center items-end text-white ">
          <footer className="w-full h-12  bg-gray-900 flex gap-5 items-center justify-center text-xs md:text-sm text-yellow-300">
            <h2>
              Copyrights © {new Date().getFullYear()} Todos lo derechos
              reservados
            </h2>
            <p>Villa gesell.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
