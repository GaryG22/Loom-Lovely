import { useState } from "react"
import List from "./List"

function Home(){

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    
    return (

        <div className = "home-container">
             <div className = "input-container">
                <input className = "input-text"
                  onChange={inputHandler}
                  placeholder="search"
                />
                  <List input={inputText} />
            </div>
            <h1 className = "home-title">Today is a Beautiful Day!</h1>
            <p className = "home-p">this will be dummy text for the description and grabber of the bag. shoppers will have a general undertsanding of what is being sold.</p>
            <img className = "bagImg" src = "https://i.postimg.cc/50PBH6YY/IMG-9671-Photo-Room-4-Photo-Room-4.png"/>
        </div>
        
    )
}

export default Home