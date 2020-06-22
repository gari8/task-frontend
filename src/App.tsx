import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import CardDetail from './pages/card_detail'
import CardIndex from './pages/card_index'
import * as users from './data/users.json'

function App() {
  const [num, setNum] = useState(0);
  let item = users.users[num] 
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <li><Link to='/' >Home</Link></li>
        </header>
        <Route exact path='/' render={() => <CardIndex datasets={users.users} num={num} setNum={setNum} />} />
        <Route path='/card' render={() => <CardDetail id={item.id} name={item.name} age={item.age} affinity={item.affinity} description={item.description} url={item.url} />} />
      </Router>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-decoration: none;
          list-style: none;
        }
      `}</style>
    </div>
  );
}

export default App;

export type Data = {
  id: number,
  name: string,
  age: number,
  affinity: number,
  description: string,
  url: string
}
