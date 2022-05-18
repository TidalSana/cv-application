import React, { Component } from "react";
import WorkDiv from "./work-div";
import "../css/work.css";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      work: {
        title: "",
        company: "",
        date: "",
        location: "",
        description: "",
      },
      works: [],
    };
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      work: {
        ...prevState.work,
        [id]: value,
      },
    }));
  };

  openEditor = (e) => {
    e.preventDefault();
    const form = document.querySelector(".form-editor");
    const workBtn = document.querySelector(".work-button").firstChild;

    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      workBtn.innerText = "Cancel";
      form.classList.add("experience-inner");
    } else {
      form.classList.add("hidden");
      workBtn.innerText = "Add Experience";
      form.classList.remove("experience-inner");
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    const form = document.querySelector(".form-editor");
    const workBtn = document.querySelector(".work-button").firstChild;
    form.classList.add("hidden");
    workBtn.innerText = "Add Experience";

    this.setState({
      works: this.state.works.concat(this.state.work),
      work: {
        title: "",
        company: "",
        date: "",
        location: "",
        description: "",
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
    const { work, works } = this.state;
    return (
      <form className="info experience-info">
        <div className="experience-section">
          <h2 className="experience-header">Experience</h2>
        </div>
        <WorkDiv works={works} onClick={this.remove} />
        <div className="experience-edit">
          <div className="form-editor hidden">
            <div className="work">
              <label htmlFor="title">Job Title</label>
              <input
                onChange={this.handleChange}
                value={work.title}
                type="text"
                id="title"
              />
              <label htmlFor="company">Company</label>
              <input
                onChange={this.handleChange}
                value={work.company}
                type="text"
                id="company"
              />
              <label htmlFor="start">Date Worked (mm/yy - mm/yy)</label>
              <input
                onChange={this.handleChange}
                value={work.date}
                type="text"
                id="date"
              />
              <label htmlFor="location">Location (e.g. Seattle, WA)</label>
              <input
                onChange={this.handleChange}
                value={work.location}
                type="text"
                id="location"
              />
              <label htmlFor="description">Description</label>
              <input
                onChange={this.handleChange}
                value={work.description}
                type="text"
                id="description"
              />
              <button className="save" onClick={this.handleClick}>
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="work-button">
          <button className="work-save" onClick={this.openEditor}>
            Add Experience
          </button>
        </div>
      </form>
    );
  }
}

export default Work;
