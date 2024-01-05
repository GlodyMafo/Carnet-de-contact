import React from "react";
import Inputs from "./Inputs";
import Button from "./MyButton";
import Titre from "./Titre";

function App() {
  return (
    <>
      <Titre titre="Répertoire des contacts" />
      <section className="contenaire">
        <div className="contenaire--formulaire">
          <Titre titre="Formulaire de contact" />
          <form
            className="contenaire--formulaire--marges"
            name="contact"
            enctype="multipart/form-data"
            method="post"
          >
            <Inputs label="Prenom" />
            <Inputs label="Nom" />
            <Inputs label="Téléphone" />
            <Inputs label="Groupe" />

            <label>Bio </label>
            <textarea
              id="inputBio_height"
              erreur="Saisissez un numéro de téléphone correcte"
              className="adding"
              rows="5"
              cols="33"
            ></textarea>
            <div id="inputImg_height">
              <div className="marge--img">
                <label for="image" id="img--pading">
                  {" "}
                  Déposer la photo
                </label>
                <p>ici</p>
                <input type="file" id="image" name="img" className="adding" />
                <p className="error_message"></p>
              </div>
            </div>
            <Button value="Créer" style={{ backgroundColor: "#0880D6" }} />
            <Button value="Reinit" style={{ background: "red" }} />
          </form>
        </div>
        <div className="scroller">
          <div className="contenaire--liste ">
            <Titre titre="Liste des contacts" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
