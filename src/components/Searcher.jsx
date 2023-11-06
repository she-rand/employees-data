const Searcher = ({onChange:onChange} ) => {
    return(
            <div className="filterStyle">
               
                <input className="m-2" name="filtrar" placeholder="Search an employee" onChange={onChange}></input>
            </div>
    )
    }
    export default Searcher;