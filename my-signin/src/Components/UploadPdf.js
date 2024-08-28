import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UploadPdf.css";
import { Link } from "react-router-dom";

function UploadPdf() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const result = await axios.post(
      "http://localhost:5000/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status === "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };

  return (
    <div className="upload-pdf-container">
      <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload PDF</h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          className="form-control"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <div style={{ marginLeft: "10px" }}>
            <Link to="/fileupload" className="btn btn-secondary btn-equal-size">
              Next
            </Link>
          </div>
        </div>
      </form>

      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data, index) => (
                <div className="inner-div" key={index}>
                  <h6>Title: {data.title}</h6>
                  <button
                    className="btn btn-primary"
                    onClick={() => showPdf(data.pdf)}
                  >
                    Show Pdf
                  </button>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default UploadPdf;



