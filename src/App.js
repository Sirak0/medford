import Page from "./components/Page/Page";
import MediaPopup from "./components/mediaPopup/media";
import Popup from "./components/Popup/Popup";
import "./App.scss";
import Main from "./components/Main/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Scroll from "./components/Main/Scroll/Scroll";

function App() {
  const [devices, setDevices] = useState([]);
  const devicesData = useSelector(function (state) {
    return state.items;
  });

  useEffect(() => {
    setDevices(devicesData);
  }, [devicesData]);

  return (
    <Router>
      <Scroll />
      <MediaPopup />
      <Popup />
      <Routes>
        <Route path="/" element={<Main />} />
        {devices.map((elem, index) => (
          <Route path={`/page${elem.id}`} element={<Page item={elem} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
