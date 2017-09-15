const express= require ('express'),
    bodyParser= require('body-parser'),
    cors= require('cors'),
    session= require('express-session'),
    auth_controller= require('./controllers/auth_controller');
    
const app = express();
    app.use(bodyParser.json());
    app.use(cors());

//middleware    
app.use(session({
    secret:'abcd',// uses this string of characters to encrypt the info from session
    resave: false, // ensures you don't have to re-login
    saveUninitialized: false, // if you've logged in before
}))

massive=require('massive');	
require('dotenv').config()

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)}

const port= process.env.PORT || 3005;


app.listen(port,()=>{
    console.log(`ship docked at port ${port}`)
})  

app.post('api/auth/login',auth_controller.login);
app.post('api/auth/register',auth_controller.register);
app.post('api/auth/logout',auth_controller.logout)
