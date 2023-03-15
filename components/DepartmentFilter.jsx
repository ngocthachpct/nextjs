import * as Icon from 'react-feather';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import filterSearch from '../utils/filterSearch ';



export default function DepartmentFilter({ allName, byName }) {
  const department_name = allName?.map(department => ({ department_id: department?.department_id, department_name: department?.department_name })) || []
  const departmentByName = byName.map(department => department.department_name)

  //const [name, setName] = useState('')
  const [department, setDepartment] = useState('')

  const router = useRouter()


  const handleDepartment = (e) => {
    setDepartment(e.target.value)
    filterSearch({ router, department: e.target.value })
  }


  return (
    <div>
      <div className="row h-100 align-items-center">
        <div className="col-xl-4 col-sm-10 col-12">
          <label className="employee_count">{departmentByName.length} Departments</label>
        </div>
        <div className="col-xl-6 col-sm-10 col-12 align-middle">
          <label className="employee_count" style={{ ["padding"]: "17px" }}>
            <select id="inputDepartment" className="form-control" name="department" value={department} onChange={handleDepartment}>
              <option>All</option>
              {department_name.map((department) => (
                <option key={department.department_id} value={department.department_name}>
                  {department.department_name}
                </option>
              ))}
            </select></label>
        </div>


        <div className="col-xl-2 col-sm-2 col-12 ">
          <a href='/department/add' className="btn-create "><Icon.Plus /> Add </a>
        </div>
      </div>
    </div>

  );
}
