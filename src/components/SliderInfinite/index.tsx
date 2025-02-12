import React, { type FC, useMemo } from "react";
import { SwiperSlide } from "swiper/react";
import type { SwiperOptions, SwiperModule } from "swiper/types";
import * as S from "./styled";

type SwiperSliderProps = {
    children: React.ReactNode;
    modules?: SwiperModule[] | undefined;
    options?: SwiperOptions;
};

/**
 * SwiperSlider basado en Swiper.js (carrusel infinito)
 * @url https://swiperjs.com/react
 */
export const SwiperSlider: FC<SwiperSliderProps> = ({
    children,
    options,
    modules,
    ...rest
}) => {
    // Si no hay hijos, retorna null
    if (!children) {
        return null;
    }

    // Memoriza los slides para optimización
    const memoChildren = useMemo(
        () =>
            React.Children.map(children, (child, index) => (
                <SwiperSlide key={index} className="splide__slide">
                    {child}
                </SwiperSlide>
            )),
        [children]
    );

    return (
        <S.SwiperStyled
            modules={modules ? modules : []}
            slidesPerView={1}
            speed={5000} // Velocidad de transición fluida
            spaceBetween={30}
            loop={true} // Hace que sea infinito
            // autoplay={{
            //     delay: 0, // Sin pausas
            //     disableOnInteraction: false, // No se detiene al tocar
            //     pauseOnMouseEnter: false, // No se pausa con el mouse
            //     waitForTransition: false, // Fluidez continua
            // }}
            allowTouchMove={false} // Bloquea interacción manual
            {...options}
            {...rest}
        >
            {memoChildren}
        </S.SwiperStyled>
    );
};
