import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/Portfolio">Abubakar Saad</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/freelanceprojects">Freelance Projects</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/contact">Contact Me</Link></NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;