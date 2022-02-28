import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from '../components/Book';

class Search extends Component{
  state={
      query:"",books:[]
    }
  
  handleTheChange= async e =>{

    try{

const query =e.target.value;

this.setState({query})



if(query.trim()){



const results = await search(query)




if (results.error ){

this.setState({books:[]})

}else{

    this.setState({books:results})


  
}

}
else{
  this.setState({books:[]})   


}


       }catch(error){

        console.log(error)
       }




  }
  
  
    render(){
        return( 
               
           <div className="search-books">
             <div className="search-books-bar">
               <Link className="close-search" to={"/"}>close</Link>
                  <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.handleTheChange} value={this.state.query}/>
                   </div>       
                  </div>
                  <div className="search=books-results">
                    <ol className="books-grid">
                      {this.state.books.length > 0 && this.state.books.map(book => < Book key={book.id} {...book} moveBook={this.props.moveBook}  /> )}
                      </ol>
                  </div>
                  </div>
               
                  
          )  
       }
    }  



export default Search