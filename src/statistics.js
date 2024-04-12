import css from "./stat.module.css";
import React, { PureComponent } from "react";
class Statistics extends PureComponent {
  // state = {
  //   shoudUpdate: true
  // }
  // shouldComponentUpdate(nextProps,nextState){
  //   return nextState.shoudUpdate !== this.state.shoudUpdate
  // }
  generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  render() {
    return (
      <section className={css.statistics}>
        {this.props.title && <h2 className={css.title}>{this.props.title}</h2>}

        <ul className={css.stat_list}>
          {this.props.statistics.map((item, index) => (
            <li
              key={index}
              className={css.item}
              style={{ backgroundColor: this.generateRandomColor() }}
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Statistics;
