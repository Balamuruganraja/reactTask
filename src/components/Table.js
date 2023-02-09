import { useState } from 'react';
import '../table.css'
export default function Table(props) {
    let [selectedRow,setSelectedRow]=useState('')

   const handleSelect=(val)=>{
    props.editData(val,true)
setSelectedRow(val.id)
    }
    return ( 
        <div className='mrgTop flex'>
            <div className='buttonAlign' >
                <div className="dropdown">
    <button disabled={!props.data.length>0} className='' type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Edit
  </button>
   <ul className="dropdown-menu">
  {props.data.length>0?props.data.map((val)=><li key={val.id} className="dropdown-item" onClick={()=>handleSelect(val)} value={val.Name}>{val.Name}</li>):""}   
  </ul>
</div>
   </div>
            {props.data.length>0?
        <table className='center'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                {
                props.data&&props.data.map((e,i)=><tr  key={e.id}>
                    <td >{e.Name}</td>
                    <td >{e.Email}</td>
                    <td >{e.num}</td>
                </tr>)
                }
            </tbody>
        </table>
        :<h4>No Result Found</h4>}
        </div>
     );
}
