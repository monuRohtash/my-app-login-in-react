import {Link, useNavigate} from 'react-router-dom';

import {useState} from "react";




const PostForm = () => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState();
    const [image_url, setImage] = useState();

    const navigate = useNavigate();

    function submitPost(e) {
        e.preventDefault();
        const post = {title: title, description: description, url: image_url}
        console.log(post);
        fetch('https://raghav-d7441-default-rtdb.firebaseio.com/posts.json', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post),
        }).then((res) => {
            return res.json();
            alert('Are you Sure Create this Post!')
        })
        navigate('/Products')
    }

    return <>

        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{marginTop: '30px'}}>
                <form onSubmit={submitPost} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h1>Post</h1>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Title <span className="err msg">*</span></label>
                                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className="form-group">
                                <label>Description<span className="err msg">*</span></label>
                                <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className="form-group">
                                <label>Image_url<span className="">*</span></label>
                                <input type="url" value={image_url} onChange={e => setImage(e.target.value)} className="form-control"></input>
                            </div>
                        </div>

                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Submit</button> ||
                            <Link to={'/Products'} className="btn btn-danger" type="button" >Cancel</Link>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    </>
}


export default PostForm;
