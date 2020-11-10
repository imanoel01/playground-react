
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import {books} from './books'
import Book from './Book'

function BookList(){
return (

<section className='booklist'>
  {/* <h1>

  My official BookList
  </h1> */}
 

 {books.map((book)=>{
  //  console.log(book);
return (
  <Book key={book.id} {...book}></Book>
);
 })}
  
  
</section>
)

}







ReactDom.render(<BookList   />, document.getElementById('root'));