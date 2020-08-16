import React from "react";

const codestyle = {
    lineHeight: "12px",
    padding: "4px",
    fontSize: "12px",
    backgroundColor: "rgba(178, 182, 230, 0.4)",
    color: "#383838",
    borderRadius: "4px"
};

const CodeMark = (props) => {
    console.log("hellos code")
    return (
        <code {...props.attributes} style={codestyle}>
            {props.children}
        </code>
    );
}

export default CodeMark;