import React from "react";
import "../App.css";
import MusicCard from "./MusicCard";
import mastnazronse from "../Components/mastnazronse.jpg";
import terasaathho from "../Components/terasaathho.jpg";
import mereyara from "../Components/mereyara.jpg";
import JoMujheDeewanaKarDe from "../Components/JoMujheDeewanaKarDe.jpg";
import Dream from "../Components/Dream.jpg";
import bigmen from "../Components/bigmen.jpg";
import Asitwas from "../Components/Asitwas.jpg";
import Carousel, { CarouselItem } from "../Components/Carousel";

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