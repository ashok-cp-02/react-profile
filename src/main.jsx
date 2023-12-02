// *******~ Import ~******** //
//? React

//? Assets
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//? Components
import Routing from "./router/router";
import GoTop from "./common/gototop/gototop";
import ScrollToTop from "./common/scrolltop/scrolltop";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
//? CSS

//? Images

//? JSON File

//? Icons

// *******~ Import ~******** //

const Main = () => {
  return (
    <>
      <Router basename="/react-profile">
        <GoTop />
        <ScrollToTop />
        <Header />
        <main>
          <Routing />
        </main>
        <Footer />
      </Router>
    </>
  );
};
export default Main;
