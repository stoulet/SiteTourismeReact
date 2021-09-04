import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

class ContactForm extends Component {
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="nom">
                    <Form.Label>Nom :<Badge bg="warning">(Minimum 5 caractères)</Badge></Form.Label>
                    <Form.Control type="text" placeholder="Votre nom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mail">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="email" placeholder="Votre email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Votre message :</Form.Label><Badge variant="warning">(Entre 100 et 200 caractères)</Badge>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Valider
                </Button>
            </Form>
        );
    }
}

export default ContactForm;