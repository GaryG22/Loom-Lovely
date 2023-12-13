import { useState } from "react"

function Products(){

    return(

        <div className = "section1">
            <img className = "clouds" src = "https://i.postimg.cc/Y0BXyncm/cloudssssss-Photo-Room.png"/>
            <h1 className = "products-title">The Beautiful Cloud Bag </h1>
            <div className = "product1">
                <img className = "img1" src = "" />
                <h1 className = "bag-title">The Rain Cloud</h1>
                <p className = "bag-description">This dummy text for the bag description which goes under the title.</p>
                <h4 className = "reviews">(55)</h4>
                <img className = "stars" src = "https://i.postimg.cc/KcRWpqrn/stars-Photo-Room.png" />
                <h2 className = "price">$35.99</h2>
                <button className = "addToCart">ADD TO CART</button>
            </div>
            <div className = "product2">
            <img className = "img1" src = "" />
                <h1 className = "bag-title">The Rain Cloud</h1>
                <p className = "bag-description">This dummy text for the bag description which goes under the title.</p>
                <h4 className = "reviews">(62)</h4>
                <img className = "stars" src = "https://i.postimg.cc/KcRWpqrn/stars-Photo-Room.png" />
                <h2 className = "price">$35.99</h2>
                <button className = "addToCart">ADD TO CART</button>
            </div>
            <div className = "product3">
            <img className = "img1" src = "" />
                <h1 className = "bag-title">The Rain Cloud</h1>
                <p className = "bag-description">This dummy text for the bag description which goes under the title.</p>
                <h4 className = "reviews">(43)</h4>
                <img className = "stars" src = "https://i.postimg.cc/KcRWpqrn/stars-Photo-Room.png" />
                <h2 className = "price">$35.99</h2>
                <button className = "addToCart">ADD TO CART</button>
            </div>
        </div>
    )
}

export default Products