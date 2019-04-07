import React, { Component, Fragment } from "react";
import PageLevelErrorBoundary from "../components/errorBoundar/PageLevelErrorBoundary.jsx";
import ComponentLevelErrorBoundary from "../components/errorBoundar/ComponentLevelErrorBoundary.jsx";
import ThrowError from "../components/errorBoundar/ThrowError.jsx";
import "../components/errorBoundar/sty.scss";

export default class TestErrorBoundary extends Component {
  render() {
    return (
      <Fragment>
        <p>这个页面测试 error boundary</p>
        <div className="page-container">
          <PageLevelErrorBoundary>
            <ThrowError />
            <div className="page-container">
              <ComponentLevelErrorBoundary>
                <ThrowError />
              </ComponentLevelErrorBoundary>
            </div>
          </PageLevelErrorBoundary>
        </div>
      </Fragment>
    );
  }
}
