import React, { Component } from "react";
import Titre from "../../../components/UI/Titre/Titre";
import { Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";
import ContactForm from "./ContactForm/ContactForm";

class Contact extends Component {
    render() {
        return (
            <>
                <Titre>Contactez-nous</Titre>
                <div>
                    <h2>Adresse</h2>
                    <p>25 Avenue de l'Eglise</p>
                    <h2>Téléphone</h2>
                    <p>09 85 62 34 71</p>
                </div>
                <h2>Vous préférez nous écrire ?</h2>
                <LinkContainer to={this.props.match.path + "/form"}>
                    <Button variant="primary">Formulaire de contact</Button>
                </LinkContainer>
                <Route path={this.props.match.path + "/form"} render={(props) => <ContactForm />} />
            </>
        );
    }
}

export default Contact;