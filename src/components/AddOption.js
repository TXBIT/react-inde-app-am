import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }

    // console.log(typeof e.target.elements);
    // console.log(
    //   Object.keys(e.target.elements).map((key) => e.target.elements[key].value)
    // );
    // console.log(
    //   Object.values(e.target.elements).map((element) => element.value)
    // );
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}