import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useEffect, useState } from 'react';

function App(props) {
  const[data,setData]=useState([])
  const[editVal,setVal]=useState({})
  const[editStatus,setEditStatus]=useState(false)

  useEffect(()=>{
  
  },[])
  const formData=e=>{
    console.log(e)
  setData(e)
  }
  const editData=(val,editStatus)=>{
    setVal(val)
    setEditStatus(editStatus)
    }
  return (
    <div className="App">
    <Form  formData={formData} val={editVal} isEdit={editStatus}/>
    <Table  data={data} editData={editData}/>
    </div>
  );
}

export default App;
