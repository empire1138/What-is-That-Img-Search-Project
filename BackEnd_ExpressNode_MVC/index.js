const express = require('express');
const logger = require("morgan");
require('dotenv').config();
const app = express();
const cors = require('cors');
const multer = require('multer');


const errorController = require('./controllers/error');
const loginRoutes = require('./routes/login');
const searchDashBoardRoutes = require('./routes/searchDashBoard');
const imgUploadRoutes = require('./routes/imgUpload')
const logoutRoutes = require('./routes/logout');

app.use(cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
}));


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
app.use('/', loginRoutes);
app.use(errorController.get404);
app.use(errorController.get500);

//Protected Routes 
app.use('/SearchDashBoard', searchDashBoardRoutes);
app.use('/ImgUpload', imgUploadRoutes);
app.use('/logout', logoutRoutes);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));