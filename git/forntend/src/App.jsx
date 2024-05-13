import { useEffect, useState } from "react"
import axios from 'axios';


function App() {
 
const[users,setUsers]=useState([])
const [firstname,setfirstname]=useState('')
const [lastname,setlastname]=useState('')
const [email,setemail]=useState('')
const [password,setpassword]=useState('')



// useEffect(()=>{
//   fetch('http://localhost:3789/user')
//   .then( resp => resp.json())
//   .then (data =>setUsers(data))
// })



useEffect(()=>{
  axios.get('http://localhost:3789/user')
  // .then(data => console.log(data))
  .then(data => setUsers(data.data))
})
console.log(users,"users")
const handleClick = ()=>{
  axios.post('http://localhost:3789/user',{
    firstname : firstname,
    lastname : lastname,
    email :email,
    password : password
  })

}
  return (
    <>
    <h1>user list :</h1>
   {/* {
    users.map((item)=>( 
   <ul>
      <li>
      {item.firstname}
      </li>
    </ul>
    ))
   } */}



{
  users.map((items)=>(
    <ul>
      <li>
        {items.firstname}
      </li>
    </ul>
  ))
}
<div>
  <input onChange={(e)=>setfirstname(e.target.value)} type="text"  placeholder="firstname" /><br />
  <input  onChange={(e)=>setlastname(e.target.value)} type="text" placeholder="lastname" /><br />
  <input onChange={(e)=>setemail(e.target.value) }  type="email"  placeholder="email" /><br />
  <input  onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="password" /><br />
  <button onClick={handleClick}>SUBMIT</button>
</div>
    </>
  )
}

export default App
