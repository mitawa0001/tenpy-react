import "./App.css";
import Header from "../src/component/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Section01 from "../src/component/section01";
import Section02 from "../src/component/section02";
import Section03 from "../src/component/section03";
import Section04 from "../src/component/section04";
import Homebanner from "../src/component/homebanner";
import Footer from "../src/component/footer";



function App() {
  return (
    <>
      <Header/>
      <Homebanner />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Footer />
    </>
  );
}

export default App;
