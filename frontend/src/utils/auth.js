import history from './history';
import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import SearchDashBoard from '../Pages/SearchDashBoard/SearchDashBoard';

const API_URL = "http://localhost:3000/"


// I have to change all of this to work with axios 
export default class Auth {


  userInfo = {}


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

    return axios.post(API_URL + "auth/login", {

      email: email,
      password: password

    }).then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem('"accessToken', JSON.stringify(res.data.accessToken))
        let expiresAt = JSON.stringify((res.data.expiresIn * 1000 + new Date().getTime()));
        localStorage.setItem('expiresAt', expiresAt);
        console.log(expiresAt, 'expiresAt');
      }
      console.log(res.data, 'res.data')
      setTimeout(() => { history.replace('/SearchDashBoard') }, 600);

      return res.data;
    })

  }

  getAccessToken = () => {
    if (localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      return accessToken
    } else {
      return null
    }
  }

  getUserInfo = () => {
    let accessToken = this.getAccessToken();
    if (accessToken && localStorage.getItem('user')) {
      const userInfoProfile = localStorage.getItem('user');
      this.userInfo = { userInfoProfile };
    }
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