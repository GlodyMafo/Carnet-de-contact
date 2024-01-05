
function Inputs(props) {
    // console.log(props.label);
    return (
      <>
        <label> {props.label} </label>
        
        <input type="text" id="nameInpute" className="adding" />
  
        <p className="error_message"> {props.erreur} </p>
      </>
    );
  }

  export default Inputs