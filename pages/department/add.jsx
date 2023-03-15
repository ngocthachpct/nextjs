export default function AddEmployee() {
    return (

        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="row">
                    {/* <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="breadcrumb-path mb-4">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item active"> Employees</li>
                            </ul>
                            <h3>Create Employees</h3>
                        </div>
                    </div> */}
                    <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-titles">Add Department</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="text" placeholder="Department Name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="text" placeholder="Street Address" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <select className="select">
                                                <option value="Select leave">City </option>
                                                <option value="leave">City 1</option>
                                                <option value="leave">City 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <select className="select">
                                                <option value="Select leave">Nation </option>
                                                <option value="leave">Nation 1</option>
                                                <option value="leave">Nation 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                

                                <div className="row">
                                <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <select className="select">
                                                <option value="Select leave">Line Manager </option>
                                                <option value="leave">Manager 1</option>
                                                <option value="leave">Manager 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-12 col-sm-12 col-12 ">
                        
                        <div className="row">
                            <div className="col-xl-12 col-sm-12 col-12 ">
                                <div className="form-btn">
                                    <a href="#" className="btn btn-apply w-auto">Add Department</a>
                                    {/* <a href="#" className="btn btn-secondary">Cancel</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
