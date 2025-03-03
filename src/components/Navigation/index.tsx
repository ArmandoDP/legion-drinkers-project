import * as S from "./styled";
import { useState, type FC, useEffect, useRef } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Cierra el dropdown si se hace clic fuera del componente
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/">INICIO</a>
                    </li>
                    <li>
                        <a href="/promociones">PROMOS</a>
                    </li>
                    <li>
                        <a href="/ofertas">OFERTAS</a>
                    </li>
                    <li
                        onClick={toggleDropdown} // Cambio a onClick
                        style={{ position: "relative" }} // Aseguramos que este li sea el contenedor del dropdown
                    >
                        <a>CATEGORIAS</a>
                        <S.DropdownWrapper ref={dropdownRef} $isOpen={isDropdownOpen}>
                            <S.DropdownList>  {/* Aquí usamos DropdownList */}
                                <a href="/brandy"><S.DropdownListItem><S.DropdownItem>BRANDY</S.DropdownItem></S.DropdownListItem></a>
                                <a href="/brandy"><S.DropdownListItem><S.DropdownItem>COGNAC</S.DropdownItem></S.DropdownListItem></a>
                                <a href="/mezcal"><S.DropdownListItem><S.DropdownItem>DESTILADO</S.DropdownItem></S.DropdownListItem></a>
                                <a href="/vodka-ginebra"><S.DropdownListItem><S.DropdownItem>GINEBRA</S.DropdownItem></S.DropdownListItem></a>
                                <a href="/vino"><S.DropdownListItem><S.DropdownItem>LICOR</S.DropdownItem></S.DropdownListItem></a>
                                <a href="/mezcal"><S.DropdownListItem><S.DropdownItem>MEZCAL</S.DropdownItem></S.DropdownListItem></a>
                                <a href="/ron"><S.DropdownListItem><S.DropdownItem>RON</S.DropdownItem></S.DropdownListItem></a>
                                <a href="/tequila"><S.DropdownListItem><S.DropdownItem>TEQUILA</S.DropdownItem></S.DropdownListItem></a>
                                <a href="/vodka-ginebra"><S.DropdownListItem><S.DropdownItem>VODKA</S.DropdownItem></S.DropdownListItem></a>
                                <a href="/vino"><S.DropdownListItem><S.DropdownItem>VINO</S.DropdownItem></S.DropdownListItem></a>
                                <a href="/whisky"><S.DropdownListItem><S.DropdownItem>WHISKY</S.DropdownItem></S.DropdownListItem></a>
                            </S.DropdownList>
                        </S.DropdownWrapper>
                    </li>
                    <li>
                        <a href="/ubicaciones">UBICACIONES</a>
                    </li>
                    <li>
                        <a style={{ color: "#f9dc22" }} href="/nosotros">¿Quienes somos?</a>
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
