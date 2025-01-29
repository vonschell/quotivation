import React from "react";

const Message = () => {
    return (
        <div className="message">
            <p>{messageText}</p>
            <span className="close-message">
                x
            </span>
        </div>
    );
};

export default Message;