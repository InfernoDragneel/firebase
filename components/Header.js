import React, {useEffect, useState} from 'react';
import {Link, useLocation} from"react-router-dom";
import "./Header.css"
const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const location = useLocation();

    useEffect(() => {
        if(location.pathname ==="/"){
            setActiveTab("Home")
        }else if(location.pathname === "/add"){
            setActiveTab("AddContact");
        }else if(location.pathname === "/about"){
            setActiveTab("About");
        }
    },[location]);

  return (
        <div className='header'>
            
            <div className='header-right'>
                <Link to="/">
                    <p 
                     className={`${activeTab === "Home" ? "active":""}`}
                     onClick={()=> setActiveTab("Home")} 
                    >
                            Accueil
                    </p>
                </Link>
                <Link to="/add">
                    <p 
                     className={`${activeTab === "AddContact" ? "active":""}`}
                     onClick={()=> setActiveTab("AddContact")} 
                    >
                          Creer nouveau produit
                    </p>
                </Link>
                <Link to="/">
                    <p 
                     className={`${activeTab === "Deconnexion" ? "active":""}`}
                     onClick={()=> setActiveTab("Deconnexion")} 
                    >
                           Deconnexion
                           
                    </p>
                </Link>
            </div>
        </div>
  )
}

export default Header