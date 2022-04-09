import React from "react";
import "../../App.css";
import MusicCard from "../MusicCard/MusicCard";
import mastnazronse from "../Images/mastnazronse.jpg";
import terasaathho from "../Images/terasaathho.jpg";
import mereyara from "../Images/mereyara.jpg";
import bigmen from "../Images/bigmen.jpg";
import Asitwas from "../Images/Asitwas.jpg";

const arr =[{image: Asitwas, title:"As it is"},{image:bigmen, title:"Big Men" }, {image:mastnazronse, title:"Mast Nazron se" },{ image:mereyara, title:"Mera Yara"} , {image:terasaathho, title:"Tera Saath Ho"}]
const Music = () => {


    return (
        <>
            <h2 className="Heading">
                Trending Songs
            </h2>

            <div id="allMusic">
                <div className="Music1">
                 {arr.map((item, index)=>{
                        return <MusicCard key={index} index={index} image={item.image} title={item.title}/>
                 })}
                </div>

                <div className="Music1">
                 {arr.map((item, index)=>{
                        return <MusicCard key={index} index={index} image={item.image} title={item.title}/>
                 })}
                </div>

                <div className="Music1">
                 {arr.map((item, index)=>{
                        return <MusicCard key={index} index={index} image={item.image} title={item.title}/>
                 })}
                </div>
            </div>
        </>
    )
}

export default Music;