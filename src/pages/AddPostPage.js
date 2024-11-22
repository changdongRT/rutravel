import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
//npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
//설치 해야함

function AddPostPage() {
  const [fontSize, setFontSize] = useState("16px");
  const [fontColor, setFontColor] = useState("#000000");

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  return (
    <div>
      <Header />
      <div>
        <div className="Changetool">
          <h1>게시판 도구</h1>
          <button style={styles.button}>
            <FontAwesomeIcon icon={faFile} />
            임시저장
          </button>
          <button style={styles.button}>
            <FontAwesomeIcon icon={faPhotoFilm} />
            파일
          </button>
          <button style={styles.button}>
            <FontAwesomeIcon icon={faLocationPin} />
            장소
          </button>
          <button style={styles.button}>
            <FontAwesomeIcon icon={faThumbtack} />
            게시
          </button>
          <button style={styles.fontstyle}>
            <h4 style={{ margin: 0 }}>글자 크기:</h4>
            <select value={fontSize} onChange={handleFontSizeChange}>
              <option style={styles.op} value="12px">
                12px
              </option>
              <option style={styles.op} value="16px">
                16px
              </option>
              <option style={styles.op} value="20px">
                20px
              </option>
              <option style={styles.op} value="24px">
                24px
              </option>
            </select>
          </button>
          <button style={styles.fontstyle}>
            <h4 style={{ margin: 0 }}>글자 색상:</h4>
            <input
              type="color"
              value={fontColor}
              onChange={handleFontColorChange}
            />
          </button>
        </div>
        <hr />
        <div>
          <img src="profile.jpg" alt="Profile" />
          <textarea
            placeholder="내용을 입력하세요"
            style={{
              ...styles.textarea,
              fontSize: fontSize,
              color: fontColor,
            }}
          ></textarea>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  Changetool: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    flexGrow: 1,
    minWidth: "150px",
    padding: "20px",
    background: "#CEECF5",
    color: "#000000",
    borderRadius: "5px",
    fontSize: "16px",
    textAlign: "center",
  },
  fontstyle: {
    display: "flex",
    alignItem: "center",
    gap: "10px",
    flexGrow: 1,
    width: "50%",
    maxWidth: "200px",
    background: "#CEECF5",
    color: "#000000",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    height: "296px",
    padding: "15px",
    border: "1px solid black",
    borderRadius: "5px",
    maxWidth: "100%",
    maxHeight: "100vh",
    boxSizing: "border-box",
    overflow: "auto",
  },
};

export default AddPostPage;
