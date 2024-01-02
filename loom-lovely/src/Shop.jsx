import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";


function Shop (){

    return (

        ProductsList.map(item => {
            for(i = 0; i > item; i ++)

            return (
                <div key = {item.id} className="single-product">
                    <h1>{item.name}</h1>
                </div>
            )
    
        })
    )
   

}


export default Shop