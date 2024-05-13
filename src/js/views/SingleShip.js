import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

export const SingleShip = (props) => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
    const ships = store.ships
    const shipImages = store.shipImages
    return (
        <div className="container-fluid">
            <div className="row my-3">
                <h2>Ships<span className="text-black"> / {ships[id]?.name}</span></h2>
            </div>
            <div className="row bg-secondary m-5 border border-light single-card">
                <div className="row">
                    <div className="col-4 p-0  d-flex ">
                        <img className="img-fluid img-cover single-image" src={shipImages[id]} />
                    </div>
                    <div className="col-8 p-4">
                        <h1 className="single-header">{ships[id]?.name}</h1>
                        <p className="single-info-text mt-3 mb-0"><b>Manufacturer:&nbsp;&nbsp;</b>{ships[id]?.manufacturer}</p>
                        <p className="single-info-text my-0"><b>Cost:&nbsp;&nbsp;</b>{(ships[id]?.cost_in_credits)}Cr</p>
                        <p className="single-info-text my-0"><b>Max Atmos. Speed:&nbsp;&nbsp;</b>{ships[id]?.max_atmosphering_speed}</p>
                        <p className="single-info-text my-0"><b>Crew:&nbsp;&nbsp;</b>{ships[id]?.crew}</p>
                        <p className="single-info-text my-0"><b>passengers:&nbsp;&nbsp;</b>{ships[id]?.passengers}</p>
                        <p className="single-info-text my-0"><b>Description:&nbsp;&nbsp;</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}