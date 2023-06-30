import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';
import 'bootstrap-icons/font/bootstrap-icons.css'


function Nav() {
    const { total } = useContext(Context);

    return (
        <Navbar className='navbar fixed-top bg-black '>
            <Container>
                <NavLink to='/' className='text-decoration-none'>
                    <Navbar.Brand className='fw-bold text-light'>
                        🍕¡Pizzería Mamma Mia!
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <NavLink to='/ShopCart' className='fw-bold text-light text-decoration-none'>
                            <i class="bi bi-arrow-right-square me-2"></i>
                            <i className="bi bi-cart4 me-2"></i>
                             Carro ${total}.-
                        </NavLink>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav;