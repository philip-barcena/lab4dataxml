import { useState } from "react";

function Create() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    /* ADDING FORM LABELS TO ADD BOOK TITLE,AUTHOR AND BOOK URL */

    const handleSumbit = (e)=>{
        e.preventDefault();

        console.log("Title: "+title+
                    " Author: "+author+
                    " Cover: "+cover);
    }
    return (
        <div>
            <h2>Hello from create Component</h2>
            <form onSubmit={handleSumbit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div>
                    <label>Add Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                <div>
                    <label>Add Url: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                <div class="form-example">
                    <input type="submit" value="Add Book!" />
                </div>
            </form>
        </div>





    );

}
export default Create;