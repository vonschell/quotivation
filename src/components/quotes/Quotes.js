import React from "react";

function Quotes ({ quotes }) {
    return (
        <section className='all-quotes'>
            <div className='quotes wrapper'>
                {JSON.stringify(quotes)}
            </div>
        </section>
    );
}

export default Quotes;