
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Update () {
    const {id} = useParams();
    const [values, setValues] = useState({
        id: id,
        title: '',
        description: '',
        url: '',


    })
    useEffect(()=>{
        axios.get(`https://raghav-d7441-default-rtdb.firebaseio.com/posts/${id}.json`)
            .then(res => {
                setValues({...values, title: res.data.title, description: res.data.description, url: res.data.url})
            })
            .catch(err => console.log(err))
    },[])

    const navigate = useNavigate();


    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const data = {
            title: e.target[0].value,
            description: e.target[1].value,
            url: e.target[2].value
        }
        axios.put(`https://raghav-d7441-default-rtdb.firebaseio.com/posts/${id}.json`, data)
            .then(res => {
                navigate('/Products');
            })
            .catch(err => console.log(err))
    }


    return <>
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{marginTop: '30px'}}>
                <form  onSubmit={handlerSubmit} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h1>Update Post.</h1>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Title <span className="err msg">*</span></label>
                                <input type="text" value={values.title} onChange={e => setValues({...values, title: e.target.value})} className="form-control" required></input>
                            </div>
                            <div className="form-group">
                                <label>Description<span className="err msg">*</span></label>
                                <input type="text" value={values.description} onChange={e => setValues( {...values, description: e.target.value})} className="form-control" required></input>
                            </div>
                            <div className="form-group">
                                <label>Image_url<span className="">*</span></label>
                                <input type="url" value={values.url} onChange={e => setValues( {...values, url: e.target.value})} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Update</button> ||
                            <Link to={'/Products'} className="btn btn-danger" type="button" >Cancel</Link>
                        </div>

                    </div>

                </form>
            </div>

        </div>




    </>

}
export default Update;
