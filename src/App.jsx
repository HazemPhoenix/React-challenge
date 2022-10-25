import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Home from "./pages/Home";
import "./global.css";
import InfoPage from "./pages/InfoPage";

/**
 * The starting page for your App
 */

class App extends Component {
  state = { term: "", shows: [] };

  changeHandler = (e) => {
    this.setState({ term: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${this.state.term}`
      );
      this.setState({ shows: res.data });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <main>
            <section>
              <Routes>
                <Route
                  index
                  element={
                    <Home
                      onSubmit={this.submitHandler}
                      onChange={this.changeHandler}
                      value={this.state.term}
                      shows={this.state.shows}
                    />
                  }
                />
                <Route path="info" element={<InfoPage test="test" />} />
              </Routes>
            </section>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
