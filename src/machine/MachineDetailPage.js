import { Component } from 'react';
import { getMachine } from '../utils/machines-api';
import { Link } from 'react-router-dom';
import './MachineDetailPage.css';

export default class MachineDetailPage extends Component {
  state = {
    machine: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const machine = await getMachine(match.params.id);
    if (machine) {
      this.setState({ machine: machine });
      console.log(machine);
    }
    else {
      console.log('No machine received.');
    }
  }
  
  render() {
    const { machine } = this.state;
    if (!machine) return null;
    return (
      <div className="MachineDetailPage">
        <h1>{machine.title}</h1>
        <img src={machine.image} alt={machine.title} />
        <div>{machine.manufacturer}</div>
        <div>{machine.dateOfManufacture}</div>
        <div>{machine.type}</div>
        <div>{machine.designer}</div>
        <div>{machine.unitsProduced} machines produced.</div>
        <Link to={machine.manual}>Manual</Link>
        <div>Rating: {machine.funRating}</div>
        <div>Designed by: {machine.designer}</div>
      </div>
    );
  }

}