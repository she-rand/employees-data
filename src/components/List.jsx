const List = ({handleOnClick:handleOnClick,list:list,search:search} ) => {
    return(
           <>
            <table classNames="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Role</th>

                </tr>
                </thead>
                <tbody>
                
                { list.filter((elem)=> { 
                    if(elem.name.toLowerCase().includes(search.toString().toLowerCase())){
                    return elem
                    }
                    if(elem.age.toLowerCase().includes(search.toString().toLowerCase())){
                    return elem
                    }
                    if(elem.role.toLowerCase().includes(search.toString().toLowerCase())){
                    return elem
                    }
                    if(elem.email.toLowerCase().includes(search.toString().toLowerCase())){
                    return elem
                    }
                    if(elem.phone.toLowerCase().includes(search.toString().toLowerCase())){
                        return elem
                    }
                    
                }).map(({id,name,email,age,role,phone})=> (<tr><td>{id}</td><td>{name}</td><td>{email}</td><td>{age}</td><td>{role}</td><td>{phone}</td><td><button className='btn btn-danger m-1' onClick={()=>{handleOnClick(id)}}>Delete</button></td> </tr>)
                )}
                
                </tbody>
          </table>
        </>
    )
    }
    export default List;