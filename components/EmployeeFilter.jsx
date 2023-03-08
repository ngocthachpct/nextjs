import * as Icon from 'react-feather';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import filterSearch from '../utils/filterSearch ';


export default function EmployeeFilter({ items }) {
  const department_name = items.map(department => department.department_name)

  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')

  const router = useRouter()


  const handleDepartment = (e) => {
    setDepartment(e.target.value)
    filterSearch({ router, department: e.target.value })
  }

  useEffect(() => {
    filterSearch({ router, name: name  })
  }, [name])


  return (
    <form>
      
      <div className="row">
        <div className="form-group col-md-8">
          <label htmlFor="inputName">Employee Name</label>
          <input type="text" className="form-control" id="inputName" value={name.toLowerCase()} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputDepartment">Department</label>
          <select id="inputDepartment" className="form-control" name="department" value={department} onChange={handleDepartment}>
            <option select>All</option>
            {department_name.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* <button className="btn-search" type="submit">
        <Icon.Search /> Search
      </button> */}
    </form>
  );
}
