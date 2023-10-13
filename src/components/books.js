import BookItem from "./bookItem";

function Books(props){
    //adding the books into a map//
    return props.myBooks.map(
        (book)=>{
            return <BookItem thisBook={book} key={book.isbn}></BookItem>
        }   

    );
}
export default Books;