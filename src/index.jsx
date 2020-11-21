import React from 'react';
import { render } from 'react-dom';
import { Joke } from './Joke/index.jsx';
import { jokes } from './jokes.js';
import './index.html';
import './styles.css';

const App = () => (
  <div className="container">
    {jokes.map((joke) => (
      <Joke
        key={joke.id}
        userId={joke.id}
        userName={joke.name}
        text={joke.text}
        likes={joke.likes}
        dislikes={joke.dislikes}
      />
    ))}
  </div>
);

render(<App />, document.querySelector('#app'));
