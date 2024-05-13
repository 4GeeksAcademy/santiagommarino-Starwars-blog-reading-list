import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

export const SingleCharacter = (props) => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
    const characters = store.characters
    return (
        <div className="container-fluid">
            <div className="row my-3">
                <h2>Characters<span className="text-black"> / {characters[id]?.name}</span></h2>
            </div>
            <div className="row bg-secondary m-5 border border-light single-card">
                <div className="row">
                    <div className="col-4 p-0  d-flex ">
                        <img className="img-fluid img-cover single-image" src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(id) + 1}.jpg`} />
                    </div>
                    <div className="col-8 p-4">
                        <h1 className="single-header">{characters[id]?.name}</h1>
                        <p className="single-info-text mt-3 mb-0"><b>Birth Year:&nbsp;&nbsp;</b>{characters[id]?.birth_year}</p>
                        <p className="single-info-text my-0"><b>Height:&nbsp;&nbsp;</b>{(characters[id]?.height) / 100}m</p>
                        <p className="single-info-text my-0"><b>Hair Color:&nbsp;&nbsp;</b>{characters[id]?.hair_color}</p>
                        <p className="single-info-text my-0"><b>Eye Color:&nbsp;&nbsp;</b>{characters[id]?.eye_color}</p>
                        <p className="single-info-text my-0"><b>Skin Color:&nbsp;&nbsp;</b>{characters[id]?.skin_color}</p>
                        <p className="single-info-text my-0"><b>Description:&nbsp;&nbsp;</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}