import React, { Component } from 'react';
import { Circle } from 'rc-progress';

class Goals extends Component {
  render() {
    return (
      <div className="goals">
        <Goal name="Hosting" target={5} progress={17}>
          This is roughly the cost of hosting the website every month. If
          this goal isn't met, I am losing money to keep the site going.
        </Goal>
        <Goal name="Maintenance" target={20} progress={17}>
          In addition to the cost of hosting, I spend time working on this
          pretty much every month for some reason or another.
        </Goal>
        <Goal name="New Feature" target={100} progress={17}>
          Adding new features can take me several hours. If this goal is
          met, I promise a new feature will be added. Progress toward this
          goal is only reset once full.
        </Goal>
      </div>
    );
  }
}

class Goal extends Component {
  render() {
    const name = this.props.name;
    const target = this.props.target;
    const title = `${name} - $${target}`;

    const progress = this.props.progress;
    const percent = (progress / target) * 100;

    return (
      <div className="goal">
        <div className="goal__progress">
          <Circle
            percent={percent} strokeWidth="2"
            trailWidth="2" trailColor="white"
          />
        </div>
        <h4 className="goal__title">{title}</h4>
        <p className="goal__description">
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default Goals;
