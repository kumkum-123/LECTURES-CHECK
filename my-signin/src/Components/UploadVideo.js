import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BACKEND_URI } from "../config/constants";
import "./UploadVideo.css";

const UploadVideo = () => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/all`)
      .then((response) => {
        setMedias(response.data);
      })
      .catch((error) => {
        console.error("Error fetching media:", error);
        alert("Error fetching media!");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    for (let key in videos) {
      formData.append("videos", videos[key]);
    }
    formData.append("name", name);

    axios
      .post(`${BACKEND_URI}/api/v1/media/create`, formData)
      .then((response) => {
        getAllMedias(); // Refresh media list after upload
        alert("Videos uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading videos:", error);
        alert("Error uploading videos!");
      });
  };

  const handleFileChange = (e) => {
    setVideos(e.target.files);
  };

  return (
    <div className="page-container">
      <div className="upload-container">
        <div className="upload-form">
          <h2>Upload Videos</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="videos">Select Video(s):</label>
              <input
                type="file"
                id="videos"
                className="form-control"
                multiple
                accept=".mp4, .mkv"
                onChange={handleFileChange}
              />
            </div>
            <div className="button-container">
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
              <div className="button-space"></div> {/* Space between buttons */}
              <Link to="/uploadpdf" className="btn btn-primary">
                Next
              </Link>
            </div>
          </form>
        </div>

        <div className="uploaded-videos">
          <h2>Uploaded Videos</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th width="200">Name</th>
                <th>Videos</th>
              </tr>
            </thead>
            <tbody>
              {medias.map((media, index) => (
                <tr key={index}>
                  <td>{media.name}</td>
                  <td>
                    {media.videos.map((video, index) => (
                      <video key={index} preload="auto" controls>
                        <source src={`${BACKEND_URI}${video}`} />
                        Your browser does not support the video tag.
                      </video>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;


