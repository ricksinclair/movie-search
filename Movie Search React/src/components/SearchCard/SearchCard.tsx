import "./SearchCard.css"
import PopupUtil from "../animation-util/PopUpUtil";
import {useRef, useState} from "react";


export default function SearchCard(props:any) {

    const [value, setValue] = useState('')
    const setUserQuery = (e: { preventDefault: () => void; })=>{
    e.preventDefault()
    props.setUserQuery(value)
        console.log(value)
    }
    const keyDownHandler = (event: { key: string; preventDefault: () => void; }) => {
        console.log('User pressed: ', event.key);

        if (event.key === 'Enter') {
            event.preventDefault();

            // 👇️ call submit function here
            props.setUserQuery(value);
        }
    };

    return (
        <PopupUtil>
            <div className="search-card">

                <div className="search-card-header">
                    <h1 className="card-title">Movie Search</h1>
                </div>
                <div className="form">
                    <input type="text" onChange={e=> setValue(e.target.value)} onKeyDown={keyDownHandler}  />
                    <div className="btn search-card- btn"  onClick={setUserQuery}>Search</div>
                </div>
                <small className="powered-by">Powered By OMDB</small>

            </div>
        </PopupUtil>
    )

}
