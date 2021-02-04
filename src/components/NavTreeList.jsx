import classNames from 'classnames';
import '../OkpdStyle.sass';
import React, {Component} from 'react';

export default class NavTreeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOptions: {},
    }
  }

  render() {
    const {selectedOptions} = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <OptionsList
            options={this.props.listContent}
            onChange={(selectedOptions) => {
              this.setState({selectedOptions})
            }}
            selectedOptions={selectedOptions}
            isFirst={true}
          />
        </div>
      </div>
    )
  }
};

const OptionsList = ({options, selectedOptions, onChange, isFirst}) => {

  const handleCheckboxClicked = (selectedOptionCode) => {
    if (selectedOptions[selectedOptionCode]) {
      delete selectedOptions[selectedOptionCode];
    } else {
      selectedOptions[selectedOptionCode] = {}
    }
    onChange(selectedOptions)
  }

  const handleSubOptionsListChange = (optionCode, subSelections) => {
    selectedOptions[optionCode] = subSelections;
    onChange(selectedOptions);
  }

  return (
    <div>
      {options.map(option => (
          <ul className={isFirst && "firstUL"}>
            <Checkbox
              selected={selectedOptions[option.code]}
              label={option.name}
              onChange={() => {
                handleCheckboxClicked(option.code)
              }}
            />
            {(option.subArray.length > 0 && selectedOptions[option.code]) &&
            <OptionsList
              options={option.subArray}
              selectedOptions={selectedOptions[option.code]}
              onChange={(subSelections) => handleSubOptionsListChange(option.code, subSelections)}
            />
            }
          </ul>
        )
      )}
    </div>
  )
}
const Checkbox = ({selected, label, onChange}) => {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={selected} hidden onClick={() => onChange(!selected)}/>
      <div
        className={
          classNames( 'checkbox__icon', selected ? 'check-square' : '')
        }>
      </div>
      <div className="checkbox__label">{label}</div>
    </label>
  )
}