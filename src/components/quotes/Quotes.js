import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

function Quotes({ quotes, categories, category }) {
    return (
        <section className='all-quotes'>
            <div className='quotes wrapper'>
                <div className='category-header'>
                <CategoryForm categories={categories} selectedCategory={category} />
                </div>
                {quotes.map((quote) => (
                    <QuoteCard key={quote.id} quote={quote} />
                ))}
            </div>
        </section>
    );
}

export default Quotes;