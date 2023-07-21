import { Link } from 'react-router-dom';
import { useState } from "react";




const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    // const navigate=useNavigate();


    const ProceedLogin= (e) => {
        e.preventDefault();
        const credentials = {email: email, password: password}
        console.log(credentials)
        fetch('http://localhost:3000/api/v1/users/user_login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials)
        }).then((res)=>{
            return res.json();
            // navigate('')

        })
    };




    return(
    <>
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '30px' }}>
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h1>User Login</h1>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" required></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit"  className="btn btn-primary">Login</button>
                            <p className="form__hint">Don't have an account? <Link  to={'/login'}>Sign up</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}
export default Login;

