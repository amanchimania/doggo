import { useEffect,useState } from "react";
// import {handlers} from "./mocks/handlers"
export default function App() {
  const [data,setData]=useState([])
  const [flag,setFlag]=useState(false)
  const [image,setImage]=useState('')
  const [breed,setBreed]=useState('')
  const [sub,setSub]=useState([])
  const [imagepath,setImagePath]=useState("")
  const [imagePathSub,setimagePathSub]=useState("")
  useEffect(()=>{
    // console.log(handlers[0].info.header)
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(res=>res.json())
    .then(data=>setData(data.message))
      // console.log(data.message)
  },[])
  const handleClick=(e)=>{
    console.log(e.target.value);
    setBreed(e.target.value)
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res=>res.json())
    .then(data=>setImagePath(data.message))
    let value=data[e.target.value]
    if(value.length>0){
      console.log("value is greater",e.target.value)
      setSub(value)
      setFlag(true)
    }
  }
  const handleSub=(e)=>{
    console.log(e.target.value)
    setImage(e.target.value)
    fetch(`https://dog.ceo/api/breed/${breed}/${image}/images/random`)
    .then(res=>res.json())
    .then(data=>setimagePathSub(data.message))
    // setImageUrl(e.target.value)
  }
  return (
    <div className="App">
	  <h1>hello world</h1>
    <select onClick={(e)=>{handleClick(e)}}>
    {Object.keys(data).map((data)=>(
      <option value={data} key={data} >{data}</option>
    )

    )}
    </select>
    {flag &&
    <select onClick={(e)=>handleSub(e)}>
      {sub.map((data)=>(
        <option key={data} value={data}>{data}</option>
      ))}
    </select>
     }
     <img src={imagepath}></img>
     <img src={imagePathSub}></img>

    </div>
  );
}

// url: "http://localhost:3000/GET%20https://dog.ceo/api/breeds/list/all"
