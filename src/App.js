import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";

import { GlobalStyles } from "./global.styles";

const HomePage = lazy(() =>
  import("./components/pages/homepage/homepage.component")
);
const ShopPage = lazy(() => import("./components/pages/shop/shop.component"));
const Checkout = lazy(() =>
  import("./components/pages/checkout/checkout.component")
);
const SignUpAndSignIn = lazy(() =>
  import("./components/pages/sign-up-and-sign-in/sign-up-and-sign-in.component")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  render() {
    return (
      <div>
        <Suspense fallback={<Spinner />}>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/sign-in"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignUpAndSignIn />
                )
              }
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
