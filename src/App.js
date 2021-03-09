import {useState} from "react"

import './styles/App.css';

import mainImage from "./images/scrimba-404.svg"
import mainImageSmall from "./images/main-image-media-query.svg"
import scrimbaLogo from "./images/logo.svg"
import blobRight from "./images/blobs/blob-right.svg"
import blobRightKevin from "./images/blobs/blob-right-kevin.svg"
import blobLeft from "./images/blobs/blob-left.svg"
import blobLeftKevin from "./images/blobs/blob-left-kevin.svg"
import blobBottom from "./images/blobs/blob-bottom.svg"
import blobBottomKevin from "./images/blobs/blob-bottom-kevin.svg"


function App() {
  const [click, setClick] = useState(true)
  return (
    <div className="App-container">
      <img className="blob-right" src={click ? blobRight : blobRightKevin} alt="blob" />
      <img className="blob-left" src={click ? blobLeft : blobLeftKevin}  alt="blob" />
      <img className="blob-bottom"  onClick={() => setClick(!click)} src={click ? blobBottom : blobBottomKevin}  alt="blob" />
  

      <a href="https://scrimba.com/" className="nav">
        <img className="logo" src={scrimbaLogo} alt="logo"/>
        <div className="scrimba">scrimba</div>
        <div className="btn">Resume course</div>
      </a>

      <div className="image-container">
        <img src={mainImage} className="main-image" alt="404 page" />
        <img src={mainImageSmall} className="main-image-small" alt="404 page" />
        <div className="header">Oops!</div>
        <div className="subtitle">The page your looking for no longer exist</div>
        <div className="easter-egg-message">(unless your looking for a Kevin Powell easter egg... in that case, happy searching!)</div>
      </div>
   
    </div>
  );
}

export default App;
