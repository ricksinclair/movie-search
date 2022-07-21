import PopupUtil from "../animation-util/PopUpUtil";
import "./ResultCard.css"
import {Fragment, useEffect, useState} from "react";


const ResultCard = (props: any) => {
    const viewURl = `https://www.imdb.com/title/`;

    useEffect(() => {
    }, []);




    return(


    !props.loading && <Fragment key={props.imdbID}><a   className="card-link" href={`${viewURl}${props.imdbID}`} target={`_blank`}>
        <div className="result-card">
            <img src={props.poster} alt={props.title} height={300}/>
            <h3 className="movie-title">{props.title}</h3>
            <h4>{props.Year}</h4>
        </div>
        </a> </Fragment>)

};


export default ResultCard;
