import "./App.css";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

//pages

function App() {
  const user = true;
  return (
    <Router>
      {/*  A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {/* exact makes sure that this page will be rendered only when the url matches exactly. If the url contains some other text including "/" then that component will be rendered */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <AllProducts />
        </Route>
        <Route path="/products/:category">
          <AllProducts />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <SignUp />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
