import React, { Component } from 'react';
import MachineItem from './MachineItem';
import './MachineList.css';

class MachineList extends Component {

  render() {
    const { machines } = this.props;

    return (
      <ul className="MachinesList">
        {machines.map(machine => (
          <MachineItem key={machine.id} machine={machine} />
        ))}
      </ul>
    );
  }
}


export default MachineList;