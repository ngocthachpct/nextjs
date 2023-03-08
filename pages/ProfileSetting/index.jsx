

import * as Icon from 'react-feather';
import ProfileNav from '../../components/ProfileNav';



export default function ProfileSetting (){
    return (
        <div>
      
        <div className="page-wrapper">
  <div className="content container-fluid">
    <div className="row">
    <ProfileNav></ProfileNav>
      
    <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="row">
          <div className="col-xl-6 col-sm-12 col-12 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <h2 className="card-titles">
                  Change Password
                  <span>
                    Your password needs to be at least 8 characters long.
                  </span>
                </h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <input type="text" placeholder="Current Password" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="New Password" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Repeat Password" />
                </div>
                <div className="btn-set pl-0">
                  <a className="btn btn-apply">Change My Password</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-sm-12 col-12">
            <div className="card flex-fill">
              <div className="card-header">
                <h2 className="card-titles">
                  Change Profile Image
                  <span>
                    Update your image!
                  </span>
                </h2>
              </div>
              <div className="card-body">
              <p>Upload Profile Image</p>
              <div>
                  <img src = "/avatar-02.jpg"></img>
                  </div>
                    <input type="file" id="myFile" name="filename"></input>
                    
                <div className="btn-set pl-0">
                  <a className="btn btn-apply">Update Avatar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</div>


        </div>
    );

}
