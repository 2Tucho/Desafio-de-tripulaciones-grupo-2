import { useState, useRef, useEffect } from "react";
import axios from "axios";

const Interacciones = ({ clienteBuscado, setClienteBuscado, DNIbuscado }) => {
  const [lanzarFetch, setLanzarFetch] = useState(0)
  let inputMotivo = useRef();
  let inputFecha = useRef();
  let inputObservaciones = useRef();
  const interacc = clienteBuscado


  useEffect(() => {
    const res = axios.get(`http://localhost:5000/api/info/interacciones?dni=${DNIbuscado}`)
    res.then(response => setClienteBuscado(prev => {
      return { ...prev, interacciones: response.data }
    }));
    inputFecha.current.value = ""
    inputMotivo.current.value = ""
    inputObservaciones.current.value = ""
  }, [lanzarFetch])


  async function crearNuevaInteraccion() {
    try {
      await axios.post("http://localhost:5000/api/info/interacciones", {
        id_factura: interacc[0].id_factura,
        fecha: inputFecha.current.value,
        motivo: inputMotivo.current.value,
        comentarios: inputObservaciones.current.value
      })
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      //Que haga un nuevo fecth para que muestre los nuevos datos 
    }
    setLanzarFetch(lanzarFetch + 1)
  };

  useEffect(() => {
    const res = axios.get(`http://localhost:5000/api/info/interacciones?dni=${DNIbuscado}`)
    //res.then(response => setClienteBuscado(prev => {return {...prev, interacciones: response.data}}));
    inputFecha.current.value = ""
    inputMotivo.current.value = ""
    inputObservaciones.current.value = ""
  }, [lanzarFetch])

  return <section className="interacciones">
    <article className="botonInteracciones">
      <button>Editar</button>
      <button>Generar PDF</button>
    </article>


    {clienteBuscado ? clienteBuscado.map((elem, i) => <article key={i} className="interaccionesCard">
      <div className="motivo_fecha">
        <label>Motivo:</label>
        <select name="" defaultValue={elem.motivo} >
          <option value="Seguimiento">Seguimiento</option>
          <option value="Ofertas">Ofertas</option>
          <option value="Incidencias">Incidencias</option>
        </select>

        <label>Fecha:</label>
        <input type="text" defaultValue={elem.fecha} />
      </div>
      <div className="observaciones">
        <label>Observaciones:</label>
        <textarea name="Observaciones" defaultValue={elem.observaciones}></textarea>
      </div>
    </article>) : <></>}


    <article className="interaccionesCard crearInteraccion">
      <h3>Nueva interacción</h3>
      <div>
        <div className="motivo_fecha">
          <label>Motivo: </label>
          <select name="" ref={inputMotivo}>
            <option value="Seguimiento">Seguimiento</option>
            <option value="Ofertas">Ofertas</option>
            <option value="Incidencias">Incidencias</option>
          </select>

          <label>Fecha: </label>
          <input type="text" ref={inputFecha} placeholder="DD-MM-AAAA" />
        </div>
      </div>
      <div className="observaciones">
        <label>Observaciones: </label>
        <textarea name="Observaciones" ref={inputObservaciones}></textarea>
      </div>
      <button onClick={() => crearNuevaInteraccion()}>Crear</button>
    </article>

  </section>;
};

export default Interacciones;
