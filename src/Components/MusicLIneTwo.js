import React from "react";
import "../App.css";
import JoMujheDeewanaKarDe from "../Components/JoMujheDeewanaKarDe.jpg";
import MissHairan from "../Components/MissHairan.jpg";
import Dream from "../Components/Dream.jpg";
import Familia from "../Components/Familia.jpg";
import MusicCard from "./MusicCard";
const arr =[{image: JoMujheDeewanaKarDe, title:"Jo Mujhe Deewana Kar"},{image:MissHairan, title:"Miss Hairan" }, {image:Dream, title:"Dream" },{ image:Familia, title:"Familia"}]
const MusicLIneTwo = () => {


    return (
        <>
            <h2 className="Heading">
                New Releases
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

export default MusicLIneTwo;