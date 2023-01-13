import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { StoreProvider } from "./utils/GlobalState";

import Home from "./pages/Home";
// import Menu from './pages/Menu';
// import MyOrder from './pages/MyOrder';
// import History from './pages/History';
import SignupForm from "./pages/SignUp";
import LoginForm from "./pages/Login";
// import NoMatch from "./pages/NoMatch";
// import Success from "./pages/Success";

// import FooterStrap from './components/Footer'
import NavBar from "./components/Nav";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "http://localhost:3001/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route exact path="/menu" component={<Menu/>}></Route> */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
          {/*<FooterStrap />*/}
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
