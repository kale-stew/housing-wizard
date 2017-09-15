const users ='../models/users.js';

let id= 1;
module.exports = {
    login: (req,res, next ) =>{
                const {session}= req;
                const {username,password} =req.body
                req.app.get('db').userSignIn([username,password]).then((user)=>{
                   user = user[0]
                if(user){
                        session.user.id = user.id;
                        session.user.username = user.username;
                        res.status(200).send(session.user);
                         
                }else{
                         res.status(500).send('Please Register.');
                        }    
    })},

    register: (req,res,next)=>{
        const {session}= req;
        const {username, password} =req.body;
        user.push({
            id,
            username,
            password
        })
        id++

        session.user.username=username;

        res.status(200).send(session.user);
    },

    
    logout:(req,res,next)=>{
        const {session} = req
        session.destroy()
        res.status(200).send(req.session)
    },
}
