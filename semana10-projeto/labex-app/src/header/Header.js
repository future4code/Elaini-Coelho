import React from 'react';
import HeaderImg from '../img/header.png'
import { ImagemLogo } from '../styled/imagemLogo';
import { ConteinerHeader } from '../styled/ConteinerHeader';

export const Header = () => {
    return (
        <ConteinerHeader>
            <ImagemLogo src={HeaderImg} alt="Logo labeX" />
        </ConteinerHeader>
    )
}