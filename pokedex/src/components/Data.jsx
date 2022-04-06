import React, { useState } from "react";
import axios from 'axios';

function Data({ name, url }) {
// state
const [clicked, setClicked] = useState('');
// variables
const dataCard = '';
// functions
    const handleOnClick = () => {
        axios.get(url).then((res) => {
            console.log(clicked)
            setClicked(res.data)
        })
    }
    // if
    if(clicked === ''){
          dataCard = (
            <div>
                <a onClick={handleOnClick} href={url}>
                    <h5>{name}</h5>
                </a>
            </div>
          );
      };
  return(
      {dataCard}
  );
}

export default Data;
