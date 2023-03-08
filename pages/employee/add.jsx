export default function AddEmployee() {
    return (

        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="breadcrumb-path mb-4">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item active"> Employees</li>
                            </ul>
                            <h3>Create Employees</h3>
                        </div>
                    </div>
                    <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-titles">Basic Details <span>Organized and secure.</span></h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="card ">
                            <div className="card-header">
                                <h2 className="card-titles">Employment Details<span>Let everyone know the essentials so
                                    they're fully prepared.</span></h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <select className="select">
                                                <option value="Select leave">Country of Employment </option>
                                                <option value="leave">country1</option>
                                                <option value="leave">country2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="text" placeholder="Start Date" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="text" placeholder="Job Title" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <select className="select">
                                                <option value="Select leave">Permanent </option>
                                                <option value="leave">Freelancer</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-titles">Salary Details<span>Stored securely, only visible to Super
                                    Admins, Payroll Admins, and themselves.</span></h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <select className="select">
                                                <option value="Select leave">Currency </option>
                                                <option value="leave">$</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <select className="select">
                                                <option value="Select leave">Frequency </option>
                                                <option value="leave">Annualy</option>
                                                <option value="leave">Monthly</option>
                                                <option value="leave">Weekly</option>
                                                <option value="leave">Daily</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="text" placeholder="Start Date" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-sm-12 col-12 ">
                                <div className="form-btn">
                                    <a href="#" className="btn btn-apply w-auto">Add Team Member</a>
                                    <a href="#" className="btn btn-secondary">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
