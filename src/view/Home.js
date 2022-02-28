import React, { Component } from 'react'
import Shelf from '../components/Shelf'
import { getAll } from '../BooksAPI'

class Home extends Component{

  async componentDidMount(){

    try{

      const allBooks =await getAll()
      
      this.props.addingSomebooks(allBooks);
      
      
    }catch(error){

      console.log(error)
    }
  }
    
    render(){
        return(
            

            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <Shelf title='Currently Reading' allBooks={this.props.currentlyReading}moveBook={this.props.moveBook}/>
            <Shelf  title='Want To Read' allBooks={this.props.wantToRead}moveBook={this.props.moveBook}/>
            <Shelf title='Read' allBooks={this.props.read}moveBook={this.props.moveBook}/>
            </div>
            
             By AmirEzzat!
          </div>
              

              )
    }
}
export default Home