import React, { Component } from 'react';
import { Circle } from 'rc-progress';
import { database } from '../firebase';

class Goals extends Component {
  constructor() {
    super();

    this.state = {
      monthProgress: 0,
      featureProgress: 0
    };
  }

  componentDidMount() {
    const now = new Date();
    const monthStart = Date.UTC(now.getUTCFullYear(), now.getUTCMonth()) / 1000;

    database.ref('donations')
      .orderByChild('created')
      .on('value', snapshot => {
        const allCharges = Object.values(snapshot.val());
        const allDonations = allCharges.map(toDonation);

        const totalDonated = allDonations.reduce(sumDonations, 0);
        const featureProgress = totalDonated % 100;

        const monthDonations = allDonations.filter(c => c.created >= monthStart);
        const monthProgress = monthDonations.reduce(sumDonations, 0);

        this.setState({
          monthProgress: Math.round(monthProgress),
          featureProgress: Math.round(featureProgress)
        });
      });
  }

  render() {
    const monthProgress = this.state.monthProgress;
    const featureProgress = this.state.featureProgress;

    return (
      <div className="goals">
        <Goal name="Hosting" target={5} progress={monthProgress}>
          This is roughly the cost of hosting the website every month. If
          this goal isn't met, I am losing money to keep the site going.
        </Goal>
        <Goal name="Maintenance" target={20} progress={monthProgress}>
          In addition to the cost of hosting, I spend time working on this
          pretty much every month for some reason or another.
        </Goal>
        <Goal name="New Feature" target={100} progress={featureProgress}>
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
    const progress = Math.min(this.props.progress, target);

    const title = `${name} - $${progress} / $${target}`;

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

function toDonation(charge) {
  return {
    amount: charge.amount / 100,
    created: charge.created
  };
}

function sumDonations(sum, donation) {
  return sum + donation.amount;
}

export default Goals;
