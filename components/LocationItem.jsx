import Link from "next/link"

export default function LocationItem({ branch }) {
    return (
      
        <tr>
            <td>
                <Link href={`#`}>
                <div className="table-img">
                    <label>{branch.street_address} </label>
                </div>
                </Link>
            </td>
            <td>
                <label className="action_label">{branch.state_province || 'No'}</label>
            </td>
            <td>
                <label className="action_label2">{branch.city} </label>
            </td>
            {/* <td className="tab-select">
                <select className="select">
                    <option value="default">default</option>
                    <option value="delete">delete</option>
                    <option value="update">update</option>
                </select>
            </td> */}
        </tr>
   
    )
}
