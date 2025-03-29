import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const magazines = [
  { id: 1, title: "The City of Embers", theme: "architecture", isAvailable: true },
  { id: 2, title: "Little Women", theme: "architecture", isAvailable: true },
  { id: 3, title: "Cat in the Hat", theme: "architecture", isAvailable: false },
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? "green" : "red"
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  published: "1960",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
  width: "264",
  height: "378"
};

function Bookshelf(){
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
    </div>
  );

}

function MagicButton(){
  return (
    <div>
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className='App-header'>
        <ZineRack />
        <br></br>
        <MagicButton />
        <br></br>
        <Bookshelf />
      </header>
    </div>
  
  );
}

export default App
