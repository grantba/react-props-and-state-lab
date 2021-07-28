import React from 'react'

class Filters extends React.Component {
  
  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.props.onFindPetsClick(event.target.type.value)
  // }
  
  render() {
    return (
      <div className="ui form">
        {/* <form onSubmit={this.handleSubmit}> */}
          <h3>Animal type</h3>
          <div className="field">
            <select name="type" id="type" onChange={(event) => this.props.onChangeType(event)}>
              <option value="all">All</option>
              <option value="cat">Cats</option>
              <option value="dog">Dogs</option>
              <option value="micropig">Micropigs</option>
            </select>
          </div>
          <div className="field">
            <button onClick={() => this.props.onFindPetsClick()} className="ui secondary button">Find pets</button>
          </div>
        {/* </form> */}
      </div>
    )
  }
}

export default Filters
