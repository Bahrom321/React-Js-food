import axios from 'axios';
import React, { useState} from 'react';


const App = () => {  

    const [query, setQuery] = useState('')
    const [rcp, setRcp] =useState([])
    const [list, setlist] =useState('alcohol-free')
  
    const YOUR_APP_ID = 'e7d71f8f'
    const YOUR_APP_KEY ='852d0c3491e91b8c546cc86a5416e09e'
    const url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${list}`

  async function getRicipe() {
    const result = await axios.get(url)
    setRcp(result.data.hits)
    console.log(result.data)
  }

  const submitForm = e => {
    e.preventDefault();
    getRicipe();
  }

  return (
    <div className='header'>
    
        <div className='container'>
      
      <div>
        <div className='text'>
          <h1>Fastest Delivery On Eart</h1> 
        </div>
            <form className='form-1' onSubmit={submitForm}>
              <input type="text" placeholder='Search...' value={query} onChange={e => setQuery(e.target.value)}/>
              <button type="submit" className='button-1'>enter</button>
            </form>
        
        <div className='print row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {rcp.map((item,index) => {
            return(
              <div className='product card' key={index}>
                <img src={item['recipe']['image']} className="img-2"/>
                <p className='p'><span>name:</span>{item['recipe']['label']}</p>
                <div className='buttons'>
                  <p>{<a className='a-2' href={item['recipe']['url']}>Read</a>}</p>
                  <button className='button-2'>Order</button>
                </div>
              </div>
          )
        })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;
