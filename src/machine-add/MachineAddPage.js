import { Component } from 'react';
import './MachineAddPage.css';
import MachineForm from '../common/MachineForm';
import { addMachine } from '../utils/machines-api';

export default class MachineAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async (machineToAdd) => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const newMachine = await addMachine(machineToAdd);
      history.push(`/machines/${newMachine.id}`);
    }
    catch (err) {
      this.setState({ loading: false });
      console.log(err.message);
    }
  }

  render() {

    return (
      <div className="MachineAddPage">
        <h2>Add a Cat</h2>
        <MachineForm onSubmit={this.handleAdd}/>
      </div>
    );
  }

}