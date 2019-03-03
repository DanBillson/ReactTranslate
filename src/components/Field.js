import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Field = props => {
    const { language } = useContext(LanguageContext);
    const text = language === 'english' ? 'Name' : '名';

    return (
        <div className="ui field">
            <label>{text}</label>
            <input type="text" />
        </div>
    );
};

export default Field;
