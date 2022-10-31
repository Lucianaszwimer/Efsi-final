import React from "react";
import { Container } from "react-bootstrap";
import { PropTypes } from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default function Contacto() {
    return (
        <Container>
            <Form >
                <p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name="nombre" required />
                    </Form.Group>
                </p>
                <p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control type="text" placeholder="Apellido" name="apellido" required />
                    </Form.Group>
                </p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" class="u-full-width" required />
                </Form.Group>
                <p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Edad:</Form.Label>
                        <Form.Control type="number" name="edad" class="u-full-width" required />
                    </Form.Group>
                </p>
                <p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefono:</Form.Label>
                        <Form.Control type="number" name="edad" class="u-full-width" required />
                    </Form.Group>
                </p>
                <Button variant="primary" type="submit" >
                    Agregar contacto
                </Button>
            </Form>
        </Container>
    );
}