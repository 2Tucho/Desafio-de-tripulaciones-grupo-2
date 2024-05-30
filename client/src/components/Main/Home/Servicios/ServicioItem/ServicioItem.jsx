import { useState, useEffect } from "react";
import axios from "axios";

const ServicioItem = ({ elem }) => {
  const [checked, setChecked] = useState(elem.interes_alumno_bool);

  const checkHandler = () => {
    setChecked(!checked);
  }

  //useffect qeu haga PUT hacia la ruta y ebnvíe
  //{"id_interes": 80, "interesado": true}
  useEffect(() => {
    async function enviarServicios () {
      try {
        await axios.put("http://localhost:5000/api/info/servicios", {
          id_interes: elem.id_interes,
          interesado: checked
      })
      } catch (err) {
        console.log(err);
      throw err;
      } 
    }
    enviarServicios()
  }, [checked])

  return <div>
    {elem.interes_alumno_bool == true ? <input type="checkbox" name={elem.interes_alumno} onChange={checkHandler} defaultChecked /> : <input type="checkbox" name={elem.interes_alumno} onChange={checkHandler}/>}
    <label htmlFor={elem.interes_alumno}>{elem.interes_alumno}</label>
  </div>;
};

export default ServicioItem;
