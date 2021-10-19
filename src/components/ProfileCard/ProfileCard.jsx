import React, { useState }  from "react";
import { Modal, Box } from "@material-ui/core";
import "./ProfileCard.css";

function ProfileCard(props) {
  const profile = props.profile;

  //Modal - inicio
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //Moodal - fim

  return (
    <div className="profile-card">
      <div className="profile-card-img">
        <img src={profile.image} alt={`${profile.title}'s avatar`} />
      </div>
      <div className="profile-card-title">
        <h4>{profile.title}</h4>
      </div>
      <div className="profile-card-buttons">
        <button type="button" onClick={handleOpen}>
          Editar
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="home-modal-box">
          <div id="modal-mensagem">
            <input type="text" defaultValue={profile.title}/>
            <p>Tem Certeza?</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ProfileCard;
