import React from "react";
import "../../App.css";

import NewReleasesHindi from "../Images/NewReleasesHindi.jpg";
import GarvHai from "../Images/GarvHai.jpg";
import BPraakRomanticHits from "../Images/BPraakRomanticHits.jpg";
import NewReleasesPunjabi from "../Images/NewReleasesPunjabi.jpg";
import PartyHot50 from "../Images/PartyHot50.jpg";
import TopSearches from "../Images/TopSearches.jpg";
import Carousel, { CarouselItem } from "../Carousel/Carousel";

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