import React, { useState, useRef } from "react";

const API_URL = "http://localhost:3000";

function FileUpload() {
  const [status, setStatus] = useState("initial");

  const [files, setFiles] = useState([]);
  const filesRef = useRef([]);
  const postToGet = useRef(1);

  const handleUpload = (e) => {
    e.preventDefault();
    setStatus("uploading");
    const formData = new FormData();
    formData.append("post[title]", "Test");

    for (let i = 0; i < filesRef.current.files.length; i++) {
      formData.append("post[files][]", filesRef.current.files[i]);
    }
    postData(formData);
  };

  const postData = (formData) => {
    fetch(`${API_URL}/posts`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err);
        setStatus("fail");
      })
  };

  return (
    <>
    <div className="App">
      {/* upload form */}
      <form>
        <input type="file" name="file" multiple ref={filesRef} />
        <button type="button" onClick={handleUpload}>
          Submit
        </button>
      </form>
    </div>
    <Result status={status} />
    </>
 );
}

const Result = ({ status }) => {
  if (status === "success") {
    return <p>✅ Uploaded successfully!</p>;
  } else if (status === "fail") {
    return <p>❌ Upload failed!</p>;
  } else if (status === "uploading") {
    return <p>⏳ Uploading started...</p>;
  } else {
    return null;
  }
};


export default FileUpload;