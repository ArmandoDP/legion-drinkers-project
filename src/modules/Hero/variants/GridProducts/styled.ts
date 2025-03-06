import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const GridProductsStyled = styled.div`
    width: 100%;
    min-height: 457px;
    padding: 80px 20px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${MediaQuery.max("lg")} {
        padding: 5px;
    }
    ${MediaQuery.max("sm")} {
        padding: 5px;
    }
    ${MediaQuery.max("xl")} {
        padding: 5px;
    }

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

export const GridProductsSlide = styled.div<{ $bgImage?: string }>`
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

export const GridProductsSlideImg = styled.figure`
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

export const GridProductsSlideContent = styled.div`
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
            line-height: 14px;
        }
    }
`;

export const ProductGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Ajusta automáticamente las columnas */
    gap: 20px;
    width: 100%;
    max-width: 1500px;
    margin: 20px 0;

    /* Ajuste para pantallas de tablet */
    ${MediaQuery.between("sm", "lg")} {
        grid-template-columns: repeat(2, 1fr); /* 2 columnas fijas en tablets */
        gap: 15px;
    }

    /* Ajuste para pantallas pequeñas (móviles) */
    ${MediaQuery.max("sm")} {
        grid-template-columns: repeat(1, 1fr); /* Columnas más pequeñas en móviles */
        gap: 10px;
    }
`;



export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background: #ffffff;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    padding: 20px;

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
            margin: none;
        }
        ${MediaQuery.max("xxl")} {
            max-width: 310px;
            margin: none;
        }
        ${MediaQuery.max("sm")} {
            max-width: 320px;
            margin: none;
        }
    }

    h3 {
        font-size: 1.2rem;
        margin: 10px 0;
        color: ${Theme.primary};
    }

    p {
        font-size: 0.9rem;
        text-align: center;
        color: ${Theme.secondary};
        margin-bottom: 15px;

        ${MediaQuery.max("lg")} {
            font-size: 0.8rem;
        }
        ${MediaQuery.max("sm")} {
            font-size: 0.82rem;
        }
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
        
        ${MediaQuery.max("lg")} {
            padding: 8px 16px;
            font-size: 0.9rem;
        }
        ${MediaQuery.max("sm")} {
            padding: 6px 12px;
            font-size: 1rem;
        }
    }
`;

export const PriceSpace = styled.div`
    display: flex;
    gap: 8px; /* Espacio entre los precios */
    align-items: center; /* Alinear los precios correctamente */
    justify-content: start;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
`;
