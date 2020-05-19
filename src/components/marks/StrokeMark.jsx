import React, { Component } from "react";

const StrokeMark = (props) => {
    return (
        <del>
            {props.children}
        </del>
    );
}

export default StrokeMark;