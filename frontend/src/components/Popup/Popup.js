import React, { useEffect, useState } from 'react';

function Popup(props) {
    const [status, setStatus] = useState(false);

    useEffect(() => {
        setStatus(props.isOpen);
    }, [props])

    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            setStatus(false);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEsc);

        return (() => document.removeEventListener('keydown', handleEsc));
    }, [])

    return (
        <section className={`popup popup_type_${props.name} ${status && 'popup_opened'}`}>
            {props.children}
        </section>
    );
}

export default Popup;