
import React from "react";
import axios from 'axios';
import {useState, useEffect} from "react";
import {Container} from "@mui/material";
import Display from "./display";
import {useNavigate} from "react-router-dom";


const ProductsPages = ()=> {
        const [data, setData] = useState([])

    const navigate = useNavigate();

        useEffect(()=>{
        axios.get('https://raghav-d7441-default-rtdb.firebaseio.com/posts.json')
            .then(res => {
                const responseData = res.data;
                const result = []
                for (let key in responseData) {
                    const obj = {id: key, ...responseData[key]} //spread operator
                    result.push(obj);
                }
                setData(result);
                navigate('/Products')
                console.log(result);
            })
    }, [])

        return<>

        <Container>
            <h1> Get Api Call</h1>
            <h3> List Of Place: </h3>
            {data.map(data => {
                return (
                    <Display key={data.id} data={data} />

                )
            })}

        </Container>
    </>
};

export default ProductsPages;
