import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { getWidth, debounce } from "../lib/util";

const links = [
  { to: "/codeSplitting", name: "code splitting" },
  { to: "/errorBoundary", name: "error boundary" },
  { to: "/context", name: "context" },
  { to: "/forwardRef", name: "forward ref" },
  { to: "/HOC", name: "HOC" },
  { to: "/portals", name: "portals" },
  { to: "/hooks", name: "hooks" },
  { to: "/cache", name: "cache component" }
];

export default class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewWidth: getWidth()
    };
    this.onResize = debounce(this.onResize);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  isPhone = () => {
    const { viewWidth } = this.state;
    return viewWidth <= 400;
  };

  onResize = () => {
    this.setState(() => ({
      viewWidth: getWidth()
    }));
  };

  render() {
    const { showNav, onToggle } = this.props;
    const { viewWidth } = this.state;
    const shouldShowMenu = showNav || !this.isPhone();

    return (
      <div className="nav-bar">
        <button type="button" onClick={onToggle} className="nav-menu-btn">
          菜单
        </button>
        <div
          onClick={onToggle}
          className="nav-menu"
          style={{ display: shouldShowMenu ? "block" : "none" }}
        >
          {links.map(link => {
            return (
              <NavLink className="nav-item" to={link.to} key={link.to}>
                {link.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}
