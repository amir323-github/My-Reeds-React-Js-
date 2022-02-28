import React, { Component } from 'react'
   export const myCont = React.createContext();

 class index extends Component{
     
    state={
            allBooks:[],
    currentlyReading:[],
    wantToRead:[],
    read:[],
    addingSomebooks:allBooks =>{

        const currentlyReading =allBooks.filter(book=>book.shelf==='currentlyReading');

        const wantToRead =allBooks.filter(book=>book.shelf==='wantToRead');

        const read =allBooks.filter(book=>book.shelf==='read');

        this.setState({allBooks,currentlyReading,wantToRead,read})

        },
        moveBook:(book,newShl,allShls)=>{

            const newBook=this.state.allBooks.map(alBooks=>{

                const idFound =allShls[newShl].find(

                    theBookId=>theBookId===alBooks.id
                );
                
                if( idFound )

                {alBooks.shelf = newShl} 

                return alBooks
            })
          
            
            this.state.addingSomebooks(newBook)
                
            
            
        }
        
       
        
    }
    
    render(){
        return(
            
           <myCont.Provider value={this.state}>
               {this.props.children}
           </myCont.Provider>
            
              

              )
    }
}
export default index