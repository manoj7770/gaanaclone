import React,{useState} from "react";
import "../../App.css";
import playbutton1 from "../Images/playbutton1.jpg";

const MusicCard = ({image, title, index})=>{
    const[handleHover, setHandleHover] = useState(null)
    return(
        <div id={title} className="MusicCard" onMouseEnter={()=>{setHandleHover(index)}} onMouseLeave={()=>{setHandleHover(null)}}>
            <div className="playButton" style={{display:handleHover==index?"flex": "none"}}>
                <img src={playbutton1} style={{height: "100%", width:"100%"}} />
            </div>
          <img className="music" src={image}/>
          <p>{title}</p>
        </div>
    )
}
export default MusicCard;