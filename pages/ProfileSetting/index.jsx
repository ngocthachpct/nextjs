

import * as Icon from 'react-feather';
import ProfileNav from '../../components/ProfileNav';

import { useState } from "react";
import axios from "axios";
import fs from 'fs-extra'
import path from "path";
import Link from "next/link";



export default function ProfileSetting({ dirs }) {

  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };
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
                        {selectedImage ? (
                          <img src={selectedImage} alt="" />
                        ) : (
                          <span>Select Image</span>
                        )}
                      </div>
                      <input type="file"

                        onChange={({ target }) => {
                          if (target.files.length !== 0) {
                            const file = target.files[0];
                            setSelectedImage(URL.createObjectURL(file) || ta);
                            setSelectedFile(file);
                          }
                        }}
                      >

                      </input>

                      <div className="btn-set pl-0">
                        <a className="btn btn-apply" onClick={handleUpload}
                          disabled={uploading}
                          style={{ opacity: uploading ? ".5" : "1" }}> {uploading ? "Uploading.." : "Upload"}
                        </a>
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

};

export async function getServerSideProps() {
  const props = { dirs: [] };
  try {
    const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"));
    props.dirs = dirs;
    return { props };
  } catch (error) {
    return { props };
  }
}
