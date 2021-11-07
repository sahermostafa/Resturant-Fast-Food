import "./App.css";
import{Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menus from "./pages/Menus";

function App() {
  return (
    
      <Container fluid>
      
          <Navbars />
          
            <Home />
            <Menu />
            <About />
            <Menus />
          
          <Footer />
      </Container>
    
  );
}
export default App;
