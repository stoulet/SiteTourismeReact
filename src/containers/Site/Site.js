import React, { Component } from "react";
import Accueil from "./Accueil/Accueil";
import Contact from "./Contact/Contact";
import Localisation from "./Localisation/Localisation";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../components/UI/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import Route404 from "../../components/Route404/Route404";
import Footer from "../../components/Footer/Footer";

class Site extends Component {
    render() {
        return (
            <>
                <div className="site">
                    <NavBar />
                    <Container>
                        <Switch>
                            <Route path="/" exact render={() => <Accueil />} />
                            <Route path="/localisation" component={() => <Localisation />} />
                            <Route path="/contact" render={(props) => <Contact {...props} />} />
                            <Route render={() => <Route404 />} />
                        </Switch>
                    </Container>
                    <div className="minSite"></div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Site;