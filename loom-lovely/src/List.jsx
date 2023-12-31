import { React, useState } from 'react'
import BagList from "./ProductsList"
import ProductsList from './ProductsList';

function List(props) {
    //create a new array by filtering the original array
    const filteredData = ProductsList.filter((el) => {
        //if no input the return the original
        if (props.input === "") {
            return "";
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}

export default List