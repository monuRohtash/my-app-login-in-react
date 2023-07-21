import React from "react";
import {Link} from "react-router-dom";
// import {useSubmit} from "react-router-dom";


function Display(props) {
    function startDeleteHandler(id) {
     alert('Are you Sure Delete This Post!')
            fetch(`https://raghav-d7441-default-rtdb.firebaseio.com/posts/${id}.json`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
            })
        });
    }




    return <>
{/*<Container>*/}
        <div className="card mb-4    "  >
            <div className="row">
                <div className="col-md-4">
                    <img src={props.data.url} className="img-fluid rounded-start  img-thumbnail"  alt="Responsive image"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">

                        <h2 className="card-title col-md-8 ">{props.data.title}</h2>

                        <p className="card-text"></p>
                        <h4 className="card-text col-md-8 "><small className="text-muted">{props.data.description}</small></h4>

                        <div className=" gap-2 d-flex justify-content-end ">
                            <Link  to={`/Update/${props.data.id}`} type="button"  className="btn btn-outline-success">Update</Link>
                            <button type="button" onClick={()=>startDeleteHandler(props.data.id)} className="btn btn-outline-danger">Delete</button>
                        </div>


                    </div>



                </div>

            </div>

        </div>

{/*</Container>*/}



    </>
}
export default Display;
