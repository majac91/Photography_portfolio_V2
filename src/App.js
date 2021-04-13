import "./App.scss";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import StoriesPage from "./pages/StoriesPage/StoriesPage";
import StoryPage1 from "./pages/StoryPage1/Story1";
import StoryPage2 from "./pages/StoryPage2/Story2";

function App() {
  const [containerClass, setContainerClass] = useState(null);

  return (
    <div className={containerClass}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <MainPage setContainerClass={setContainerClass} />
          </Route>
          <Route exact path="/about">
            <AboutPage setContainerClass={setContainerClass} />
          </Route>
          <Route exact path="/stories">
            <StoriesPage setContainerClass={setContainerClass} />
          </Route>
          <Route exact path="/botanisk">
            <StoryPage1 setContainerClass={setContainerClass} />
          </Route>
          <Route exact path="/where-no-words-are-needed">
            <StoryPage2 setContainerClass={setContainerClass} />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
