import GlobalStyle from "./Assets/Globalstyles";
import Navbar from "./Layout/NavBar/Navbar";
import Footer from "./Layout/Footer/Footer";
import Routing from "./Routing/Routing";


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App