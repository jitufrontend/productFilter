// import { useState } from "react";
// import viratImage from './assets/virat.jpg';

import React, { useState } from "react";
import {datas} from "./utils/dummydata"
import Card from "./Card";

const App = () => {
  let [data,setData] = useState(datas);
  function sortArray(){
    
    let sortedPrice =  [...data].sort((a,b)=> a.price-b.price);
    
    setData(sortedPrice)

  }
  function above500(){
    let abovefive = datas.filter((value)=> value.price >=500);
    setData(abovefive)
  }
  function defaultData(){
    setData(datas)
  }
  function reversArray(){
    let reverseData = [...data].sort((a,b)=> b.price-a.price);
    setData(reverseData);
  }
  function toprated(){
    let filterTopRating = datas.filter((value)=> value.rating.rate >= 4.5).sort((a,b)=> b.rating.rate - a.rating.rate);
    setData(filterTopRating)

  }
  return (
    <>
    <div>
    <button onClick={sortArray} className="bg-amber-700 cursor-pointer w-50 text-white rounded-4xl m-4">Price -- Low to High</button>
    <button onClick={reversArray} className="bg-emerald-600 cursor-pointer w-50 text-white rounded-4xl m-4">Price -- High to Low</button>

    <button onClick={above500} className="bg-amber-700 cursor-pointer w-50 text-white rounded-4xl m-4">price above 500</button>
    <button onClick={defaultData}  className="bg-rose-400 cursor-pointer w-50 text-white rounded-4xl m-4">defaultData</button>
  
    <button onClick={toprated}  className="bg-fuchsia-400 cursor-pointer w-50 text-white rounded-4xl m-4">Top Rated</button>

    </div>
     {
      data.map((value)=> <Card key={value.id} description={value.description} images={value.image} prices={value.price} ratings = {value.rating.rate}/>)
     }
    </>
  )
}

export default App



// const Card = () => {
//   const [hasLiked, setHasLiked] = useState(false);
//   const [count, setCount] = useState(0);

//   const handlerClick = () => {
//     setHasLiked(!hasLiked);
  
    
//     setCount((prevCount) => {
//       return hasLiked ? prevCount - 1 : prevCount + 1;
//     });  };

//   return (
//     <>
//       <button onClick={handlerClick}>
//         {hasLiked ? "❤️" : "💙"} {count}
//       </button>
//       <h1>Hello World</h1>
//       <img src={viratImage} alt="" />
//     </>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <Card />
//       <Card />
//     </>
//   );
// };

// import React from "react";

// export default class App extends React.Component{
//   render(){
//     return <h1>Hello brother</h1>
//   }
// }



// import React from "react";

// export default class Main extends React.Component{
//   render(){
//     return(
//       <>
//         <h1>Hello</h1>
//       </>
//     )
//   }
// }
