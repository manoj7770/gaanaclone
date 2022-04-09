import React from "react";
import '../App.css'

import NewReleasesHindi from "../Components/NewReleasesHindi.jpg";
import GarvHai from "../Components/GarvHai.jpg";
import BPraakRomanticHits from "../Components/BPraakRomanticHits.jpg";
import NewReleasesPunjabi from "../Components/NewReleasesPunjabi.jpg";
import PartyHot50 from "../Components/PartyHot50.jpg";
import TopSearches from "../Components/TopSearches.jpg";
import Carousel, { CarouselItem } from "../Components/Carousel";

const ImageSlider = () => {
    return (
        <>
            <div className="ImgSlider">
                <Carousel>
                    <CarouselItem>
                        <img className="ImgItem" src={NewReleasesHindi} />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="ImgItem" src={GarvHai} />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="ImgItem" src={BPraakRomanticHits} />
                    </CarouselItem>
                    <CarouselItem >
                        <img className="ImgItem" src={NewReleasesPunjabi} />
                    </CarouselItem>
                    <CarouselItem >
                        <img className="ImgItem" src={PartyHot50} />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="ImgItem" src={TopSearches} />
                    </CarouselItem>
                </Carousel>
            </div>
        </>
    )
}
export default ImageSlider;