import { Link,Routes,Route } from "react-router-dom";
import Bestseller from "./components/Bestseller";
import Blog from "./components/Blog";
import Contact from"./components/Contact";
import Home from"./components/Home";
import { useEffect, useState } from "react";



function App() {
  
 const [books,setbooks] = useState();

const GetBooks= async () =>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '42d4e978d4msh7aab92419f11332p1b4298jsn61b3cdd4ead9',
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
  };
  
  fetch('https://hapi-books.p.rapidapi.com/nominees/romance/2020', options)
    .then(response => response.json())
    .then(response =>  setbooks(response))
    .catch(err => console.error(err));
    
   
  
  } 
  useEffect(()=>{
       GetBooks()
   },[]);

 
console.log(books)
  return (

    <>
   <div className = 'navbar'>
     
      
        <Link to ="/"><div>Home</div></Link>
   
      
        <Link to ="/Bestseller"><div>BestSeller</div></Link>
      
      
        <Link to ="/Blog"><div>Blog</div></Link>
      
      
        <Link to ="/Contact"><div>Contact</div></Link>
      
    
   </div>

      <Routes >
           <Route path = "/" element ={<Home />} />  
           <Route path = "/Bestseller" element ={<Bestseller/>} />
           <Route path = "/Blog" element ={<Blog />} />
           <Route path = "/Contact" element ={<Contact/>} />
      </Routes>
    
    </>
  );
}

export default App;
