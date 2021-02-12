import React from "react";
import Proptypes from "prop-types";

function Food({ name, pic, rating }) {
  return (
    <div>
      <h2> I like {name}</h2>
      <h4>{rating}</h4>
      <img src={pic} alt={name} />
    </div>);
}

// props 타입 체크
Food.propTypes = {
  name : Proptypes.string.isRequired,
  pic : Proptypes.string.isRequired,
  rating : Proptypes.bool
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EQfyKbJaFRSaXJvDxMr6mgHaHa%26pid%3DApi&f=1",
    rating: 5
  },
  {
    id: 2,
    name: "chicken",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.v27Sm6nmy6ThQkbYQ4dA6QHaEK%26pid%3DApi&f=1",
    rating: 6.7
  },
  {
    id: 3,
    name: "kimbob",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.QQXwqrPx-5Zu7KeG3RxkEwHaEK%26pid%3DApi&f=1",
    rating: 3.3
  }
];

function App() {
  return <div>
    <h1>hello !!</h1>
    {foodILike.map(food => <Food key={food.id} name={food.name} pic={food.image} rating={food.rating} />)}
  </div>

}

export default App;
