import React, { useState } from "react";
import { Modal, Box } from "@material-ui/core";
import "./Home.css";

function Home() {
  //Modal - inicio
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //Moodal - fim

  return (
    <div className="home">
      <h2>Página Home</h2>
      <button type="button" onClick={() => handleOpen(!open)}>
        Open Modal
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="home-modal-box">
          <div id="modal-mensagem">
            <h4>Modal Aqui</h4>
            <p>Tem Certeza?</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Home;
