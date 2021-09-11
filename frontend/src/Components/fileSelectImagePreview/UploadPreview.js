import React from 'react'
import './uploadPreview.css';

function UploadPreview() {
    return (
        <div>
            <div class="container-img-preview">
                <div class="img-preview">
                    <div class="image">
                        <img src="" alt=""/>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <i class="fas fa-cloud-upload-alt"></i>
                        </div>
                        <div class="text">
                            No file chosen, yet!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPreview
