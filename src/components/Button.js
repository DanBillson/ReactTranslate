import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const Button = () => {
    const { language } = useContext(LanguageContext);
    const color = useContext(ColorContext);
    return (
            <button className={`ui button ${color}`}>
                {language === 'english' ? 'Submit' : '提出する'}
            </button>
    );
};

export default Button;
