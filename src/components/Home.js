import React,{useEffect} from "react";
import Food from "./Foods";
import { Table,Button } from "react-bootstrap";
import {Link,useNavigate} from "react-router-dom" 


const Home = () => {
    let history = useNavigate()
    function handleDelete(id){
        let index = Food.map(function(f){ return f.id}).indexOf(id)

        Food.splice(index,1)
        history('/')
    }
    
    
    function handleEdit(id,name,q){
        console.log("home",id)
        localStorage.setItem('ids',id)

        localStorage.setItem('name',name)
        localStorage.setItem('quantity',q)
    }
    return (
        <>
            <div className="table-responsive">
                <Table striped bordered hover sie="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Quantity
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Food && Food.length > 0 &&
                            Food.map((f)=>{
                                return (
                                    <tr>
                                        <td>{f.name}</td>
                                        <td>{f.q}</td>
                                        <td>
                                            <Link to={"/edit"}>
                                            <Button onClick={()=>handleEdit(f.id,f.name,f.q)}>Edit</Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Button onClick={()=>handleDelete(f.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                
                
            </div>
            <Link className="d-grid" to={"/create"}>
                <Button size="lg">Create</Button>
            </Link>
        </>
    )
}

export default Home