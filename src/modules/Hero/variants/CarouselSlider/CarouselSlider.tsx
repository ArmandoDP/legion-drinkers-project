import React, { type FC } from "react";

import * as S from "./styled";
import { SwiperSlider } from "@components/SwiperSlider";
import { Pagination, Autoplay } from "swiper/modules";

export type CarouselSliderProps = {
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
    if (!content || content.length === 0) {
        return null;
    }

    return (
        <S.CarouselSliderStyled>
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
                {content.map((product, index) => (
                    <S.CarouselSliderSlide key={index}>
                        <S.ProductGroup>
                            <S.ProductCard>
                            <img 
                                style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                                src={product.image} 
                                alt={product.title} 
                            />
                            <h3 style={{ color: "black" }}>{product.title}</h3>
                            <p>{product.description}</p>
                            {product.button && product.button.text && product.button.link && (
                                <a href={product.button.link}>
                                    <button 
                                        style={{ 
                                            backgroundColor: "#f9dc22", 
                                            color: "black", 
                                            border: "1px solid black" 
                                        }}>
                                        {product.button.text}
                                    </button>
                                </a>
                            )}
                            </S.ProductCard>
                        </S.ProductGroup>
                    </S.CarouselSliderSlide>
                ))}
            </SwiperSlider>
            <div className="swiper-pagination"></div>
        </S.CarouselSliderStyled>
    );
};
