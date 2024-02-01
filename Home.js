import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';


const Home=(props)=>{
    const [user,setUser]=useState()

    const data = useParams()

    console.log(data)
    console.log(user)

    useEffect(()=>{
        setUser(data.data)
    },[])

// export default function Home() {
  return (
    <div >
      {/* <h1>Welcome {user}</h1> */}
      <Header/>
    </div>    
  )
}

export default Home
