
import React from 'react'
import { Nav, Button } from 'react-bootstrap'

export const Navigation = () => {
    return (
        <div>
            <section id='NavigationPage'>
                <Nav className="justify-content-center bg-white" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className='text-dark'>
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-dark'>
                            Login
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-dark' active='true'>
                            Register here
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </section>
        </div >
    )
}
