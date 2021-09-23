const express = require('express');
const logger = require("morgan");
require('dotenv').config();
const app = express();
const cors = require('cors');
const multer = require('multer');
const mysql = require('mysql2/promise');

//.env port loaded file
require('dotenv').config();
const port = process.env.PORT;


const errorController = require('./controllers/error');
const loginRoutes = require('./routes/auth');
const searchDashBoardRoutes = require('./routes/searchDashBoard');
const imgUploadRoutes = require('./routes/imgUpload')
const logoutRoutes = require('./routes/logout');
const userProfileRoutes = require('./routes/userProfile');
const { urlencoded } = require('body-parser');

// app.use(cors({
//     origin: true,
//     methods: ["GET", "POST"],
//     credentials: true,
// }));
app.use(cors());


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().single('image'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Accept, X-Custom-Header, Authorization'
    );
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});


//Non-Protected Routes 
//This routes has both login and Sign-up
app.use('/auth', loginRoutes);


//Protected Routes 
app.use('/SearchDashBoard', searchDashBoardRoutes);
app.use('/ImgUpload', imgUploadRoutes);
app.use('/UserProfile', userProfileRoutes);
app.use('/logout', logoutRoutes);

// Error Catching Routes
app.use(errorController.get404);
app.use(errorController.get500);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));