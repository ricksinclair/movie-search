import PopupUtil from "../animation-util/PopUpUtil";
import "./ResultCard.css"
const ResultCard = (props: any) => {


    return(<>{
        !props.loading && <div className="result-card" key={props.imdbID}>
            <img src={props.poster} alt={props.title} height={300}/>
            <h3 className="movie-title">{props.title}</h3>
            <h4>{props.Year}</h4>
        </div>
    } </> )

};


export default ResultCard;
