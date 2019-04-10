import React, { Component } from 'react';
import '../Styles/_TypeCard.scss';
import anusara from '../Styles/images/ANUSARA.png'
import ashtanga from '../Styles/images/ASHTANGA.png'
import bikram from '../Styles/images/BIKRAM.png'
import hatha from '../Styles/images/HATHA.png'
import iyengar from '../Styles/images/IYENGAR.png'
import jivamukti from '../Styles/images/JIVAMUKTI.png'
import kundalini from '../Styles/images/KUNDALINI.png'
import vinyasa from '../Styles/images/VINYASA.png'
import yin from '../Styles/images/YIN.png'
import restorative from '../Styles/images/RESTORATIVE.png'


export class TypeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // typesWithImages: [],
      typeId: 0,
      // typeImages: [{ anusara }, { ashtanga }, { bikram }, { hatha }, { iyengar }, { jivamukti }, { kundalini }, { restorative }, { vinyasa }, { yin }]
    }
  }
  
  
  // componentDidMount() {
  //   this.addImgs();
  // }

  // addImgs = () => {
  //   const orderedTypes = this.props.types.sort((typeA, typeB) => (typeA.name > typeB.name) ? 1 : -1);
  //   orderedTypes.forEach((type, i) => {
  //     // typeName = 
  //     type.image = this.state.typeImages[i][type.name.toLowerCase()];
  //   })
  //   this.updateTypes(orderedTypes);
  //   console.log(orderedTypes)
  //   // return orderedTypes;
  // }
  
  // updateTypes = (updatedTypes) => {
  //   this.setState({ typesWithImages: updatedTypes })
  //   // console.log(this.consoleCheck())
  // }

  handleChange = (e) => {
    this.setState({
      typeId: e.target.id
    })
    this.handleClickChange(e);
  }

  filterStudioId = (userInput) => {
    return this.props.studios.filter((studio) => {
      let studioId = studio.mainTypeOffered;
      if(studioId === userInput) {
        return studioId === userInput;
      }
    });
  }

  handleClickChange = (e) => {
    e.preventDefault()
    let userInput = parseInt(e.target.id);
    let result = this.filterStudioId(userInput);
    this.props.storeRendered(result)
  }

  render() {
    let typeName = this.props.name.toLowerCase();
    console.log(typeName)
  return (
    (<article className="yogaTypeCard scaleUpCenter">
      <img src={ `${this.props.name.toLowerCase()}` } alt={this.props.name} className="typeSmall"/>
      <h4 className='typeHeading heading'>{this.props.name}</h4>
      <h5 className='purposeHeading heading'>Purpose</h5>
      <p className='purpose'>{this.props.purpose}</p>
      {/* <h5 className='beginnerHeading heading'>Difficulty</h5> */}
      <p className='beginner'>Level of Difficulty: {this.props.beginnerFriendly ? 'Beginner friendly' : 'Advanced'}</p>
      <h5 className='posesHeading heading'>Common Poses </h5>
      <p className='poses'>{this.props.commonPoses}</p>
      <div>
        <input onClick={this.handleChange} className='findStudioBtn' type="submit" value="Find Studios" id={this.props.id} />
      </div>
    </article>)
    )
  }
}

export default TypeCard;
