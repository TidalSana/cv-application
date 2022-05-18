import React from "react";

function EducationDiv(props) {
  const { schools } = props;

  return (
    <div className="education-list">
      {schools.map((school, index) => {
        return (
          <div key={index} id={index} className="education-item">
            <h4 className="education-school">{school.school}</h4>
            <p className="education-attend">{school.attend}</p>
            <p className="education-degree">{school.degree}</p>
            <p className="education-study">{school.study}</p>
            <p className="education-location">{school.location}</p>
            <button onClick={props.onClick} className="school-delete-btn">
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default EducationDiv;
