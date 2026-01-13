import { type FC } from "react";
import PreviewPng from "./preview.webp";
import HeroImg from "./hero-img.webp";
import Logo from "./logo.png";

import HeroSlider1 from "./hero-slider-01.webp";
import HeroSlider2 from "./hero-slider-02.webp";
import HeroSlider3 from "./hero-slider-03.webp";
import HeroSlider4 from "./ejemplo1.gif";
import HeroSlider5 from "./ejemplo2.png";
import HeroSlider6 from "./ejemplo4.jpg";
import HeroSlider7 from "./ejemplo5.png";
import HeroSlider8 from "./ejemplo6.gif";
import HeroSlider9 from "./ejemplo7.gif";
import BrandyBanner from "./brandy-banner.webp";
import VinoBanner from "./vino-banner.webp";
import BannerPrimero from "./Tarjeta-Presentacion.jpg"
import FondoDrinkers from "./FONDO_drinkers.webp"
import BannerPrincipal from "./tarjeta_drinkers_banner.webp"
import SlidePrincipal from "./tarjeta_drinkers-principal.webp"

import ProductsSlider from "./ofertas-banner.webp"
import SliderImage from "./slide-2.webp"

import InfiniteImg1 from "./infinite-img-1.webp";
import InfiniteImg2 from "./infinite-img-2.webp";

import CognacBanner from "./COGNAC-banner.webp";
import VodkaBanner from "./VODKA-banner.webp";
import TequilaBanner from "./TEQUILA-banner.webp";
import MezcalBanner from "./MEZCAL-banner.webp";
import WhiksyBanner from "./whisky-banner.webp";
import RonBanner from "./ron-banner.webp";
import LicorBanner from "./licor-banner.webp";
import FondoBotellas from "./FONDO_botellas.webp";
import FondoPromos from "./FONDO_promos.webp";

//calendarios
import CalendarioEnero1 from "./calendarios/Enero/Calendario1.webp";
import CalendarioEnero2 from "./calendarios/Enero/Calendario2.webp";


import UbiCrespa from "./ubicaciones/ubicacion-la-crespa.jpg";
import UbiStaCruz from "./ubicaciones/ubicacion-santa-cruz.jpg";
import UbiPartidas from "./ubicaciones/ubicacion-las-partidas.jpg";
import UbiSanAntonio from "./ubicaciones/ubicacion-san-antonio.jpg";
import UbiCentro from "./ubicaciones/ubicacion-centro-xona.jpg";
import UbiOtzolo from "./ubicaciones/ubicacion-otzolotepec.jpg";
import { GridProductsSlide } from '../../modules/Hero/variants/GridProducts/styled';


export const images = {
    preview: PreviewPng,
    heroImg: HeroImg,
    logo: Logo,
};

export type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
    link?: string;
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    link,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height, };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export {
    PreviewPng,
    HeroSlider1,
    HeroSlider2,
    HeroSlider3,
    HeroSlider4,
    HeroSlider5,
    HeroSlider6,
    HeroSlider7,
    HeroSlider8,
    HeroSlider9,
    InfiniteImg1,
    InfiniteImg2,
    UbiCrespa,
    UbiStaCruz,
    UbiPartidas,
    UbiSanAntonio,
    UbiCentro,
    UbiOtzolo,
    WhiksyBanner,
    VodkaBanner,
    RonBanner,
    LicorBanner,
    BrandyBanner,
    VinoBanner,
    ProductsSlider,
    SliderImage,
    BannerPrimero,
    FondoDrinkers,
    BannerPrincipal,
    SlidePrincipal,
    CognacBanner,
    TequilaBanner,
    MezcalBanner,
    FondoBotellas,
    FondoPromos,
    CalendarioEnero1,
    CalendarioEnero2,
};
