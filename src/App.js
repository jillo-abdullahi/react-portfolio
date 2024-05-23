import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";
import theme from "./theme";
class App extends Component {
  render() {
    return (
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </ChakraProvider>
    );
  }
}

export default App;
