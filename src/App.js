import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import Home from './view/Home'
import Search from'./view/Search'
import {Route} from 'react-router-dom'
import Provider ,{myCont } from './prov/index'


class BooksApp extends Component {
  
  render() {
    return (
      <div>
        <Provider>
        
        <Route exact  path='/' render={()=>(
          <myCont.Consumer>
          {context=><Home{...context}/>}
          </myCont.Consumer>
          
          )}
        
      />
        <Route exact  path='/search' render={()=>(
          <myCont.Consumer>
          {context=><Search{...context}/>}
          </myCont.Consumer>
          
          )}
        
      />
        <div className="open-search">
                
                <Link to={"/search"}><button>Add a book</button> </Link>
                
             </div>
        </Provider>
        
      
        </div>
         
      
    )
  }
}

export default BooksApp
