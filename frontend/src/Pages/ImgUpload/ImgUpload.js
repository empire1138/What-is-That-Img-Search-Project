import React from 'react'
import FileSelector from '../../Components/fileSelectUpload/fileSelector';
import Navbar from '../../Components/NavBar/Navbar';
import ProgressBar from '../../Components/fileSelectProcessBar/progressBar'; 

function ImgUpload() {
    return (

        
        <div>
            <Navbar/>
           <FileSelector/>

           <ProgressBar/>

            <div>
                return <img className="preview" />;
            </div>

            <div className="alert alert-secondary" role="alert">
                <ul>
                    <li>Message Alert </li>
                </ul>
            </div>


            <div className="card mt-3">
                <div className="card-header">List of Files</div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <p></p>
                        <img height="80px" alt='temp for now' />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ImgUpload
