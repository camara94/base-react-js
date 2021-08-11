const Cars = (props) => {
    const cars = props.cars.map( (car, i) => {
        if(i < 3) {
            return (
                <div key={i} style={{ width: '600px',  backgroundColor: 'pink', padding: '5px', margin: '5px auto' }}>
                    <strong>Nom: </strong> {car.Name} <br/>
                    <strong>Cylinder(s): {car.Cylinders}</strong> <br/>
                    <strong>Pays: {car.Origin}</strong>
                </div>
            )
        }
    } );
    return (
        <>
            {cars}
        </>
    )
}

export default Cars;