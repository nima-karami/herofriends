import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '8100vhvh'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
