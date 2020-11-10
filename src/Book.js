import React from 'react'

const Book =(props) =>{
 
    console.log(props);

const{Author,Title,Image} = props;

const clickHandler =(prop)=>{
  alert(prop);
}
// const   author="James Grealish";
// const title= "Introduction to Python";
  return <article className='book' >
   <img src={Image} alt=""/>
   <h1>
{Author}
   </h1>

   <h4>{Title}</h4>
<button type='button' onClick={()=>{console.log(Title)}}>Reference Example</button>
<button type='button' onClick={()=>clickHandler(Author )}>Complex Example</button>
  </article>
}

export default Book
