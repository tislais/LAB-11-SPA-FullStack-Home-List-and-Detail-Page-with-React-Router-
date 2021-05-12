import { Component } from 'react';
import { getMachine } from '../utils/machines-api';
import { Link } from 'react-router-dom';
import './MachineDetailPage.css';
import { deleteMachine } from '../utils/machines-api';

export default class MachineDetailPage extends Component {
  state = {
    machine: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;

    try {
      const machine = await getMachine(match.params.id);
      this.setState({ machine: machine });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleDelete = async () => {
    const { machine } = this.state;
    const { history } = this.props;

    const confirmation = `Delete ${machine.title} forever?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading: true });
      await deleteMachine(machine.id);
      history.push('/machines');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
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
        <a href={machine.manual}>Manual</a>
        <div>Rating: {machine.funRating}</div>
        <div>Designed by: {machine.designer}</div>
        <Link to={`/cats/${machine.id}/edit`}>
          Edit this Machine
        </Link>
        
        <button className="delete" onClick={this.handleDelete}>
          Delete this Machine
        </button>
      </div>
    );
  }

}