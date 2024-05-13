const express =require('express');
var cors = require('cors')
const app = express();
const port =3789;

app.use(cors())
app.use(express.json())

const user =[
    {
        firstname : 'apurba',
        lastname : 'das',
        email :'apurbadasourav@gmail.com'

    },
    {
        firstname : 'tomal',
        lastname : 'das',
        email :'tomal@gmail.com'

    },
    {
        firstname : 'simanto',
        lastname : 'das',
        email :'simanto@gmail.com'

    },
    {
        firstname : 'bilash',
        lastname : 'das',
        email :'abilash@gmail.com'

    },
]

app.get('/',(req,res)=>{
    res.send('it is landing page')
})
app.get('/user',(req,res)=>{
    res.send(user)
})
app.post('/user',(req,res)=>{
    console.log(req.body)
    const newuser = req.body
    user.push(newuser)
})
app.listen(port,()=>{
    console.log(`this ${port} is ok`)
})
