import Link from "next/link"

export default function EmployeeItem({ employee }) {
    return (
      
        <tr>
            <td>
                <Link href={`profileDetail/${employee.employee_id}`}>
                <div className="table-img">
                    <label>{employee.first_name} {employee.last_name}</label>
                </div>
                </Link>
            </td>
            <td>
                <label className="action_label">{employee.lineManager}</label>
            </td>
            <td>
                <label className="action_label2">{employee.department} </label>
            </td>
            <td><label className="action_label">{employee.job} </label></td>
            <td><label className="action_label2">{employee.office}</label></td>
            <td className="tab-select">
                <select className="select">
                    <option value="default">default</option>
                    <option value="delete">delete</option>
                    <option value="update">update</option>
                </select>
            </td>
        </tr>
   
    )
}
