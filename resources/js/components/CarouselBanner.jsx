import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../../sass/carouselBanner.scss";

import banner01 from "../../../public/assets/images/banner01.png";
import banner02 from "../../../public/assets/images/banner02.png";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 961 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 961, min: 641 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 641, min: 0 },
        items: 1,
    },
};

export const CarouselBanner = () => {
    return (
        <>
            <div className="container__carousel__banner">
                <Carousel
                    partialVisible={true}
                    additionalTransfrom={0}
                    arrows={true}
                    autoPlaySpeed={8000}
                    centerMode={false}
                    containerClass="carousel__banner"
                    draggable
                    focusOnSelect={false}
                    infinite={true}
                    itemClass="item"
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside
                    renderDotsOutside={false}
                    responsive={responsive}
                    showDots={false}
                    sliderClass="teste"
                    slidesToSlide={1}
                    customTransition={"transform 800ms ease-in-out"}
                >
                    <div className="content__banner">
                        <img src={banner01} alt="banner" />
                    </div>
                    <div className="content__banner">
                        <img src={banner02} alt="banner" />
                    </div>
                </Carousel>
            </div>
        </>
    );
};
