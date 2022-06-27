import Layouts from './components/layouts/Layouts';
import { createTheme,ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light:"#FAFAFA",
      dark:"#18191A",
      main: "#FAFAFA",
    },
    secondary: {
      light:"#FFB400",
      main: "#FFB400",
      dark:"#FFB400",
    },
    info:{
      main: "#2B2B2B"
    }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layouts/>
      </ThemeProvider>
    </div>
  );
}

export default App;
