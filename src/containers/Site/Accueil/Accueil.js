import React from "react";
import Titre from "../../../components/UI/Titre/Titre";
import Image from 'react-bootstrap/Image';
import imgAccueil from "../../../asset/images/chateau.jpg";

const Accueil = (props) => (
    <>
        <Titre>Bienvenue sur le site de l'Ariège</Titre>
        <p>Le site vous aide à trouver les établissements publics de l'Ariège</p>
        <Image src={imgAccueil} fluid thumbnail style={{ width: "100%" }} />
    </>
);

export default Accueil;