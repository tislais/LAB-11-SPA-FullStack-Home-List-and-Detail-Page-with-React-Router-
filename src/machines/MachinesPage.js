import { Component } from 'react';
import MachineList from './MachineList';
import { getMachines } from '../utils/machines-api';
import './MachinesPage.css';

export default class MachinesPage extends Component {
  state = {
    machines: []
  }

  async componentDidMount() {
    const machines = await getMachines();
    if (machines) {
      this.setState({ machines: machines });
    }
    else {
      console.log('No machines received!');
    }
  }

  render() {
    const { machines } = this.state;
    return (
      <div className="MachinesPage">
        <MachineList machines={machines} />
      </div>
    );
  } 
}