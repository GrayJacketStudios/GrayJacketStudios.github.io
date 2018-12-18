import React, { Component } from 'react'
import Carta from "./Carta";
import '../css/List.css';


//En el main se entregara una pequeña introduccion, que hacemos y tecnologias


const Somos = () => {
    return (
        <div className="panel">
            <h1>
                Que hacemos
            </h1>
            <p>
                Nos dedicamos a entregar soluciones informaticas tales como:
                </p>
            <div style={{ alignSelf: 'center', display: 'inline-block' }} className="numberlist">
                <ol style={{ textAlign: "left" }}>
                    <li><a>Paginas web</a></li>
                    <li><a>Aplicaciones web</a></li>
                    <li><a>Aplicaciones moviles/Apps</a></li>
                    <li><a>Aplicaciones de escritorio</a></li>
                    <li><a>Incorporación de nuevas caracteristicas a aplicaciones existentes</a></li>
                    <li><a>Debugging</a></li>
                    <li><a>Solucion de errores/bugs</a></li>

                </ol>
            </div>

        </div>
    );
};



export default class Main extends Component {
    render() {
        return (
            <div>
                <Carta
                    title="Inicio">
                    <p>Gray Jacket Studios es un grupo conformado para proporcionar soluciones informaticas.</p>
                    <p>Trabajamos con diferentes tecnologias y herramientas para brindar una amplia gama de soluciones, y asi abordar la necesidad que se necesita cubrir. </p>
                </Carta>



                <Somos />

            </div >
        )
    }
}
