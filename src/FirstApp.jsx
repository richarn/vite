import PropTypes  from 'prop-types';

export const FirstApp = ( { title, nmro, name   } ) => {
    
    // console.log(props);

    return (
        <>
            <h1>{ title }</h1>
            <h2>{ nmro }</h2>
            <h2>{ name }</h2>
            {/* <h1>{ JSON.stringify(msj)}</h1> */}
        </>    
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    nmro: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Richar',
    title: 'No existe titulo',
    nmro: 'No existe numero'
}