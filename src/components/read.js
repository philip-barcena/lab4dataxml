import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";
function Read(){
         //creating an array of books
       
        const [data,setDate] = useState([]);

        useEffect(
            ()=>{
                axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
                .then(
                    //getting http response back
                    (response)=>{
                        setDate(response.data.books)
                    }
                )
                .catch(
                    //catches an error in the console
                    (error)=>{
                        console.log(error);
                    }
                );
            },[]
        );
    
    return(
        <div>

        <h2>This is my Read in another component</h2>   {/*adds a header */}
        <Books myBooks={data}></Books>
    </div>
        );
}

export default Read;