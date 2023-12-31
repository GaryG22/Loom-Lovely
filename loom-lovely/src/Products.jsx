import { useState } from "react"

function Products(){

    return(

        <div className = "section1">
            <img className = "clouds" src = "https://i.postimg.cc/Y0BXyncm/cloudssssss-Photo-Room.png"/>
            <h1 className = "products-title">The Beautiful Cloud Bag</h1>
            <div className = "product1">
            <img className = "img1" src = "https://i.postimg.cc/g0Lhjn9w/IMG-9671-Photo-Room.png"/>
                <div className="bag-info">
                    <img className = "img2" src = "https://i.postimg.cc/HnDt0FDt/IMG-9674-Photo-Room.png" />
                    <h1 className = "bag-title">Chunky Cloud Bag</h1>
                    <p className = "bag-description">This dummy text for the bag description which goes under the title.</p>
                    <h4 className = "reviews">(55)</h4>
                    <img className = "stars" src = "https://i.postimg.cc/KcRWpqrn/stars-Photo-Room.png" />
                    <h2 className = "price">$35.99</h2>
                    <button className = "addToCart">ADD TO CART</button>
                </div>
            </div>
            <div className = "product2">
            <img className = "img3" src = "https://i.postimg.cc/gJV58c9s/IMG-9736-Photo-Room.png"/>
                <div className="bag-info">
                    <img className = "img2" src = "https://i.postimg.cc/rw2rYq7x/IMG-9734-Photo-Room.png" />
                    <h1 className = "bag-title">Fluffy Cloud Bag</h1>
                    <p className = "bag-description">This dummy text for the bag description which goes under the title.</p>
                    <h4 className = "reviews">(62)</h4>
                    <img className = "stars" src = "https://i.postimg.cc/KcRWpqrn/stars-Photo-Room.png" />
                    <h2 className = "price">$35.99</h2>
                    <button className = "addToCart">ADD TO CART</button>
                </div>
            </div>
            <div className = "product3">
            <img className = "img4" src = "https://i.postimg.cc/W1G3HgPw/IMG-9715-Photo-Room-2.png"/>
                <div className="bag-info">
                    <img className = "img2" src = "https://i.postimg.cc/v8CLx3Jm/IMG-9717-Photo-Room.png" />
                    <h1 className = "bag-title">Mini Fluffy Cloud Bag</h1>
                    <p className = "bag-description">This dummy text for the bag description which goes under the title.</p>
                    <h4 className = "reviews">(43)</h4>
                    <img className = "stars" src = "https://i.postimg.cc/KcRWpqrn/stars-Photo-Room.png" />
                    <h2 className = "price">$35.99</h2>
                    <button className = "addToCart">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Products