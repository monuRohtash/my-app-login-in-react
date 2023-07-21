


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




function Signup(){
    const [email, emailUpdate] = useState("");
    const [password, passwordUpdate] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const signup = {email: email, password: password };
            console.log(signup);
            fetch("http://localhost:3000/api/v1/users/user_signup", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(signup)
            }).then((res) => {

                return res.json();
                // eslint-disable-next-line no-unreachable
                navigate('/login');
            })

        }


    return <>
        <div className="offset-lg-3 col-lg-6" style={{ marginTop: '30px' }}>
            <form className="container" onSubmit={handlesubmit} >
                <div className="card">
                    <div className="card-header">
                        <h1>User Registeration</h1>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            {/*<div className="col-lg-6">*/}
                                <div className="form-group">
                                    <label>Email <span className="errmsg">*</span></label>
                                    <input value={email} onChange={e => emailUpdate(e.target.value)} className="form-control" required></input>

                                {/*</div>*/}
                            </div>
                            {/*<div className="col-lg-6">*/}
                                <div className="form-group">
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input value={password} onChange={e => passwordUpdate(e.target.value)} type="password" className="form-control" required></input>
                                {/*</div>*/}
                            </div>


                        </div>

                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Sign up</button>    ||
                        <Link to={'/login'} className="btn btn-danger">Close</Link>
                    </div>
                </div>
            </form>
        </div>




    </>
}
export default Signup;
