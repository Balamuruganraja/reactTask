import { useEffect, useState } from "react"
import '../form.css'
export default function Form(props) {
    const [data,setData]= useState([])
    const [obj,setObj]= useState({})
    const [err,setErr]=useState({Nameerr:"",Emailerr:"",numerr:""})

    useEffect(()=>{
        setObj(props.val)
        props.formData(data)
    },[props.val])

    const save=(e)=>{
        e.preventDefault()
        if(obj.Name&&obj.Email&&obj.num){
            if(props.isEdit){
                let val = data.map((e)=>{
                    if (e.id===props.val.id){
                    return obj
                    }else {return e}
                })
                setData(val)
                console.log(data)
            }
            else{
        let temp ={...obj,id:Date.now()}
        setData([...data,temp])
        
      }
      setObj({Name:"",Email:"",num:""})
        setErr({Nameerr:"",Emailerr:"",numerr:""})
    }else{
         setErr({Nameerr:!obj.Name ? "Name is Invaild":"",
         Emailerr:!obj.Email ? "Email is Invaild":"",
         numerr:!obj.num ? "Phone is Invaild":""})
      }
    }
    props.formData(data)

    const onInputChange=(e)=>{
        let id=e.target.id
        let value=e.target.value
        setObj({...obj,[id]:value})
    }
    
    return(
            <div className="marginTop">
            <form onSubmit={save} className="flex">
                <button type="submit" className=" ">Save</button><br/>
                <div>
                    <input id="Name" className={err.Nameerr&&"error"} value={obj.Name} type="text" onChange={onInputChange} placeholder="Name"  />
                    {err.Nameerr&&<p>{err.Nameerr}</p>}
                    </div>
                <div>
                    <input id="Email" className={err.Emailerr&&"error"}  value={obj.Email} type="email" onChange={onInputChange} placeholder="Email" />
                    {err.Emailerr&&<p>{err.Emailerr}</p>}
                    </div>
                <div>
                    <input id="num" className={err.numerr&&"error"} value={obj.num} type="number" onChange={onInputChange} placeholder="Number" />
                    {err.numerr&&<p>{err.numerr}</p>}
                    </div> 
                 </form>
            </div>
    )
}