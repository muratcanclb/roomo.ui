import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/homePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { amber } from "@mui/material/colors";
import Button from '@mui/material/Button';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: amber[100],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
