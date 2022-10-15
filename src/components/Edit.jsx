import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Food from "./Foods";
import { v4 as uuid } from "uuid"
import { Link, useNavigate } from "react-router-dom"

function Edit() {
    const [name1, setname1] = useState();
    const [quantity, setquantity] = useState(0)
    const [id, setid] = useState('')
    let index = Food.map(function (f) { return f.id }).indexOf(parseInt(id))
    let history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("here", id, localStorage.getItem('ids'), index, Food.map(function (f) { return f.id }).indexOf(parseInt(id)))
        let a = Food[index]
        console.log(Food[index])
        a.name = name1
        a.q = quantity
        history("/")
    }
    React.useEffect(() => {
        setid(localStorage.getItem('ids'))

        setname1(localStorage.getItem('name'))
        setquantity(localStorage.getItem('quantity'))
    }, [])

    return (
        <>
            <Form>
                <Form.Group className="mb-4" controlId="FormName">
                    <Form.Control value={name1} type="text" placeholder="Enter name" required onChange={(e) => setname1(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="FormQuantity">
                    <Form.Control value={quantity} type="number" placeholder="Enter Quantity" required onChange={(e) => setquantity(e.target.value)} />
                </Form.Group>
                <Button type="submit" onClick={(e) => handleSubmit(e)}>Update</Button>
            </Form>
        </>
    )
}

export default Edit