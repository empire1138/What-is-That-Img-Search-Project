import React from 'react'
import './fileSelector.css';

function fileSelector() {
    return (
        <div className='container'>
            <div className="file-upload">
                <div className="file-select">
                    <label className="file-select-choice-btn">
                        <input className='file-field' type="file" multiple accept="image/*" />
                    </label>
                </div>

                <div className="file-select-btn">
                    <button
                        className="btn-success"
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
    )
}

export default fileSelector
