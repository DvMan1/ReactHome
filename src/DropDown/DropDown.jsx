import React from "react";


class DropDown extends React.Component {
  state = {
    visible: false
  };

  handleToggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div className="DropDown">
        <button type="button" className="Drop_toggle" onClick={this.handleToggle}>
          Показать/Скрыть
        </button>
        {this.state.visible && <div className="DropDownMenu">LOX</div>}
      </div>
    );
  }
}

export default DropDown;
