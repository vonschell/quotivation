import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

function FavoriteQuotes({ favoriteQuotes, maxFaves, removeFromFavorites }) {
    const removeFromFavoriteAmount = maxFaves - favoriteQuotes.length;
    return (
        <section className='favorite-quotes'>
            <div className='wrapper quotes'>
                <h3>Top 3 favorite quotes</h3>
                {favoriteQuotes.length > 0 && (
                    <ul>
                        {favoriteQuotes.map((quote) => (
                            <FavoriteQuoteCard key={quote.id} quote={quote} removeFromFavorites={removeFromFavorites} />
                        ))}
                    </ul>
                )}

                <div className='favorite-quotes-description'>
                    <p>
                        You can add up to three favorites by selecting from the options below.
                        <br />
                        Once you choose, it will appear here.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FavoriteQuotes;