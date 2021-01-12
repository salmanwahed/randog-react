import React from "react";
import { Navigation, RandomDog, DogBreeds, About } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";


import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Navigation />
        <Route path="/home" component={RandomDog}/>
        <Route path="/breeds" component={DogBreeds} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
