import history from './history';
import axios from 'axios'
const API_URL = "http://localhost:3306"


// I have to change all of this to work with axios 
class Auth {



  resister = (firstName,lastName, email, password, confirmedPassword) => {
      return axios.post(API_URL + "/Registration" , {
        firstName,
        lastName, 
        email,
        password,
        confirmedPassword
      });
  } 

  login = (email, password) =>{
    return axios.post(API_URL, + "/login", {
      email, 
      password
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data)); 
        let expiresAt = JSON.stringify((res.data.expiresIn * 1000 + new Date().getTime()))
        localStorage.setItem('expiresAt', expiresAt)
      }
      return res.data; 
    })
  }

  logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem('expiresAt')
    setTimeout(() => { history.replace('/authcheck') }, 200);
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    return new Date().getTime() < expiresAt
  }

}export default new Auth(); 