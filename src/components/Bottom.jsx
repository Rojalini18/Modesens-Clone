import "../style/women/bottom.css";
export const Bottom = () => {
  return (
    <div className="wrapper">
      <div className="flex">
        <div className="left">
          <h1>Download the ModeSens App</h1>
          <br />
          <p>A seamless experience that takes your style to the next level</p>
          <br />
          <a
            href="https://play.google.com/store/apps/details?id=com.modesens.androidapp&hl=en_IN&gl=US"
            target="_blank"
          >
            {" "}
            <button className="btn">DOWNLOAD NOW</button>
          </a>
          <br />
          <br />
          <div className="ImgDiv1">
            <img
              src="https://cdn.modesens.com/static/img/20220420AppDownloaden.png"
              alt=""
              height="400px"
              width="300px"
            />
          </div>
        </div>
        <div className="right">
          <h1>Install the ModeSens Browser Extension</h1>
          <br />
          <p>Get timely, accurate product information every time you browse</p>
          <br />
          <a
            href="https://addons.mozilla.org/en-GB/firefox/addon/modesens-shopping-assistant/"
            target="_blank"
          >
            {" "}
            <button className="btn">INSTALL NOW</button>
          </a>
          <br />
          <br />
          <div className="ImgDiv2">
            <img
              src="https://cdn.modesens.com/static/img/20211109downloadright.png"
              alt=""
              height="360px"
              width="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
