import styles from './Description.module.css'
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.allrecipes.com/cook/3302316";
    let authorPhoto = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcam-image-store.accountservices.meredithcorp.io%2F20d1f45b1c925777b00addb4c0e6597d1e2019f2&w=320&h=320&c=sc&poi=face&q=60&orient=true";
    let authorName = "Sapphire Bang";

    return (
        <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
        <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Blog name</a> 
        </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
    <div> 
        <div>
            <h1>Recipe Title</h1>
            <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
    </div>
    }
}

export default RecipeDescription;