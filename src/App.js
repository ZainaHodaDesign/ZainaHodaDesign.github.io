import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import customhistory from "./customhistory";
import AboutPage from "./pages/aboutPage";
import IndividualPage from "./pages/individualPage";
import StudentAToZPage from "./pages/studentAToZPage";
import loadingGif from "./assets/splashscreen.gif";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const [loading, setLoading] = React.useState(true);

  const location = useLocation();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5350);
  });

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          unmountOnExit={true}
          key={loading}
          classNames={{
            enter: "fade-enter",
            enterActive: "fade-enter-active",
            exit: "fade-exit",
            exitActive: "fade-exit-active",
          }}
          timeout={1000}
        >
          {loading ? (
            <div className="loadingGif h-screen">
              <img src={loadingGif}></img>
            </div>
          ) : (
            <div>
              <NavBar></NavBar>
              <div className="px-12 md:px-32">
                <Routes history={customhistory}>
                  <Route path="/" element={<AboutPage />} />
                  <Route path="studentA-Z" element={<StudentAToZPage />} />
                  <Route path="studentA-Z/:name" element={<IndividualPage />} />
                </Routes>
              </div>
            </div>
          )}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
