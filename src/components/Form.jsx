const Form = ({onSubmit:onSubmit,onChangeName:onChangeName,onChangeEmail:onChangeEmail,onChangeAge:onChangeAge,onChangeRole:onChangeRole,onChangePhone:onChangePhone} ) => {
    return(
        <>
        <h1>Add an Employee</h1>
        <form className="formStyle m-3" onSubmit={onSubmit}>
          <label for="nameId">Name</label>
        <input id="nameId"  name="nombre" onChange={onChangeName} placeholder="Employee name"></input>
        <label for="emailId">Email</label>
        <input id="emailId"  name="email" onChange={onChangeEmail} placeholder="Employee email"></input>
        <label for="ageId">Age</label>
        <input id="ageId"  name="age" onChange={onChangeAge} placeholder="Employee age"></input>
        <label for="roleId">Role</label>
        <input id="roleId"  name="role" onChange={onChangeRole} placeholder="Employee role"></input>
        <label for="phoneId">Phone</label>
        <input id="phoneId"  name="phone" onChange={onChangePhone} placeholder="Employee phone"></input>
        
        <button className="btn btn-info m-1">Add Employee</button>
      </form>
        </>
        
    )
    }
    export default Form;