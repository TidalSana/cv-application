import React from "react";

function Save() {
  const handleClick = (e) => {
    e.preventDefault();
    const buttons = document.querySelectorAll("button");
    const inputs = document.querySelectorAll("input");

    if (buttons.length == 3) {
      console.log("2");
    }

    inputs.forEach((input) => {
      input.readOnly = true;
    });

    buttons.forEach((button) => {
      button.classList.add("hidden");
    });
  };

  return (
    <button className="save-cv-btn" onClick={handleClick}>
      Save-Cv
    </button>
  );
}

export default Save;
