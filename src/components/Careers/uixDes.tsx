import React from 'react';
import Modal from 'react-modal';

let overlay = Modal.defaultStyles.overlay;
if (overlay) {
  overlay.backgroundColor = 'rgba(47, 50, 57, 0.4)';
  overlay.zIndex = 999;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    border: '0px',
    borderRadius: '0px',
    minWidth: '75%',
    maxHeight: '75%',
    padding: '0px',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#___gatsby');

export const UixDes = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="co-tabs w-full flex flex-wrap relative">
      <div className="op-hover-mask" />
      <div className="opening-header">
        <div className="op-bg-mask">
          <button onClick={openModal}>User Interface & Experience Designer</button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="User Interface & Experience Designer"
      >
        <div className="modal-head">
          <h4>User Interface & Experience Designer</h4>
          <p>Number of Positions: 5</p>
        </div>
        <div className="modal-body">
          <p className="yrs-exp-text">3-6 years of experience</p>
          <div className="rrd role-wrapper">
            <p className="title">Role :</p>
            <ul>
              <li>2+ years of experience as a Node.js Developer or backend developer.</li>
              <li>In depth knowledge of Node.js.</li>
              <li>Strong proficiency with JavaScript.</li>
              <li>Good understanding of at least one of AngularJS or React JS.</li>
              <li>A basic understanding of front-end technologies.</li>
              <li>
                Understanding the nature of asynchronous programming and its quirks and workarounds.
              </li>
              <li>Knowledge of OOPs and Design Patterns.</li>
              <li>Strong knowledge of cloud.</li>
              <li>Ability to quickly get up to speed with existing code.</li>
              <li>Open-minded and keen to learn.</li>
              <li>Strong analytical skills and problem solving aptitude.</li>
              <li>Proficient understanding of code versioning tools, such as Git.</li>
              <li>Experience with Deployment to deploy updates and fixes.</li>
              <li>Knowledge of Ruby or Python will be a plus.</li>
              <li>Experience with Firebase will be a plus.</li>
            </ul>
          </div>
          <div className="rrd resp-wrapper">
            <p className="title">Responsibilities and Duties :</p>
            <ul>
              <li>
                Integration of user-facing elements developed by a front-end developers with server
                side logic.
              </li>
              <li>Building reusable code and libraries for future use.</li>
              <li>Optimization of the application for maximum speed and scalability.</li>
              <li>Implementation of security and data protection.</li>
              <li>Design and implementation of data storage solutions.</li>
              <li>
                Code, test and operate node.js based services and help QA and other teams for
                server-based testing.
              </li>
              <li>
                Effectively use tools and ingenuity to identify and fix defects before they become a
                problem.
              </li>
              <li>Independently create complete solutions from scratch.</li>
              <li>Implement and maintain monitoring and alerting.</li>
              <li>Share knowledge and help colleagues.</li>
            </ul>
          </div>
          <div className="acto-btns bg-actonate">
            <button className="btn op-apply-btn">Apply</button>
          </div>
        </div>
        <div className="modal-footer">
          <img src="/images/modal-footer-2.png" alt="modal-footer-image" />
        </div>
      </Modal>
    </div>
  );
};
