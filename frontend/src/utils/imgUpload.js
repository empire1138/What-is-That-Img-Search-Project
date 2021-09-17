import history from './history';
import axios from 'axios'
const API_URL = "http://localhost:3306"



class UploadProcess {

    upload = (file, onUploadProgress) => {
        let formData = new FormData();

        formData.append("file", file);

        return axios.post('/ImgUpload', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        })
    }

    getAllFiles = () => {
        return axios.get("/ImgUpload/allImages")
    }

    getFilesBySearch =(searchQuery) => {
        return axios.get(`/ImgUpload/BySearch:${searchQuery}` , searchQuery)
    }

    getFile = (id) => {

    }

}

export default UploadProcess;