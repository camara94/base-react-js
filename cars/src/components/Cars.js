const Cars = (props) => {
    console.log(props);
    return (
        <div style={{backgroundColor:'pink', width:'250px', padding:'10px', margin: '5px auto', color: props.couleur}}>
            <strong>Nom: </strong> {props.children}<br />
            <strong>Couleur: </strong> {props.couleur}<br />
        </div>
    );
}

export default Cars;