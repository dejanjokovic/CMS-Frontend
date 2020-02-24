import React, { Component, Suspense } from 'react';


export default class Input extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        active: (props.locked && props.active) || false,
        value: props.value || "",
        error: props.error || "",
        label: props.label || "Label",
        type: props.type || "text",
        img: props.img,
      };
    }
  
    changeValue(event) {
      const value = event.target.value;
      this.setState({ value, error: "" });
      this.props.onChange(value);
    }
  
    handleKeyPress(event) {
      if (event.which === 13) {
        this.setState({ value: this.props.predicted });
      }
    }
  
    render() {
      const { active, value, error, label } = this.state;
      const { predicted, locked } = this.props;
      const fieldClassName = `field ${(locked ? active : active || value) &&
        "active"} ${locked && !active && "locked"}`;
  
      return (
        <div className={fieldClassName}>
          {active &&
            value &&
            predicted &&
            predicted.includes(value) && <p className="predicted">{predicted}</p>}
          <img src={this.state.img} style={{width:20, height:20, position:'absolute', left:0, top:12}}></img>
          <input
            id={1}
            type={this.state.type}
            value={value}
            placeholder={label}
            onChange={this.changeValue.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            onFocus={() => !locked && this.setState({ active: true })}
            onBlur={() => !locked && this.setState({ active: false })}
          />
  
        </div>
      );
    }
  }
  