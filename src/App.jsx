import axios from "axios"
import { useEffect, useState } from "react"
import { THead } from "./components/THead"
import TBody from "./components/TBody"
import './index.scss'

function App() {
  const [datas, setDatas] = useState([])
  const [index, setIndex] = useState({
    first: 0,
    last:10
  })
  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
    .then((res) => {
      setDatas(res.data.posts)
      console.log(res.data.posts)
    })
  },[])
  
  

  return (
    <div className="scssClass">
      <table>
        <THead
        nomor="No"
        title="Title"
        desc="Description"/>
            
      <tbody>
        {
          datas.slice(index.first,index.last).map((data) => (
            <TBody
            key={data.id}
            id={data.id}
            title={data.title}
            desc={data.body}/>
          ))
        }
      </tbody>
    </table>
    <div className="pagination">
      <button onClick={() => {
        setIndex({
          first:0,
          last: 10
        })
      }}>1</button>
      <button onClick={() => {
        setIndex({
          first:10,
          last: 20
        })
      }}>2</button>
      <button onClick={() => {
        setIndex({
          first:20,
          last: 30
        })
      }}>3</button>
    </div>
    </div>
  )
}

export default App
