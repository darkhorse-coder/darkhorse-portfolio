import React, { useEffect } from "react";
import Modal from 'react-modal';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "./style.css";

function AchievementModal(props) {
    const { modalIsOpen, setIsOpen, cardInfo } = props
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    function closeModal() {
        setIsOpen(false);
    }

	 useEffect(() => {
		 Modal.setAppElement('body');
	 }, []);

    return (
        <Modal
            isOpen={modalIsOpen}
            contentLabel="Example Modal"
            className="port-modal"
        >
            <div className="modal-header">
                <div></div>
                <div className="modal-close" onClick={closeModal}><i className={'fas fa-times'}></i></div>
            </div>
            <div className="modal-title"> {cardInfo.subtitle}</div>
            <div className="modal-main">
                <div className="modal-main-description">
                    <div className="modal-description">{cardInfo.description}</div>
                    <div className="modal-skills">
                        {cardInfo.skills.map((skill, idx) => (
                            skill && <div key={idx} className="modal-skill-one">{skill}</div>
                            )
                        )}
                    </div>
                    <a className="modal-link-button" href={cardInfo.footer[0].url} target={'_blank'}>
                        {cardInfo.footer[0].name}
                    </a>
                </div>
                <div className="modal-main-images">
                    <Carousel responsive={responsive}>
                        {cardInfo.images.map((image, idx) => (
                            image && <img key={idx} className="modal-image" src={image} alt="" />
                            )
                        )}
                    </Carousel>
                </div>
            </div>
        </Modal>
    );
}

export default AchievementModal