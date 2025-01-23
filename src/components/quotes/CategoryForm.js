import React from "react";
import { Filter } from "react-feather"; 

function CategoryForm({ categories, category, handleCategory, handleCategoryChange }) {
    retun (
     <div className='category-form'>
        <form className='category-filter'>
         <label htmlFor='category'>Filter Quotes:</label>
         <select id='category' name='category'></select>
        </form>
     </div>
    )
}