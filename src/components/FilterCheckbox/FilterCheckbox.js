import React from "react";
import './FilterCheckbox.css';

class FilterCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ isChecked: !this.state.isChecked })
  }

  render () {
    return (
      <label className="switch">
        <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange} />
        <div className="slider"></div>
      </label>
    );
  }
}

export default FilterCheckbox;

// function FilterCheckbox() {
//   const [isChecked, setIsChecked] = React.useState(false);

  // function handleChange(e) {
  //   e.preventDefault();
  //   if(isChecked === true ){
  //     setIsChecked(false)
  //   } else {
  //     setIsChecked(true)
  //   }
  // }

  // React.useEffect(() => {
  //   console.log(isChecked)
  // }, [isChecked]);

//   return (
//     <label className="switch">
//       <input 
//       type="checkbox" 
//       value={isChecked} 
//       onChange={handleChange}
//       />
//       <div className="slider"></div>
//     </label>
//   );
// }

// export default FilterCheckbox;


// function FilterCheckbox() {
//   return (
//     <form className="checkbox">
//       <label className="checkbox__switch">
//         <input type="checkbox"/>
//         <span className="checkbox__slider"></span>
//       </label>
//       <h5 className="checkbox__title">Короткометражки</h5>
//     </form>
//   )
// }

// export default FilterCheckbox;