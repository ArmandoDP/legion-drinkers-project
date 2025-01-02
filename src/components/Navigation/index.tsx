import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/ofertas">OFERTAS</a>
                    </li>
                    <li>
                        <a href="/headphones">TEQUILA</a>
                    </li>
                    <li>
                        <a href="/speakers">WHISKEY</a>
                    </li>
                    <li>
                        <a href="/earphones">VODKA</a>
                    </li>
                    <li>
                        <a href="/infinite">NOSOTROS</a>
                    </li>
                    <li>
                        <a href="/contact">CONTACTO</a>
                    </li>
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
