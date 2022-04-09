import React from "react";
import Category from "./Category/Category";
import ImageSlider from "./ImageSlider/ImageSlider";
import Music from "./Music/Music";
import MusicLIneTwo from "./MusicLineTwo/MusicLineTwo";
import NavBar from "./NavBar/NavBar";


const Index = () => {
    return (
        <>
            <NavBar />
            <Category />
            <ImageSlider />
            <Music />
            <MusicLIneTwo/>
        </>
    )

}

export default Index;