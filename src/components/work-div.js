import React from "react";

function WorkDiv(props) {
  const { works } = props;

  return (
    <div className="work-list">
      {works.map((work, index) => {
        return (
          <div key={index} id={index} className="work-item">
            <h4 className="work-title">{work.title}</h4>
            <p className="work-date">{work.date}</p>
            <p className="work-place">{work.company}</p>
            <p className="work-location">{work.location}</p>
            <p className="work-desc">{work.description}</p>
            <button onClick={props.onClick} className="work-delete-btn">
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default WorkDiv;
