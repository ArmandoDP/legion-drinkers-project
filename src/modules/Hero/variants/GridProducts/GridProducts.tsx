import React, { type FC } from "react";

import * as S from "./styled";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@static/icons";
import { FadeIn } from "@utils/animations/FadeIn";
import { Button } from "@components/Button";

export type GridProductsProps = {
    // content treated as HTML output
    content?: {
        id?: string;
        image: string;
        title: string;
        description?: string;
        priceOld?: string;
        priceNew?: string;
        button?: {
            text: string;
            link: string;
        };
    }[];
};

export const GridProducts: FC<GridProductsProps> = ({ content }) => {
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
            <S.ProductGroup>
                {slide.map((product) => (
                    <S.ProductCard key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3 style={{ color: "black" }}>{product.title}</h3>
                        <p>{product.description}</p>
                        <S.PriceSpace>
                            <p style={{ textDecoration: 'line-through', fontSize: "16px" }}>{product.priceOld}</p>
                            <p style={{ fontSize: "20px", color: "red" }}>{product.priceNew}</p>
                        </S.PriceSpace>
                        {product.button && product.button.text && product.button.link && (
                            <a href={product.button.link}>
                                <button style={{ backgroundColor: "#f9dc22", color:"black", border: "1px solid black", }}>{product.button.text}</button>
                            </a>
                        )}
                    </S.ProductCard>
                ))}
            </S.ProductGroup>
    ));

    return (
        <S.GridProductsStyled>
                {slides}
            {/* {slides.length > 1 ? (
                <>
                    <S.GridProductsTextToSlide>
                        Swipe to slide
                        <Icon iconData="arrowRight" alt="arrow icon" />
                    </S.GridProductsTextToSlide>
                    <div className="swiper-pagination"></div>
                </>
            ) : (
                <S.GridProductsTextToSlide>
                    Scroll down
                    <Icon iconData="arrowDown" alt="arrow icon" />
                </S.GridProductsTextToSlide>
            )} */}
        </S.GridProductsStyled>
    );
};


