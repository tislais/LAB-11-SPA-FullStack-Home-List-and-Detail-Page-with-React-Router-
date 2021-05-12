import { Component } from 'react';
import './MachineAddPage.css';
import MachineForm from '../common/MachineForm';

export default class MachineAddPage extends Component {

  render() {

    return (
      <div className="MachineAddPage">
        <h2>Add a Cat</h2>
        <MachineForm onSubmit={this.handleAdd}/>
      </div>
    );
  }

}