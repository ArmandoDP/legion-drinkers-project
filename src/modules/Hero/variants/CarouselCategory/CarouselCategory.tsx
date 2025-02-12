import React, { type FC } from "react";

import * as S from "./styled";
import { SwiperSlider } from "@components/SwiperSlider";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@static/icons";
import { FadeIn } from "@utils/animations/FadeIn";
import { Button } from "@components/Button";

export type CarouselCategoryProps = {
    // content treated as HTML output
    content?: {
        id?: string;
        image: string;
        title: string;
        description?: string;
        link?: string;
        button?: {
            text: string;
            link: string;
        };
    }[];
};

export const CarouselCategory: FC<CarouselCategoryProps> = ({ content }) => {
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
        <S.CarouselCategorySlide key={index}>
            <S.CategoryGroup>
                {slide.map((category) => (
                    <S.CategoryCard key={category.id}>
                        <a href={category.link}>
                            <img style={{ width: "200%", height: "400px", objectFit: "contain" }} src={category.image} alt={category.title} />
                            <h3 style={{ color: "black" }}>{category.title}</h3>
                            <p>VER MAS</p>
                        </a>
                    </S.CategoryCard>
                ))}
            </S.CategoryGroup>
        </S.CarouselCategorySlide>
    ));

    return (
        <S.CarouselCategoryStyled>
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
                        delay: 4000,
                    },
                }}
            >
                {slides}
            </SwiperSlider>
            <div className="swiper-pagination"></div>
            {/* {slides.length > 1 ? (
                <>
                    <S.CarouselCategoryTextToSlide>
                        Swipe to slide
                        <Icon iconData="arrowRight" alt="arrow icon" />
                    </S.CarouselCategoryTextToSlide>
                    <div className="swiper-pagination"></div>
                </>
            ) : (
                <S.CarouselCategoryTextToSlide>
                    Scroll down
                    <Icon iconData="arrowDown" alt="arrow icon" />
                </S.CarouselCategoryTextToSlide>
            )} */}
        </S.CarouselCategoryStyled>
    );
};


