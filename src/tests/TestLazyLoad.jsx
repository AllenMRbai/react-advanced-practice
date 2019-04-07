import React, { Component, Suspense, Fragment } from "react";
import DynamicImport, { toDynamic } from "../components/lazy/DynamicImport.jsx";

const LazyProducts = React.lazy(() => importProducts());

const DynamicProducts = toDynamic(importProducts, <Loading />);

function importProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      import("../components/lazy/Products.jsx").then(module => {
        resolve(module);
      });
    }, 2000);
  });
}

function Loading() {
  return <h2 style={{ textAlign: "center" }}>加载中...</h2>;
}

export default class TestLazyLoad extends Component {
  state = {
    component: null
  };

  componentDidMount() {
    importProducts().then(mod => {
      this.setState(() => ({
        component: mod.default
      }));
    });
  }

  render() {
    const { component: Component } = this.state;
    return (
      <Fragment>
        <p>这里展示了各种姿势实现lazy load</p>

        {Component ? (
          <Component
            name="利用state来更新异步加载的组件"
            lists={[
              "麻烦，每次都得写重复的逻辑",
              "没有缓存",
              "父组件不存在了，异步组件的promise操作不能停止"
            ]}
          />
        ) : (
          <Loading />
        )}
        <br />

        <DynamicImport load={() => importProducts()}>
          {Component => {
            return Component ? (
              <Component
                name="使用自己封装的DynamicImport组件进行异步加载"
                lists={[
                  "稍微方便一点",
                  "没有缓存",
                  "父组件不存在了，异步组件的promise操作不能停止"
                ]}
              />
            ) : (
              <Loading />
            );
          }}
        </DynamicImport>
        <br />

        <DynamicProducts
          name="封装的高阶函数toDynamic来异步加载"
          lists={[
            "比较方便",
            "可以缓存",
            "父组件不存在了，异步组件的promise操作不能停止"
          ]}
        />
        <br />

        <Suspense fallback={<Loading />}>
          <LazyProducts
            name="React.lazy配合Suspense实现code splitting"
            lists={["方便简洁，能批量，能嵌套suspense", "可以缓存"]}
          />
        </Suspense>
        <br />
      </Fragment>
    );
  }
}
