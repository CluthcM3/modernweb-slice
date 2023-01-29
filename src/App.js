import ContentEightth from "./components/ContentEightth";
import ContentFirst from "./components/ContentFirst";
import ContentFiveth from "./components/ContentFiveth";
import ContentFourth from "./components/ContentFourth";
import ContentSecond from "./components/ContentSecond";
import ContentSeventh from "./components/ContentSeventh";
import ContentSixth from "./components/ContentSixth";
import ContentThirtd from "./components/ContentThirtd";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-primary">
      <div className="">
        <Header />
        <ContentFirst />
        <ContentSecond />
        <ContentThirtd />
        <ContentFourth />
        <ContentFiveth />
        <ContentSixth />
        <ContentSeventh />
        <ContentEightth />
        <Footer />
      </div>
    </div>
  );
}

export default App;
