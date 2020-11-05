import React, { useRef } from 'react';
import styled from '@emotion/styled';

const Slider = styled.div `
    position: absolute;
    width: 100%;
    height: 45%;
    top: 0;
    overflow: hidden;
    background-color: #1F2327; color: #FFF;
    transition: all 1s;

    &.close {
        top: 100%;
        height: 0;
    }
`;

const Close = styled.button `
    position: absolute;
    right: 2px;
    top: 0;
    background-image: url(https://i.e-planning.net/esb/4/1/3fb8/ea7d639f35554c9b/close.png);
    background-position: center;
    background-size: cover;
    width: 20px;
    height: 20px;
    border-radius: 10px;
`;

const Detail = props => {
    const ref = useRef();

    function toggleClose(){
        ref.current.classList.toggle('close')
    }
    return (
        <>
            <Slider className="slider close" ref={ref}>
                <Close onClick={toggleClose} />
                Detail
            </Slider>
        </>
    );
}

export default Detail;