import React, { useEffect, useState } from 'react';

const Avisos = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const obtenerAlumnos = async () => {
      try {
        const respuesta = await fetch('http://localhost:5000/api/info/avisos');
        if (!respuesta.ok) {
          throw new Error(`Error en la respuesta: ${respuesta.statusText}`);
        }
        const datos = await respuesta.json();
        setAlumnos(datos);
      } catch (error) {
        console.error('Error obteniendo datos:', error);
      }
    };

    obtenerAlumnos();
  }, []);

  const obtenerDiasHastaProximoCumpleaños = (fechaNacimiento) => {
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const proximoCumpleaños = new Date(fechaNacimiento);
    proximoCumpleaños.setFullYear(añoActual);

    // Si el cumpleaños ya pasó este año, ajusta al próximo año
    if (proximoCumpleaños < fechaActual) {
      proximoCumpleaños.setFullYear(añoActual + 1);
    }

    const diferenciaTiempo = proximoCumpleaños - fechaActual;
    const diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
    return diferenciaDias;
  };

  const obtenerAviso = (diasHastaCumpleaños) => {
    if (diasHastaCumpleaños === 30) {
      return "1 mes para cumplir 18 ofrecer orientación vocacional";
    } else if (diasHastaCumpleaños === 7) {
      return "1 semana para el cumpleaños fidelización cliente";
    } else if (diasHastaCumpleaños === 1) {
      return "1 día para el cumpleaños fidelización cliente";
    }
    return null;
  };

  return (
    <section className='avisosCont'>
      <h3 className='h3Avisos'>Avisos Importantes</h3>
      <ul className='avisosUl'>
        {alumnos.map((alumno, index) => {
          const diasHastaCumpleaños = obtenerDiasHastaProximoCumpleaños(alumno.fecha_nacimiento);
          const aviso = obtenerAviso(diasHastaCumpleaños);

          // Solo renderiza los alumnos que tienen avisos
          if (aviso) {
            return (
                <li key={index} className='avisosLi'>
                  {alumno.nombre_alumno} <br /> {aviso} 
                </li>
            );
          }
          return null;
        })}
      </ul>
    </section>
  );
};

export default Avisos;
