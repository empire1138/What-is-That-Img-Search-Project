
import React from 'react'
import Login from '../Pages/Login/Login';
import SearchDashBoard from '../Pages/SearchDashBoard/SearchDashBoard';
import ImgUpload from '../Pages/ImgUpload/ImgUpload';
import Registration from '../Pages/Registration/Registration';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';


const routes = [
    {
        path:'/',
        component: Login
    },
    {
        path:'/SearchDashBoard',
        component: SearchDashBoard
    },
    {
        path:'/ImgUpload',
        component: ImgUpload
    },
    {
        path:'/Registration',
        component:Registration
    },
    {
        path:'/*',
        component:PageNotFound
    },
]

export default routes;