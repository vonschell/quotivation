import React from "react";

function FavoriteQuoteCard({ quote }) {
    return (
        <li className="quote-card">
            <span className="close-quote">x</span>
            <h3>{quote.author}</h3>
            <p>{quote.author}</p>
        </li>
    );
}

export default FavoriteQuoteCard;