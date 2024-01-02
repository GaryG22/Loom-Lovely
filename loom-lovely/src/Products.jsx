import { useState } from "react"
import ViewProduct from "./Shop"
import { Link } from "react-router-dom"
import ProductsList from "./ProductsList"


function Products(){
    return(
        <div className = "section1">
            <img className = "clouds" src = "https://i.postimg.cc/Y0BXyncm/cloudssssss-Photo-Room.png"/>
            <h1 className = "products-title">Shop Our Handmade Bags</h1>
            <button className="shop-all">shop all</button>
            <div className = "product1">
                        <img className = "img1" src = "https://i.postimg.cc/g0Lhjn9w/IMG-9671-Photo-Room.png"/>
                <div className="bag-info">
                        <Link to = "Product">
                            <img className = "img2" src = "https://i.postimg.cc/HnDt0FDt/IMG-9674-Photo-Room.png" />
                        </Link>
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
            <img className = "img4" src = "https://i.postimg.cc/FHpbsM9K/IMG-9791-Photo-Room.png"/>
                <div className="bag-info">
                    <img className = "img2" src = "https://i.postimg.cc/PJdrxRft/IMG-9793-Photo-Room.png" />
                    <h1 className = "bag-title">Chunky shoulder Cloud Bag</h1>
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