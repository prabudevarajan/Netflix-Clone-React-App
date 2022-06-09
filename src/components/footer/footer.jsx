import React from "react";
import './footer.css';


function Footer(){
    return(
        <div className="footer">
        <div className="container">
            
            <h6 className="mt-3 mb-3"> Questions? Call 000-000-000-0000</h6>
            <div className="row mt-3 mb-3">
                <div className="col-lg-3 col-md-6 col-12">
                    <ul>
                        <li>FAQ </li>
                        <li>Help Centre</li>
                        <li>Account</li>
                        <li>Media Centre</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <ul> 
                        <li>Investor</li>
                        <li>Relations</li>
                        <li>Jobs</li>
                        <li>Ways to Watch</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <ul>
                        <li>Terms of Use </li>
                        <li>Privacy</li>
                        <li>Cookie</li>
                        <li>Preferences</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <ul>
                        <li>Corporate Information</li>
                        <li>Legal Notices</li>
                        <li>Speed Test</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;