import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleInverted extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/productos/nuevo">
          <Menu.Item
            name="Agregar Productos"
            active={activeItem === "Agregar Productos"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/contacto">
          <Menu.Item
            name="Contacto"
            active={activeItem === "Contacto"}
            onClick={this.handleItemClick}
          />
        </Link>
      </Menu>
    );
  }
}
