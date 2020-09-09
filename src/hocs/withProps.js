import React from 'react';

export const withProps = Component => Props => {
    return (
        <Component {...Props} />
    );
};