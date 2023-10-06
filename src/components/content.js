//functional component for the time//
function Content() {
    return(
        <div>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

}

export default Content;