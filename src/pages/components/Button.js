import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button class="button is-outlined is-large is-responsive google-font-pd m-4"><strong>{props.name}</strong></button>
        </div>
    );
};

export default Button;