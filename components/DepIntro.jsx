export default function DepIntro({ department }) {
    return (
        <tr>
            <td>
                <div className="table-img">
                    <label className="action_label2">{department.dapartment_name}</label>
                </div>
            </td>
            <td>
                <label className="action_label">{department.line_manager}</label>
            </td>
            <td>
                <label className="action_label2">{department.address}</label>
            </td>
            <td>
                <label className="action_label">{department.city}</label>
            </td>
            <td>
                <label className="action_label2"> {department.nation}</label>
            </td>
            <td className="tab-select">
                <select className="select">
                    <option value="active">Update</option>
                    <option value="inactive">Delete</option>
                </select>
            </td>

        </tr>
    )
}
