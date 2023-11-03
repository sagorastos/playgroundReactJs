import React from "react";
import { Button } from "react-bootstrap";

function ChildComponent(props) {
    return(
        <div>
            <Button variant="primary" onClick={() => props.greetHandler('child')}>Greet Parent</Button>
        </div>
    )
}

export default ChildComponent