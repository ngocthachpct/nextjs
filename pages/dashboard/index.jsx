
import CardBarChart from './barchart';
import Donutchart from './donutchart';



export default function Dashboard({ templateData }) {
    const { currenAmountEmp, amountDepartmentResult, totalSalaryResult, amoutLocationsResult } = templateData;
    
    function getCurrentDate(){
        var objToday = new Date(),
        weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
        dayOfWeek = weekday[objToday.getDay()],
        domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
        dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
        curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = dayOfWeek + ", " + dayOfMonth + " " + curMonth + " " + curYear;
    return today
}
    
    return (
        <div>
           
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-name 	mb-4">
                        <h4 className="m-0"><img src="/profile.jpg" className="mr-1" alt="profile" /> Welcome Joey!</h4>
                        <label>{getCurrentDate()}</label>
                    </div>
                    <div className="row mb-4">
                        <div className="col-xl-12 col-sm-12 col-12">
                            <div className="breadcrumb-path ">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><img src="/dash.png" className="mr-3" alt="breadcrumb" />Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ul>
                                <h3>Admin Dashboard</h3>
                            </div>
                        </div>
                        {/* <div className="col-xl-6 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-xl-6 col-sm-6 col-12">
                                    <a className="btn-dash" href="#"> Admin Dashboard</a>
                                </div>
                                <div className="col-xl-6 col-sm-6 col-12">
                                    <a className="btn-emp" href="index-employee.html">Employee Dashboard</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row mb-4">
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card board1 fill1 ">
                                <div className="card-body">
                                    <div className="card_widget_header">
                                        <label>Employees</label>
                                        <h4>{currenAmountEmp}</h4>
                                    </div>
                                    <div className="card_widget_img">
                                        <img src="/dash1.png" alt="card-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card board1 fill2 ">
                                <div className="card-body">
                                    <div className="card_widget_header">
                                        <label>Departments</label>
                                        <h4>{amountDepartmentResult}</h4>
                                    </div>
                                    <div className="card_widget_img">
                                        <img src="/dash2.png" alt="card-img" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card board1 fill4 ">
                                <div className="card-body">
                                    <div className="card_widget_header">
                                        <label>Salary</label>
                                        <h4>${totalSalaryResult}</h4>
                                    </div>
                                    <div className="card_widget_img">
                                        <img src="/dash4.png" alt="card-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card board1 fill3 ">
                                <div className="card-body">
                                    <div className="card_widget_header">
                                        <label>Branches</label>
                                        <h4>{amoutLocationsResult}</h4>
                                    </div>
                                    <div className="card_widget_img">
                                        <img src="/dash3.png" alt="card-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 d-flex mobile-h">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="card-title">Total Employees</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <Donutchart />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="card-title">Total Salary By Unit</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <CardBarChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export async function getServerSideProps() {
    const response = await fetch('http://localhost:3001/dashboard/template');
    const data = await response.json();
  
    return {
      props: {
        templateData: {
        currenAmountEmp: data.currenAmountEmp,
        totalSalaryResult: data.totalSalaryResult,
        amountDepartmentResult: data.amountDepartmentResult,
        amoutLocationsResult: data.amoutLocationsResult,}
      },
    };
  }