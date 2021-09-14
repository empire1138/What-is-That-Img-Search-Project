import history from './history';
import axios from 'axios'
const API_URL = "http://localhost:3030/auth/"


// I have to change all of this to work with axios 
class Auth {



  resister = (firstName,lastName, email, password, confirmedPassword) => {
      return axios.post(API_URL + "register" , {
        firstName,
        lastName, 
        email,
        password,
        confirmedPassword
      });
  } 

  login = (email, password) =>{
    return axios.post(API_URL + "login", {
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

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if(authResult) {
        localStorage.setItem('access_token', authResult.accessToken)
        localStorage.setItem('id_token', authResult.idToken)

        let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
        localStorage.setItem('expiresAt', expiresAt)

        this.getProfile();
        setTimeout(() => { history.replace('/authcheck') }, 600);
      } else {
        console.log(err)
      }
    })
  }

  getAccessToken = () => {
    if(localStorage.getItem('access_token')) {
      const accessToken = localStorage.getItem('access_token')
      return accessToken
    } else {
      return null
    }
  }


  getProfile = () => {
    let accessToken = this.getAccessToken()
    if(accessToken) {
      this.auth0.client.userInfo(accessToken, (err, profile) => {
          if(profile) {
            this.userProfile = { profile }
          }
      } )
    }
  }


  logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expiresAt')
    setTimeout(() => { history.replace('/authcheck') }, 200);
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    return new Date().getTime() < expiresAt
  }

}export default new Auth(); 