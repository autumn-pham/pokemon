import React from 'react';
import '../App.css';
import PokeList from './PokeList';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <PokeList />
      </div>
    )
  }
};

export default App;
