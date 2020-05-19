import React from "react";
import estilos from "./Filtro.module.css";

const Filtro = (props) => {
    return (
        <div className={estilos.Filtro}>
            <div id="estado">
                <label htmlFor="noResuelta">No Resuelta</label>
                <input type="checkbox" id="noResuelta" value="No Resuelta" />
                <label htmlFor="aceptada">Aceptada</label>
                <input type="checkbox" id="aceptada" value="Aceptada" />
                <label htmlFor="rechazada">Rechazada</label>
                <input type="checkbox" id="rechazada" value="Rechazada" />
            </div>
            <div id="fecha">
                <span>Desde</span><input type="date" />
                <span>Hasta</span><input type="date" />
            </div>
            <span>DNI</span><input type="number" />
        </div>
    );
}

export default Filtro;