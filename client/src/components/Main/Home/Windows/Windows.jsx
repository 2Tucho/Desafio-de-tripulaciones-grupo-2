import React from "react";
import axios from "axios";
import { ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import theme from '../../../../theme';

const Windows = ({ setWindowsEnUso, DNIbuscado, setClienteBuscado }) => {
  const [value, setValue] = useState('Datos personales');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function clickWindows(windows) {
    setWindowsEnUso(windows);
    setClienteBuscado({
      datosPersonales: "",
      servicios: "",
      interacciones: "",
      contratos: "",
    })
    const url = `http://localhost:5000/api/info/${windows}?dni=${DNIbuscado}`
    try {
      let res = ""
      if (windows == "calendario") {
        res = ""
      } else { res = axios.get(url) }

      if (windows == "datosPersonales") {
        res.then(response => setClienteBuscado(prev => {
          return { ...prev, datosPersonales: response.data }
        }));
      } else if (windows == "servicios") {
        res.then(response => setClienteBuscado(prev => {
          return { ...prev, servicios: response.data }
        }));
      } else if (windows == "interacciones") {
        res.then(response => setClienteBuscado(prev => {
          return { ...prev, interacciones: response.data }
        }));
      } else if (windows == "contratos") {
        res.then(response => setClienteBuscado(prev => {
          return { ...prev, contratos: response.data }
        }));
      } else null

    } catch {
      console.log("ERROR: NOT FOUND");
    }
  };

  return <>
    <section className="cabecera_estudiante">
      <ThemeProvider theme={theme}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='secondary'
          indicatorColor='secondary'
          aria-label="secondary tabs example"
        >
          <Tab
            value="Datos personales"
            label="Datos personales"
            wrapped
            onClick={() => clickWindows("datosPersonales")}
          />

          <Tab
            value="Servicios preferentes"
            label="Servicios preferentes"
            wrapped
            onClick={() => clickWindows("servicios")}
          />

          <Tab
            value="Interacciones"
            label="Interacciones"
            wrapped
            onClick={() => clickWindows("interacciones")}
          />
          <Tab
            value="Contratos"
            label="Contratos"
            wrapped
            onClick={() => clickWindows("contratos")}
          />
          <Tab
            value="Calendario"
            label="Calendario"
            wrapped
            onClick={() => clickWindows("calendario")}
          />
        </Tabs>

      </ThemeProvider>
    </section>

  </>
};

export default Windows;