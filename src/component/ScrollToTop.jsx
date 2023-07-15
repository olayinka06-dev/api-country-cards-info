import React, { useState } from 'react';
import { MdArrowUpward } from 'react-icons/md'
import styled from 'styled-components'

const ScrollToTop = () => {
    const [showArrow, setShowArrow] = useState(false);

    window.addEventListener("scroll", ()=>{
        if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
            setShowArrow(true)
        }
        else{
            setShowArrow(false)
        }
    })
    const handleScrollUp = () => {

       window.scrollTo({
        top: 0,
        behavior: 'smooth'
       })
    }
  return (
    <ScrollUp
     style={{visibility: `${showArrow ? "visible" : "hidden"}`, opacity: `${showArrow ? "1" : "0"}`}}
     onClick={handleScrollUp}><MdArrowUpward/></ScrollUp>
  )
}

const ScrollUp = styled.span`
    padding: 15px;
    position: fixed;
    bottom: 5%;
    right: 4%;
    animation: scroll-up 4s linear infinite;
    transition: all 1s ease;

    svg{
        color: var(--contentcolor);
        font-size: 20px;
    }

    @keyframes scroll-up {
        0%{
            transform: translateY(20px)
        }
        50%{
            transform: translateY(0px)
        }
        100%{
            transform: translateY(20px)
        }
    }
`;

export default ScrollToTop