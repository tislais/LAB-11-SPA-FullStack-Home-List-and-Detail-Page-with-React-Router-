import { Component } from 'react';
import { Link } from 'react-router-dom';
import './MachineItem.css';

export default class MachineItem extends Component {
  
  render() {
    const { machine } = this.props;

    return (
      <li className="MachineItem">
        <Link to={`/machines/${machine.id}`}>
          <img src={machine.image} alt={machine.title}/>
          <div>
            <h2>{machine.title}</h2>
            <div>{machine.manufacturer}</div>
            <div>{machine.dateOfManufacture}</div>
            <div>{machine.type}</div>
            <div>{machine.designer}</div>
          </div>
        </Link>
      </li>
    );
  }

}