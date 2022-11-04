import React from "react";
import './intro.css';
import icon from './icon.png';

const Intro = ({titulo}) => {
return(
    <div className="contenedorImagen">
        <img src={icon} className= "icon" alt= "foto perfil"></img>
        <h1>{titulo}</h1>
    </div>
)
}
export default Intro;