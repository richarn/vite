const Ejemplo = () => {
    return(
        <p>Hola</p>
        )
}

export const FirstApp = ( { title, nmro } ) => {
    
    // console.log(props);

    return (
        <>
            <h1>{ title }</h1>
            <h2>{ nmro }</h2>
            {Ejemplo()}
            {/* <h1>{ JSON.stringify(msj)}</h1> */}
            <p>xs</p>
        </>    
    );
}