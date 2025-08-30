import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Signinoffcanvas() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

    return <>
         <button type="button" className="btn btn-danger" onClick={handleShow}>Sign in</button>

        <Offcanvas show={show} onHide={handleClose} placement='end' style={{ width: "600px" }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Sign in</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>


    </>
}
export default Signinoffcanvas