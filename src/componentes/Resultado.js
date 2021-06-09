import React, { Fragment } from 'react';

const Resultado = (props) => {

    const {total, plazo, cantidad} = props;

    return ( 
        <Fragment>
            <div className="u-full-width resultado">
                <h2>Resumen</h2>
                <p>La cantidad solicitada es: $ {cantidad}</p>
                <p>El plazo seleccionado para el pago es: {plazo} Meses</p>
                <p>La cantidad mensual a pagar es: $ {(total / plazo).toFixed(2)}</p>
                <p>El total a pagar es: $ {(total).toFixed(2)}</p>
            </div>
        </Fragment>
     );
}
 
export default Resultado;