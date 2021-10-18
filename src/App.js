import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import Services from "./Components/Services/Services";
import AuthProvider from "./context/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";

import SingleServiceDetail from "./Components/SingleServiceDetail/SingleServiceDetail";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* react router for single page application  */}
        <Router>
          {/* header route which contains all the pages  */}
          <Header></Header>
          {/* switches all the routes  */}
          <Switch>
            {/* default route  */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* home route  */}

            <Route exact path="/home">
              <Home></Home>
            </Route>
            {/* services route  */}
            <Route exact path="/services">
              <Services></Services>
            </Route>
            {/* ServiceDetail path  */}
            <PrivateRoute exact path="/services/:id">
              <SingleServiceDetail></SingleServiceDetail>
            </PrivateRoute>
            {/* about us route  */}
            <Route exact path="/about">
              <About></About>
            </Route>
            {/* contact us route  */}
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            {/* login route  */}
            <Route exact path="/login">
              <Login></Login>
            </Route>
            {/* register route if user new here  */}
            <Route exact path="/register">
              <Register></Register>
            </Route>

            {/* if page not found  */}
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
