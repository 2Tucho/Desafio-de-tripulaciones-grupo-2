import React from "react";
import ServicioItem from "./ServicioItem";

const Servicios = ({ clienteBuscado }) => {
  return <section className="servicios">
    <h1>Servicios</h1>
    <article>
    {clienteBuscado? clienteBuscado.map((elem, i) =><ServicioItem key={i} elem={elem}/> ) : <></>}
    </article>
  </section>;
};

export default Servicios;
