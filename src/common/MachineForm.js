import { Component } from 'react';
import './MachineForm.css';

export default class MachineForm extends Component {
  state = {
    title: '',
    manufacturer: '',
    dateOfManufacture: '',
    type: '',
    designer: '',
    unitsProduced: '',
    image: '',
    manual: '',
    funRating: '',
    isFavorite: false
  }
  
  render() {
    const { title, 
      manufacturer, 
      dateOfManufacture, 
      unitsProduced, 
      abbreviation, 
      mpu, 
      type, 
      designer, 
      image, 
      manual, 
      funRating, 
      isFavorite } = this.state;

    const { machine } = this.props;
    return (
      <form className="MachineForm" onSubmit={this.handleSubmit}>

        {/* Title */}
        <p>
          <label>
            <span>Machine Title</span>
            <input name="title" required placeholder="Machine title..."
              value={title} onChange={this.handleChangeName} 
            />
          </label>
        </p>

        {/* Manufacturer */}

        <p>
          <label>
            <span>Manufacturer</span>
            <input name="manufacturer" required placeholder="Machine manufacturer..."
              value={manufacturer} onChange={this.handleChangeManufacturer} 
            />
          </label>
        </p>

        {/* Date of Manufacture */}
        <p>
          <label>
            <span>Date of Manufacture</span>
            <input name="dateOfManufacture" required pattern="\d{4}"
              title="Should be a four digit year like 2021"
              placeholder="Enter a four-digit year"
              value={dateOfManufacture} onChange={this.handleChangeDateOfManufacture} 
            />
          </label>
        </p>
        
        {/* Units Produced */}
        <p>
          <label>
            <span>Units Produced</span>
            <input name="unitsProduced" required pattern="^(0|[1-9][0-9]*)$"
              title="Units Produced"
              placeholder="Enter a number"
              value={unitsProduced} onChange={this.handleChangeUnitsProduced} 
            />
          </label>
        </p>

        {/* Abbreviation */}
        <p>
          <label>
            <span>Abbreviation</span>
            <input name="abbreviation" placeholder="Common abbreviation..."
              value={abbreviation} onChange={this.handleChangeAbbreviation} 
            />
          </label>
        </p>

        {/* MPU */}
        <p>
          <label>
            <span>MPU</span>
            <input name="mpu" placeholder="MPU (if applicable)..."
              value={mpu} onChange={this.handleChangeMpu} 
            />
          </label>
        </p>

        {/* Type */}
        <p>
          <label>
            <span>Machine Type</span>
            <select name="type" required placeholder="Type (EM, Solid State etc.)"
              value={type} onChange={this.handleChangeType}>
              <option value="" disabled>Type (EM, Solid State etc.)</option>
              <option>Solid State Electronic</option>
              <option>Electro-mechanical</option>
            </select>
          </label>
        </p>

        {/* Designer */}
        <p>
          <label>
            <span>Designer</span>
            <input name="designer" placeholder="Designer..."
              value={designer} onChange={this.handleChangeDesigner} 
            />
          </label>
        </p>

        {/* Image */}
        <p>
          <label>
            <span>Machine Image Url</span>
            <input name="image" required placeholder="Url to image of Machine"
              value={image} onChange={this.handleChangeImage} 
            />
          </label>
        </p>

        {/* Manual */}
        <p>
          <label>
            <span>Manual</span>
            <input name="manual" placeholder="Url to manual..."
              value={manual} onChange={this.handleChangeManual} 
            />
          </label>
        </p>

        {/* Fun Rating */}
        <p>
          <label>
            <span>Fun Rating</span>
            <input name="funRating" required pattern="/^\d*\.?\d*$/"
              title="Number With Decimal"
              placeholder="Fun Rating"
              value={funRating} onChange={this.handleChangeFunRating} 
            />
          </label>
        </p>

        {/* Is Favorite? */}
        <p>
          <label>
            <span>Is this a favorite?</span>
            <span className="vertically-centered">
              <input name="isFavorite"
                type="checkbox"
                value={isFavorite} onChange={this.handleChangeIsFavorite} 
              /> Yes
            </span>
          </label>
        </p>

        <p>
          <button>{machine ? 'Update' : 'Add'} Machine</button>
        </p>

      </form>
    );
  }

}