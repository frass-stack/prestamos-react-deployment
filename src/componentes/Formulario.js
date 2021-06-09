import React, { Fragment, useState } from 'react';
import { calcularTotal } from '../helpers';

const Formulario = (props) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;

    //Defino un State local
    const [error, guardarError] = useState(false)

    //calcular prestamo
    const calcularPrestamo = e => {
        e.preventDefault();
        //validar
        if(cantidad === 0 || plazo === ''){
            guardarError(true)
            return;
        }

        //elimina el error
        guardarError(false)

        //habilitar Spinner
        guardarCargando(true)

        setTimeout( () => {
            //realizar cotizacion
            const total = calcularTotal(cantidad, plazo);
    
            //Una vez calculado, guardarTotal
            guardarTotal(total)
        
            //Deshabilitar Spinner
            guardarCargando(false)
        }, 3000 )
    }

    return ( 
        <Fragment>
            <form onSubmit={ calcularPrestamo }>
                <div className="row">
                    <div>
                            <label>Cantidad Prestamo</label>
                            <input 
                                className="u-full-width" 
                                type="number" 
                                placeholder="Ejemplo: 3000" 
                                onChange={ e => guardarCantidad(parseInt(e.target.value))}//un arrow function que lee y guarda la cantidad
                            />
                        </div>
                    <div>
                            <label>Plazo para Pagar</label>
                            <select 
                                className="u-full-width"
                                onChange={ e => guardarPlazo(parseInt(e.target.value))}//toma el valor del select
                            >
                                <option value="">Seleccionar</option>
                                <option value="3">3 meses</option>
                                <option value="6">6 meses</option>
                                <option value="12">12 meses</option>
                                <option value="24">24 meses</option>
                            </select>
                        </div>
                    <div>
                            <input 
                                type="submit" 
                                value="Calcular" 
                                className="button-primary u-full-width" 
                            />
                        </div>
                </div>
            </form>
            {(error) ? <p className="error">Todos los Campos son Obligatorios</p> : null }
        </Fragment>
    );
}
 
export default Formulario;

//{(error) ? <p className="error">Todos los Campos son Obligatorios</p> : null } si error esta ejecutado como true, lanza el error, sino, no hace nada.