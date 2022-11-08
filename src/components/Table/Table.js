import "../Table/Table.css"
const Table = () => {
    const datas = JSON.parse(localStorage.getItem("values"));
    console.log(datas)

    return(
        <div>
            <table border="1" className="table">
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Country</th>
                            <th>Date of Birth</th>
                            <th>Short Description</th>
                        </tr>
                        {
                            datas.map((data) => (
                                <tr>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.email}</td>
                                <td>{data.gender}</td>
                                <td>{data.country}</td>
                                <td>{data.dob}</td>
                                <td>{data.description}</td>
                            </tr>
                            ))
                        }
                      
                    </table>
                   
            
        </div>
    )
}

export default Table;
