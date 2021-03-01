import classNames from 'classnames';
import '../OkpdStyle.sass';
import React, {Component} from 'react';
import {connect} from "react-redux";
//компонент
class NavTreeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOptions: {},
    }
  }
//рекурсивный рендер древовидного списка
  render() {
    const {selectedOptions} = this.state;
    return (
      <div className="containerModal">
        <div className="wrapper">
          <OptionsList
            options={this.props.treeListContent}
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
}

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
              selected={selectedOptions[option.Code]}
              label={option.Name}
              onChange={() => {
                handleCheckboxClicked(option.Code)
              }}
            />
            {/*/////////////ошибка возникает тут при срабатывании диспатча////////////*/}
            {(option.subCategory.length > 0 && selectedOptions[option.Code]) &&
            <OptionsList
              options={option.subCategory}
              selectedOptions={selectedOptions[option.Code]}
              onChange={(subSelections) => handleSubOptionsListChange(option.Code, subSelections)}
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
// конект к стору
export default connect (
  state => ({
    treeListContent: state
  })
)(NavTreeList);