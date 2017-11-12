import React from "react";

window.onscroll = function() {
    scrollFunction()
};

function ScrollUpButton() {
    return (
        <button
            aria-hidden
            className="scroll-up"
            onClick={topFunction}
            id="scrollUp"
        >
            ⮝
        </button>
    );
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollUp").style.display = "block";
    } else {
        document.getElementById("scrollUp").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
export default ScrollUpButton;