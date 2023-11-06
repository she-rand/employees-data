import { useState } from 'react'

import {BaseEmployees} from './components/Employees';
import './App.css'
import Searcher from './components/Searcher';
import Form from './components/Form';
import List from './components/List';
import Alert from './components/Alert';

function App() {
  const [list, setList]=useState(BaseEmployees);
  const [name, setName]=useState("");
  const [role, setRole]=useState("");
  const [age, setAge]=useState("");
  const [email, setEmail]=useState("");
  const [phone, setPhone]=useState("");
  const [search, setSearch]=useState("");
  const [alertMessage, setAlertMessage]=useState("");
  const [alertColor, setAlertColor]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!name.trim()||!role.trim()||!age.trim()||!email.trim()||!phone.trim()){
        setAlertMessage("Complete all the fields")
        setAlertColor("text-danger")
        return
    }else{
        setAlertMessage("Employee succesfully added!")
        setAlertColor("text-success")
    }
    const newEmployee={
      id:Date.now(),
      name:name,
      email:email,
      age:age,
      role:role,
      phone:phone
    };
    setList([...list,newEmployee]);
  
  }

  const handleOnChangeName=(e)=>{
    setName(e.target.value);
    console.log(e.target.value)
   };
   
   const handleOnChangeEmail=(e)=>{
     setEmail(e.target.value);
     console.log(e.target.value)
    };

    const handleOnChangeRole=(e)=>{
      setRole(e.target.value);
      console.log(e.target.value)
     };

     const handleOnChangeAge=(e)=>{
      setAge(e.target.value);
      console.log(e.target.value)
     };
     const handleOnChangePhone=(e)=>{
      setPhone(e.target.value);
      console.log(e.target.value)
     };
   
    const handleFilter=(e)=>{
     setSearch(e.target.value)
     console.log(search)
   
    };
   
    const handleDelete=(id)=>{
     const filtered=list.filter((elem)=>  elem.id!==id )
     setList(filtered)
     console.log(filtered)
     console.log(id)
    };
   

  return (
    <>
    <div className='container'>
     
      <div className='searcherSection'>
        <Searcher onChange={handleFilter}/>
        <h2>Employees list</h2>
        <List list={list} search={search} handleOnClick={handleDelete}></List>
      </div>
      <div className='addEmployeeSection'>
       
       <Form onSubmit={handleSubmit} onChangeEmail={handleOnChangeEmail} onChangeName={handleOnChangeName} onChangePhone={handleOnChangePhone} onChangeAge={handleOnChangeAge} onChangeRole={handleOnChangeRole}/>
       <Alert alertMessage={alertMessage} alertColor={alertColor}></Alert>
     </div>
       
    </div>
       
        
    </>
  )
}

export default App
