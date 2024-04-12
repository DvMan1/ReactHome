import React from "react";
import css from "./ColorPicker.module.css";

class ColorPicker extends React.PureComponent {
  state = {
    activreIdx: 0,
  };

  setActive=(index)=>{
    this.setState({activreIdx:index})
  }

  render() {
    const {label}= this.props.options[this.state.activreIdx]
    return (
      <div className={css.ColorPicker}>
        <h2 className={css.ColorPicker_swatches}>Color Picker</h2>
        <p>Active Color:{label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={css.ColorPicker_swatch}
              style={{
                backgroundColor: color,
                border:
                  index === this.state.activreIdx ? "5px solid black" : "none",
              }}onClick={()=>this.setActive(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
