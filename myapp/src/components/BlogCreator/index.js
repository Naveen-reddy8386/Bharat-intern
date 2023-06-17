import { useState } from "react";
import "./index.css";

function BlogEditor() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [istrue, setTrue] = useState(true);
  const [otherElements, setOtherElements] = useState("");
  const [error, setError] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImage("");
    }
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.value);
  };

  const handleOtherElementsChange = (e) => {
    setOtherElements(e.target.value);
  };

  const handlePublish = () => {
    console.log(title);
    console.log(image);
    console.log(video);
    console.log(otherElements);
    if ((title, image, video, otherElements) === "") {
      setError("Fill the details");
    } else {
      setTrue(false);
    }
    setTitle(title);
    setImage(image);
    setVideo(video);
    setOtherElements(otherElements);
  };
  const renderBlog = () => (
    <div className="blog">
      <div className="content">
        <h1 className="title">{title}</h1>
        <div className="bl">
          <img src={image} className="img" />
          <p className="para">{otherElements}</p>
        </div>
      </div>
      <div className="img-block">
        <iframe
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
  const renderDetail = () => (
    <div className="outer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
        className="editor-img"
      />
      <div className="blog-editor">
        <h1>Blog Editor</h1>

        {/* Text Input */}
        <div className="input-group">
          <label htmlFor="blog-title">Title:</label>
          <input
            type="text"
            id="blog-title"
            placeholder="Enter blog title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        {/* Image Input */}
        <div className="input-group">
          <label htmlFor="blog-image">Image:</label>
          <input type="file" id="blog-image" onChange={handleImageChange} />
        </div>

        {/* Video Input */}
        <div className="input-group">
          <label htmlFor="blog-video">Video URL:</label>
          <input
            type="text"
            id="blog-video"
            placeholder="Enter video URL"
            value={video}
            onChange={handleVideoChange}
          />
        </div>

        {/* Other Elements */}
        <div className="input-group">
          <label htmlFor="blog-other">Other Elements:</label>
          <textarea
            id="blog-other"
            placeholder="Enter other elements"
            value={otherElements}
            onChange={handleOtherElementsChange}
          />
        </div>
        <p className="error">{error}</p>
        {/* Submit Button */}
        <button onClick={handlePublish}>Publish</button>
      </div>
    </div>
  );

  return <>{istrue ? renderDetail() : renderBlog()}</>;
}

export default BlogEditor;
