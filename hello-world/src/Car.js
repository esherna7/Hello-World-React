function Car(props){
    return (
    <> {/* need empty to hold multiple lines */}
        <h2>Hi, I am a {props.color} car!</h2>
        {/* <h2>Hi, I am a {props.brand.color} car!</h2> via object */}
    </>
    );
}

export default Car;