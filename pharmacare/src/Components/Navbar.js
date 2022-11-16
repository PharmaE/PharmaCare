import { NavbarData } from "./NavbarData";
import "./Navbarstyles.css";
import { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };
  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 class="logo">
          PharmaCare<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icons" onClick={this.handleClicked}>
          <i
            className={this.state.clicked ? "fas fa-items " : "fas fa-bars"}
          ></i>
        </div>
        <ul className="nav-menu">
          {NavbarData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
