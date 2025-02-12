import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const CarouselCategoryProductsStyled = styled.div`
    width: 100%;
    min-height: 457px;
    padding: 20px 20px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .swiper-pagination {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        z-index: 1;
        width: 100%;
        max-width: 300px;
        height: 10px;
        // background: ${Theme.tertiary};
        border-radius: 5px;
        pointer-events: none;

        span {
            background: ${Theme.primary};
            position: relative;
            width: 20px;
            height: 10px;
            margin: 0 5px;
            border-radius: 5px;
            transform: scale(1);
            transition: transform 0.3s;
        }

        .swiper-pagination-bullet-active {
            transform: scale(1.5);
            background: ${Theme.secondary};
        }
    }

    .swiper {
        height: 100%;
    }

    h1 {
        font-size: 80px;
        line-height: 90px;
        text-align: center;
        margin-bottom: 20px;

        ${MediaQuery.max("lg")} {
            font-size: 40px;
            line-height: 50px;
        }
    }
`;

export const CarouselCategoryProductsSlide = styled.div<{ $bgImage?: string }>`
    height: 100%;
    position: relative;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${MediaQuery.max("lg")} {
        padding: 0 15px;
    }

    .swiper-slide {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ${({ $bgImage }) =>
        $bgImage &&
        `
        background-image: url(${$bgImage});
        background-size: cover;
        background-position: center;
    `}
`;

export const CarouselCategoryProductsSlideImg = styled.figure`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 100%);
    }
`;

export const CarouselCategoryProductsSlideContent = styled.div`
    position: relative;
    z-index: 2;
    text-align: center;
    color: ${Theme.primary};

    h1 {
        font-size: 60px;
        line-height: 70px;
        margin-bottom: 20px;

        ${MediaQuery.max("lg")} {
            font-size: 40px;
            line-height: 50px;
        }
    }

    p {
        font-size: 18px;
        line-height: 28px;
        color: ${Theme.secondary};
        max-width: 600px;
        margin: 0 auto;

        ${MediaQuery.max("lg")} {
            font-size: 16px;
            line-height: 24px;
        }
    }
`;

export const ProductGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
    width: 100%;
    max-width: 1500px;
    margin: 20px 0;

    ${MediaQuery.max("lg")} {
        gap: 15px;
    }
`;

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    text-align: center;
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0);
    padding: 20px;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    img {
        max-width: 340px;
        margin-bottom: 15px;
        border-radius: 8px;
        
        ${MediaQuery.max("lg")} {
            max-width: 290px;
        }
    }

    h3 {
        font-size: 1.2rem;
        margin: 10px 0;
        color: ${Theme.primary};
    }

    p {
        font-size: 0.9rem;
        color: ${Theme.secondary};
    }

    button {
        padding: 10px 20px;
        background-color: ${Theme.primary};
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: ${Theme.secondary};
        }
    }
`;
