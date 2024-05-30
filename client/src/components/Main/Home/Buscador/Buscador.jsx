import { useRef } from "react";

const Buscador = ({ setDNIbuscado }) => {
  const inputRef = useRef();

  function buscarDNI() {
    setDNIbuscado(inputRef.current.value);
  };

  return <section className="buscador" id="buscador">
      <input type="search" id="buscadoralumno" name="buscadoralumno" placeholder="Búsqueda de alumno por DNI" ref={inputRef} />
      <button onClick={() => buscarDNI()}>Buscar</button>
    </section>
};

export default Buscador;