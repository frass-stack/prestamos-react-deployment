import React, { Fragment } from 'react';

function Header({ titulo }){//estoy aplicando 'destructuring' para pasar el nombre de la 'props' directamente como parametro

    return (
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    )
}

export default Header;

/*
sfc nos arma el cuerpo de la declaration;
si no vamos a crear mas props podemos prescindir del return, mismo si solo devolvemos una prop, podemos prescindir
del fragment

const Header = ({ titulo ) => (
    <h1>{ titulo }</h1>
)
*/