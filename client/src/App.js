import React, { Component }from 'react';
import './App.css';

import Customer from './Components/Customer';

const customerdata = [
  {
    'id':1,
    'image':"https://placeimg.com/64/64/1",
    'name':'sehoon',
    'birthday':'940424',
    'gender':'male',
    'job':'student'
  },
  {
    'id':2,
    'image':"https://placeimg.com/64/64/2",
    'name':'binhee',
    'birthday':'950110',
    'gender':'female',
    'job':'student'
  },
  {
    'id':3,
    'image':"https://placeimg.com/64/64/3",
    'name':'john',
    'birthday':'970424',
    'gender':'male',
    'job':'student'
  },
]
class App extends Component{
  render(){
    return (
      <div>
        {
          customerdata.map(c=> {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
