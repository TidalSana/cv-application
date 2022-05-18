import React, { Component } from "react";
import EducationDiv from "./educ-div";
import "../css/education.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        school: "",
        attend: "",
        degree: "",
        study: "",
        location: "",
      },
      schools: [],
    };
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [id]: value,
      },
    }));
  };

  openEditor = (e) => {
    e.preventDefault();
    const form = document.querySelector(".education-editor");
    const schoolBtn = document.querySelector(".education-button").firstChild;

    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      schoolBtn.innerText = "Cancel";
      form.classList.add("education-inner");
    } else {
      form.classList.add("hidden");
      schoolBtn.innerText = "Add Education";
      form.classList.remove("education-inner");
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    const form = document.querySelector(".education-editor");
    const schoolBtn = document.querySelector(".education-button").firstChild;
    form.classList.add("hidden");
    form.classList.remove("education-inner");
    schoolBtn.innerText = "Add Education";

    this.setState({
      schools: this.state.schools.concat(this.state.education),
      education: {
        school: "",
        attend: "",
        degree: "",
        study: "",
        location: "",
      },
    });
  };

  remove = (e) => {
    e.preventDefault();
    let targetIndex = parseInt(e.target.parentElement.id);

    let filteredArray = this.state.works.filter((item, i) => i !== targetIndex);

    this.setState({
      works: filteredArray,
    });
  };

  render() {
    const { education, schools } = this.state;
    return (
      <form className="info education-info">
        <div className="education-section">
          <h2 className="education-header">Education</h2>
        </div>
        <EducationDiv schools={schools} onClick={this.remove} />
        <div className="education-edit">
          <div className="education-editor hidden">
            <div className="education">
              <label htmlFor="school">School</label>
              <input
                onChange={this.handleChange}
                value={education.school}
                type="text"
                id="school"
              />
              <label htmlFor="attend">Date Attended (mm/yy - mm/yy)</label>
              <input
                onChange={this.handleChange}
                value={education.attend}
                type="text"
                id="attend"
              />
              <label htmlFor="degree">Degree</label>
              <input
                onChange={this.handleChange}
                value={education.degree}
                type="text"
                id="degree"
              />
              <label htmlFor="study">Study</label>
              <input
                onChange={this.handleChange}
                value={education.study}
                type="text"
                id="study"
              />
              <label htmlFor="location">Location (e.g. Seattle, WA)</label>
              <input
                onChange={this.handleChange}
                value={education.location}
                type="text"
                id="location"
              />
              <button className="save" onClick={this.handleClick}>
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="education-button">
          <button className="education-save" onClick={this.openEditor}>
            Add Education
          </button>
        </div>
      </form>
    );
  }
}

export default Education;
