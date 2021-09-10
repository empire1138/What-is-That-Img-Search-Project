const express = require('express');
const logger = require("morgan");
require('dotenv').config();
const app = express();
const cors = require('cors');


const errorController = require('./controllers/error');
const registrationRoutes = require('./routes/registration');
const loginRoutes = require('./routes/login');
const searchDashBoardRoutes = require('./routes/searchDashBoard'); 
const imgUploadRoutes = require('./routes/imgUpload')
const logoutRoutes = require('./routes/logout'); 

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//Non-Protected Routes 
app.use('/', loginRoutes); 
app.use('/registration', registrationRoutes);
app.use(errorController.get404);
app.use(errorController.get500);
//Protected Routes 
app.use('/SearchDashBoard', searchDashBoardRoutes);
app.use('/ImgUpload', imgUploadRoutes); 
app.use('/logout', logoutRoutes); 

app.listen(port, () => console.log(`Demo app listening at http://localhost:${port}`));