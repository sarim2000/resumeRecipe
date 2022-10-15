import React,{useState} from "react";
import { Button,Form } from "react-bootstrap";
import Food from "./Foods";
import {v4 as uuid} from "uuid"
import {Link,useNavigate} from "react-router-dom"

function Add(){
    const [name, setname] = useState("");
    const [quantity, setquantity] = useState(0)
    let history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuid();
        let a = name, b = quantity;
        Food.push({id:id,name:a,q:b})
        history("/")
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-4" controlId="FormName">
                    <Form.Control type="text" placeholder="Enter name" required onChange={(e)=> setname(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="FormQuantity">
                    <Form.Control type="number" placeholder="Enter Quantity" required onChange={(e)=> setquantity(e.target.value)}/>
                </Form.Group>
                <Button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</Button>
            </Form>
        </>
    )
}

export default Add