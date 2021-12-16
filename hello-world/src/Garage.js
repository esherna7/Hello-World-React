import Car from './Car';
function Garage(){
    var carName = "Ford"; // variable
    const carInfo = {color: "red" , model: "mustang"}; // object

    return(
    <>
        <h1>Who lives in my garage?</h1>
        {/* <Car brand = "Ford" /> one way to do this or below */}
        {/* <Car brand = {carName} /> send it via variable or below*/}
        {/* <Car brand = {carInfo} /> send it as object */}
    </>
    );
}

export default Garage;