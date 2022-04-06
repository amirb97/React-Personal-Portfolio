import React from "react";

function Footer() {
    return (
        <footer className="w-100 mt-auto p-4">
            <div className="container flex-row">
                <div className="col-4 text-center">
                    <a href="https://github.com/amirb97" target="_blank" className="btn btn-outline-light">Github</a>
                </div>
                <div className="col-4 text-center">
                    <a href="https://www.linkedin.com/in/amir-bahmani-ab790b21b/" target="_blank" className="btn btn-outline-light">LinkedIn</a>
                </div>
                <div className="col-4 text-center">
                    <a href="https://my.indeed.com/resume?hl=en&co=US&from=gnav-menu-homepage&_ga=2.138860467.1252526736.1649282605-584775759.1649282605" target="_blank" className="btn btn-outline-light">Indeed</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
