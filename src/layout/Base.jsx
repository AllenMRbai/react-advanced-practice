import React, { Fragment, Suspense, PureComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./NavBar.jsx";

const TestLazyLoad = React.lazy(
  slowNet(() => import("../tests/TestLazyLoad.jsx"))
);
const TestForwardRef = React.lazy(
  slowNet(() => import("../tests/TestForwardRef.jsx"))
);
const TestContext = React.lazy(
  slowNet(() => import("../tests/TestContext.jsx"))
);
const TestErrorBoundary = React.lazy(
  slowNet(() => import("../tests/TestErrorBoundary.jsx"))
);
const TestHOC = React.lazy(slowNet(() => import("../tests/TestHOC.jsx")));
const TestHooks = React.lazy(slowNet(() => import("../tests/TestHooks.jsx")));
const TestCache = React.lazy(slowNet(() => import("../tests/TestCache.jsx")));

// 页面加载中提示文字
function PageLoading() {
  return (
    <h1 style={{ textAlign: "center", lineHeight: "300px" }}>page loading</h1>
  );
}

// 故意延迟页面加载，方便查看lazy load的效果
function slowNet(compFn) {
  return () => {
    return new Promise(resolve => {
      setTimeout(() => {
        compFn().then(mod => resolve(mod));
      }, 100);
    });
  };
}

const routes = [
  {
    path: "/codeSplitting",
    component: TestLazyLoad
  },
  {
    path: "/errorBoundary",
    component: TestErrorBoundary
  },
  {
    path: "/context",
    component: TestContext
  },
  {
    path: "/forwardRef",
    component: TestForwardRef
  },
  {
    path: "/HOC",
    component: TestHOC
  },
  {
    path: "/hooks",
    component: TestHooks
  },
  {
    path: "/cache",
    component: TestCache
  }
];

export default class Base extends PureComponent {
  state = {
    showNav: false
  };

  toggleNavMenu = () => {
    this.setState(preState => ({
      showNav: !preState.showNav
    }));
  };

  render() {
    const { showNav } = this.state;
    return (
      <Fragment>
        <NavBar onToggle={this.toggleNavMenu} showNav={showNav} />
        <Suspense fallback={<PageLoading />}>
          <Switch>
            {routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  render={props => {
                    return <route.component {...props} />;
                  }}
                />
              );
            })}
            <Redirect from="/" to="/codeSplitting" />
          </Switch>
        </Suspense>
      </Fragment>
    );
  }
}
