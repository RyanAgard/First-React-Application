
// import { useEffect, useState } from "react";


// function Data() {
  
//     const [books,setbooks] = useState();
   
//    const GetBooks= async () =>{
//      const options = {
//        method: 'GET',
//        headers: {
//          'X-RapidAPI-Key': '42d4e978d4msh7aab92419f11332p1b4298jsn61b3cdd4ead9',
//          'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
//        }
//      };
   
//      fetch('https://hapi-books.p.rapidapi.com/nominees/romance/2020', options)
//        .then(response => response.json())
//        .then(response =>  setbooks(response))
//        .catch(err => console.error(err));
       
//      } 
//      useEffect(()=>{
//           GetBooks()
//       },[]);
   
//     console.log(books)
//     return(
//        <div>


//     </div>


//     )
// }

// export default Data;