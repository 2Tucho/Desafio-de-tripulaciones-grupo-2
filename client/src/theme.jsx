import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  
  components: {
    MuiTabs: {
      styleOverrides: {
        
        root: {
          width:'100%', // Ajusta el ancho del contenedor de tabs
          justifyContent:'flex-end', // Centra las tabs horizontalmente
          alignContent:'flex-end'
        },
        indicator: {
          backgroundColor: '#002766', // Color de la línea del scroller
          justifyContent:'right',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor:'',
          color: '#002766', // Color del texto del tab
          '&.Mui-selected': {
            backgroundColor:'',
            color: '#002766', // Color del texto del tab seleccionado
          },
        },
      },
    },
  },

 


});

export default theme;