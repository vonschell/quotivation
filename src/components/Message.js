import React from "react";

const Message = ({ messageText, removeMessage }) => {
    return (
        <div className='message'>
            <p>{messageText}</p>

            <span className='close-message' onClick={removeMessage}>
                x
            </span>
        </div>
    );
};

export default Message;