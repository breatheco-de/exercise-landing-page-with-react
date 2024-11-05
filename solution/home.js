import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
	{
		image: "https://picsum.photos/id/10/200/300",
		title: "Parque",
		description: "Parque con lindo paisaje",
	},
	{
		image: "https://picsum.photos/id/17/200/300",
		title: "Sendero",
		description: "Sendero con lindo paisaje",
	},
	{
		image: "https://picsum.photos/id/28/200/300",
		title: "Bosque",
		description: "Bosque con lindo paisaje",
	},
	{
		image: "https://picsum.photos/id/54/200/300",
		title: "Montaña",
		description: "Montaña con lindo paisaje",
	}
];

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;