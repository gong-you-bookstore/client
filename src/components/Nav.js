import { useNavigate } from "react-router-dom"

const Nav = ()=>{
    const navigate = useNavigate();


    return (
        <nav className="navbar custom-navbar navbar-expand-md navbar-light fixed-top" data-spy="affix" data-offset-top="10">
        <div className="container">
            <a className="navbar-brand" onClick={()=>{navigate("/")}}>
                <h1 className="nav-link" >공 유 책 방</h1>
            </a>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">                     
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{navigate("/bookstore")}}>책방</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{navigate("/register")}}>등록</a>
                    </li>
                    
                    
                    <li className="nav-item">
                        <a href="#" className="nav-link"
                            onClick={()=>{navigate('/login')}}>login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav