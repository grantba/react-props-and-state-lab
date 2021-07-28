import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  fetchPets = () => {
    let endpoint = '/api/pets'
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`
    }
    // switch (petType) {
    //   case 'cat':
    //     endpoint += '?type=cat'
    //     break;
    //   case 'dog':
    //     endpoint += '?type=dog'
    //     break;
    //   case 'micropig':
    //     endpoint += '?type=micropig'
    //     break;  
    // }
    fetch(endpoint)
    .then(resp => resp.json())
    .then(pets => this.setState({ pets: pets }))
  }

  onAdoptPet = id => {
    // const pets = this.state.pets.map(p => {
    //   return p.id === id ? { ...p, isAdopted: true } : p;
    // });
    // this.setState({ pets: pets });
    let pet = this.state.pets.find(pet => pet.id === id)
    if (pet) {
      pet.isAdopted = true
      this.setState({
        pets: this.state.pets
      })
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
