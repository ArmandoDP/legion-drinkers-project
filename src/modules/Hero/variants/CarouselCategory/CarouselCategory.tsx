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


    return (
            <S.CarouselCategoryStyled>
                <SwiperSlider
                    modules={[Pagination, Autoplay]}
                    options={{
                        slidesPerView: 1, // 1 producto por slide en móvil
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
                        breakpoints: {
                            768: { // A partir de 768px (tabletas y más grandes)
                                slidesPerView: 2,
                            },
                            1024: { // A partir de 1024px (escritorio)
                                slidesPerView: 4, // 4 productos por slide en escritorio
                            },
                        },
                    }}
                >
                    {content.map((category, index) => (
                        <S.CarouselCategorySlide key={index}>
                            <S.CategoryGroup>
                                <S.CategoryCard>
                                    <a href={category.link}>
                                        <img style={{ width: "200%", height: "400px", objectFit: "contain" }} src={category.image} alt={category.title} />
                                        <h3 style={{ color: "black" }}>{category.title}</h3>
                                        <p>VER MAS</p>
                                    </a>
                                </S.CategoryCard>
                            </S.CategoryGroup>
                        </S.CarouselCategorySlide>
                    ))}
                </SwiperSlider>
                <div className="swiper-pagination"></div>
            </S.CarouselCategoryStyled>
        );
};


