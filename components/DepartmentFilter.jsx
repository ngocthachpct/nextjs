import * as Icon from 'react-feather';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import filterSearch from '../utils/filterSearch ';



export default function DepartmentFilter({ items }) {
  
   const departments = items.map(department => department.department_name)

   const [name, setName] = useState('')
  //const [department, setDepartment] = useState('')

   const router = useRouter()


  // const handleDepartment = (e) => {
  //   setDepartment(e.target.value)
  //   filterSearch({ router, department: e.target.value })
  // }

  useEffect(() => {
    filterSearch({ router, name: name  })
  }, [name])


  return (
    <div>
    <form>
      
      <div className="row">
        <div className="form-group col-md-12">
          <label htmlFor="inputName">Department Name</label>
          <input type="text" className="form-control" id="inputName" value={name.toLowerCase()} onChange={e => setName(e.target.value)}  />
        </div>
        
        {/* <div className="form-group col-md-4">
          <label htmlFor="inputDepartment">Location</label>
          <select id="inputDepartment" className="form-control" name="department" >
            <option select>All</option>
            {department_name.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div> */}
      </div>
      {/* <button className="btn-search" type="submit">
        <Icon.Search /> Search
      </button> */}
    </form>
    <div class="row align-items-start">
    <div className="col-xl-10 col-sm-8 col-12">
          <label className="employee_count">{departments.length} Departments</label>
          </div>
          <div className="col-xl-2 col-sm-2 col-12 ">
    <a href="/departmentDetail" className="btn-view">
      <Icon.List />Detail
    </a>
  </div>
  
        
        {/* <div class="col-xl-2 col-sm-2 col-12 ">
          <a href="#" class="btn-create "><Icon.Plus /> Add </a>
        </div> */}
    </div>
    </div>
    
  );
}
