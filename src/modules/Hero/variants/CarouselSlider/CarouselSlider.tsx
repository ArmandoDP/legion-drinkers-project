import React, { type FC } from "react";

import * as S from "./styled";
import { SwiperSlider } from "@components/SwiperSlider";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@static/icons";
import { FadeIn } from "@utils/animations/FadeIn";
import { Button } from "@components/Button";

export type CarouselSliderProps = {
    // content treated as HTML output
    content?: {
        id?: string;
        image: string;
        title: string;
        description?: string;
        button?: {
            text: string;
            link: string;
        };
    }[];
};

export const CarouselSlider: FC<CarouselSliderProps> = ({ content }) => {
    // do not render if there are no elements
    if (!content || content.length === 0) {
        return null;
    }

    /**
     * All slides are generated here based on the content prop
     * @param slide - slide content
     */

    const groupedContent = [];
    for (let i = 0; i < content.length; i += 4) {
        groupedContent.push(content.slice(i, i + 4));
    }

    const slides = groupedContent.map((slide, index) => (
        <S.CarouselSliderSlide key={index}>
            <S.ProductGroup>
                {slide.map((product) => (
                    <S.ProductCard key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        {product.button && product.button.text && product.button.link && (
                            <a href={product.button.link}>
                                <button>{product.button.text}</button>
                            </a>
                        )}
                    </S.ProductCard>
                ))}
            </S.ProductGroup>
        </S.CarouselSliderSlide>
    ));

    return (
        <S.CarouselSliderStyled>
            <SwiperSlider
                modules={[Pagination, Autoplay]}
                options={{
                    slidesPerView: 1,
                    speed: 1000,
                    spaceBetween: 20,
                    effect: "slide",
                    loop: true,
                    grabCursor: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    autoplay: {
                        delay: 5000,
                    },
                }}
            >
                {slides}
            </SwiperSlider>
            <div className="swiper-pagination"></div>
            {/* {slides.length > 1 ? (
                <>
                    <S.CarouselSliderTextToSlide>
                        Swipe to slide
                        <Icon iconData="arrowRight" alt="arrow icon" />
                    </S.CarouselSliderTextToSlide>
                    <div className="swiper-pagination"></div>
                </>
            ) : (
                <S.CarouselSliderTextToSlide>
                    Scroll down
                    <Icon iconData="arrowDown" alt="arrow icon" />
                </S.CarouselSliderTextToSlide>
            )} */}
        </S.CarouselSliderStyled>
    );
};
