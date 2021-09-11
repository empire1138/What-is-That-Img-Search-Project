import React from 'react'
import FileSelector from '../../Components/fileSelectUpload/fileSelector';
import Navbar from '../../Components/NavBar/Navbar';
import ProgressBar from '../../Components/fileSelectProcessBar/progressBar';
import ImgPreview from '../../Components/fileSelectImagePreview/UploadPreview';
import AutoTags from '../../Components/GoogleVisionTags/autoTags';
import ConfirmedAlert from '../../Components/fileSelectConfirmed/confirmedAlert';
import ConfirmedList from '../../Components/fileSelectConfirmedList/confirmedList';
import './imgUpload.css'

function ImgUpload() {
    return (


        <div>
            <Navbar />
            <FileSelector />

            <ProgressBar />

            <div className='container-boxes'>
                <ImgPreview />
                <AutoTags />
            </div>

            <ConfirmedAlert/>
            <ConfirmedList/>
        </div>
    )
}

export default ImgUpload
