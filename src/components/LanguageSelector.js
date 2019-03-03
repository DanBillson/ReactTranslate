import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = (props) => {
    const { setLanguage } = useContext(LanguageContext);
    return (
        <div>
            Select a language:
            <span
                role="img"
                aria-label="UK"
                onClick={() => setLanguage('english')}
                style={{ cursor: 'pointer' }}
            >
                🇬🇧
            </span>
            <span
                role="img"
                aria-label="JP"
                onClick={() => setLanguage('japanese')}
                style={{ cursor: 'pointer' }}
            >
                🇯🇵
            </span>
        </div>
    );
};

export default LanguageSelector;
