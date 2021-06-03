import React, { useEffect } from "react";
import "./AchievementCard.css";
import AchievementModal from '../achievementModal';

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  }

  useEffect(() => {
	document.body.style.overflow = modalIsOpen ? 'hidden' : 'unset';
  }, [modalIsOpen])

  return (
    <>
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"} onClick={openModal}>
      <div className="certificate-image-div">
        <img src={cardInfo.images[0]} alt="PWA" className="card-image"></img>
        <div className="certificate-image-hover-div">
          <i className="fa fa-search"></i>
          <h5 className="title">{cardInfo.title}</h5>
        </div>
      </div>
    </div>
    <AchievementModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} cardInfo={cardInfo} />
    </>
  );
}
