import history from './history';
import axios from 'axios'
const API_URL = "http://localhost:3000/"


// I have to change all of this to work with axios 
export default class Auth {

 

  register = (firstName, lastName, email, password, confirmedPassword) => {
    return axios.post(API_URL + "auth/registration", {
      firstName,
      lastName,
      email,
      password,
      confirmedPassword
    });
  }

  login = async ({ email, password }) => {
    console.log(email, password, 'email password')

    return axios.post(API_URL +"auth/login", {
      
        email: email,
        password: password
      
    }).then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem('"accessToken', JSON.stringify(res.data.accessToken))
        let expiresAt = JSON.stringify((res.data.expiresIn * 1000 + new Date().getTime()));
        localStorage.setItem('expiresAt', expiresAt);
        console.log( expiresAt ,'expiresAt');
      }
      console.log(res.data, 'res.data')
      setTimeout(() => { history.replace('/SearchDashBoard') }, 600);
      
      return res.data;
    })
   
  }

  logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('accessToken');
    setTimeout(() => { history.replace('/auth/login') }, 200);
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    return new Date().getTime() < expiresAt
  }

}