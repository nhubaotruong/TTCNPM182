import React,{Component} from 'react';

class navbar extends Component{
	constructor(){
		super();
		this.state = {
			comicName : " "
		}
		this.onChange = this.onChange.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	render(){
    var url = "/search" + "?" + "c=" + this.state.comicName;
    return (
      <nav className='grey darken-3'>
          <div className='brand-logo'>
            <ul className='right'>
              <li><b>Comic VN</b></li>
              <li><a href='./home' style={{padding: '0'}}><img src={"logo.png"} alt="logo" height = "63px"/></a></li>
            </ul>
            </div>
            <ul className='right'>
              <li><a href='./signin' id="login">Login</a></li>
              <li>
              <ul>
                <li><input type="search" results="5" autoSave="some_unique_value" name="comicName" autoComplete="off" onChange={this.onChange} aria-label="Search box" placeholder=" Search..." className="white-text"/></li>
                <li><a href={url}><i className="material-icons search-icon">search</i></a></li>
              </ul> 
              </li>
            </ul>
      </nav>);
	}
}
export default navbar;