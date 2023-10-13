import Card from 'react-bootstrap/Card';

function BookItem(props){
    return (

        //bootstrap code for the card//
        <Card>
          <Card.Header>{props.thisBook.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={props.thisBook.thumbnailUrl}></img>
              <footer>
                <p>{props.thisBook.isbn}</p> <cite>{props.thisBook.authors}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      );
    }

export default BookItem;