import React, { useContext } from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Starships } from "../component/starships";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const Home = () => {
	const {store, actions} = useContext(Context)
	const { id } = useParams()
	const characters = store.characters
	const planets = store.planets
	let ships = store.ships
	let shipImages = store.shipImages
	let planetImages = store.planetImages
	
	return(
	<div className="container-fluid">
			<div className="row mt-3">
				<h2>Characters</h2>
			</div>
			<div className="row card-row d-flex flex-row flex-nowrap">
				{characters?.map((character, index) => {
					return <Characters name={character.name} imageIndex ={index + 1} birth_year={character.birth_year} height={`${character.height / 100}m`} eye_color={character.eye_color} link = {"/characters/" + index} key={index} id={index} type={`characters`} />
				})}
			</div>
			<div className="row mt-3">
				<h2>Planets</h2>
			</div>
			<div className="row card-row d-flex flex-row flex-nowrap">
				{planets?.map((planet, index) => {
					return <Planets name={planet.name} imageURL = {planetImages[index]} population={planet.population} climate={planet.climate} terrain={planet.terrain} link = {"/planets/" + index} key={index} />
				})}
			</div>
			<div className="row mt-3">
				<h2>Starships</h2>
			</div>
			<div className="row card-row d-flex flex-row flex-nowrap">
				{ships?.map((ship, index) => {
					return <Starships imageURL = {shipImages[index]} name={ship.name} manufacturer={ship.manufacturer} cost={ship.cost_in_credits} passengers={ship.passengers} link = {"/starships/" + index} key={index} />
				})}
			</div>
		</div>
)};

export default Home;