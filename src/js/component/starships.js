import React, { useContext } from "react";
import "../../styles/characters.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Starships = (props) => {
  const { store, actions } = useContext(Context);
  const name = props.name;

  let favs = store.favorites.filter(e => e.name === name).lenght

  return (
    <>
      <div
        className="card mx-2 px-0 bg-secondary text-light border border-secondary my-3"
        style={{ width: "18rem" }}
      >
        <img
          className="card-img-top img-fluid img-cover img-starship"
          src={props.imageURL}
          alt="Card image cap"
        />
        <div className="my-auto">
          <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text"><b>Manufacturer:</b> {props.manufacturer}<br /><b>Cost:</b> {props.cost}<br /><b>Passengers:</b> {props.passengers}</p>
            <Link to={props.link} className="btn btn-warning">Learn more</Link>
            <i onClick={() =>
             favs === 1 ? actions.deleteFav(name) :  actions.addFav(props)} className={favs === 1 ? "fas fa-heart heart" : "far fa-heart heart"} style={{ marginLeft: "10px" }}
              ></i>
          </div>
        </div>
      </div>
    </>
  );
};