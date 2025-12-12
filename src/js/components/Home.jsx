import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ count }) => {

	return (
		<>
			<div className="btn-toolbar position-absolute top-50 start-50 translate-middle" role="toolbar" aria-label="Toolbar with button groups">
				<div className="btn-group m-2 " role="group" aria-label="First group">
					<button type="button" className="btn-outline-secondary cf digito1"><i className="cfs fa-regular fa-clock"></i></button>
					<button type="button" className="btn-outline-secondary cf">{Math.floor(count / 10000) % 10}</button>
					<button type="button" className="btn-outline-secondary cf">{Math.floor(count / 1000) % 10}</button>
					<button type="button" className="btn-outline-secondary cf">{Math.floor(count / 100) % 10}</button>
					<button type="button" className="btn-outline-secondary cf">{Math.floor(count / 10) % 10}</button>
					<button type="button" className="btn-outline-secondary cf ultimoDigito">{Math.floor(count / 1) % 10}</button>
				</div>

			</div>
		</>

	);
};

export default Home;

