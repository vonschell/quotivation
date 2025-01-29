import React from "react";

const Message = ({ messageText, removeMessage }) => {
    useEffect(() => {
        const messageTimeout = window.setTimeout(() => {
            removeMessage();
        }, 1500);

        return () => window.clearTimeout(messageTimeout);
    });

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