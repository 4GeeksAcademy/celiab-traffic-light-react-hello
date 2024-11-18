// import React from "react";
import React,{ useState } from 'react';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [ color, setColor] = useState("red");


	return (
		<div >
			<div className ="space d-flex flex-row justify-content-center">
			<div className="bar"></div>
			</div>
			<div className="container-fluid d-flex flex-row justify-content-center">
			<div className= "trafficLight  ">

				<button type="button" className={`btn btn-danger red m-2 ${(color === "red")? "light" : ""}` }  
				onClick={ ()=> {
						setColor ("red")}}
				></button>
				<button type="button" className={`btn btn-warning yellow m-2 ${(color === "yellow")? "light" : ""} `}
				onClick={ ()=> {
					setColor ("yellow")}}></button>
				<button type="button" className={`btn btn-success green m-2 ${(color === "green")? "light" : ""} `}
				onClick={ ()=> {
					setColor ("green")}}></button>
			</div>
			</div>

		</div>
		
	);
};

export default Home;
