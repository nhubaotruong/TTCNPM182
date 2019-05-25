import React,{Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './s.css';

class navbar extends Component{
	constructor(){
		super();
		this.state = {
      comicName : " ",
      username : ""
		}
    this.onChange = this.onChange.bind(this);
    this.LogOut = this.LogOut.bind(this);
  }

  // componentDidMount(){
  //   const user = localStorage.User
  //   const decoded = jwt_decode(user)
  //   this.setState({
  //     username : decoded.username
  //   })
  // }

	onChange(e){
		this.setState({
			[e.target.name] : e.target.value
		})
  }
  
  LogOut(e){
    e.preventDefault()
    localStorage.removeItem('User')
    window.location = "/home";
  }

  disablename = () => {
    document.getElementById("name").selected = false;
  }

	render(){
    var url = "/search" + "?" + "c=" + this.state.comicName;
    const signinsignuplink = (
      <ul className="navbar-nav">
        <li className="nav-item" >
          <a href ="/signin" className ="nav-link">
            Đăng nhập
          </a>
        </li>
        <li className="nav-item" >
          <a href ="/signup" className ="nav-link">
            Đăng kí
          </a>
        </li>
      </ul>
    )


    const userlink = (
      <ul className="navbar-nav">
        <li className="nav-item" >
          <a href ="/storyboard" className ="nav-link">
            {
              localStorage.User ? JSON.parse(localStorage.getItem("User")).username : ""
            }
          </a>
        </li>
        <li className="nav-item" >
          <a href="" onClick = {this.LogOut} className="nav-link">
            Đăng xuất
          </a>
        </li>
      </ul>
    )

    

    return (
      <nav className='grey darken-3'>
          <div className='brand-logo'>
            <ul className='right'>
              <li><b>Comic VN</b></li>
              <li><a href='./home' style={{padding: '0'}}><img src={"logo.png"} alt="logo" height = "63px"/></a></li>
            </ul>
            </div>
            <ul className='right'>
              <li>
                {localStorage.User ? userlink : signinsignuplink}
              </li>
                <li>
                  <table className="striped">
                    <tr>
                      <td style={{padding:'0'}}><input type="search" results="5" autoSave="some_unique_value" name="comicName" autoComplete="off" onChange={this.onChange} aria-label="Search box" placeholder=" Tìm kiếm ..." className="white-text"/></td>
                      <td style={{padding:'8px 0 0 0'}}>
                        <div className="input-field" >
                          <select name="searchby" id="searchby" multiple onChange={this.disablename}>
                        <option value="name" selected id="name">Tên</option>
                        <optgroup label="Thể loại">
                        <option value="1">Action</option>
                        <option value="2">Adventure</option>
                        <option value="3" >Comedy</option>
                        <option value="4" >Comic</option>
                        <option value="5" >Drama</option>
                        <option value="6" >Game</option>
                        <option value="7" >Horror</option>
                        <option value="8" >Magic</option>
                        <option value="9" >Mecha</option>
                        <option value="10">Mystery</option>
                        <option value="11">Romance</option>
                        <option value="12">Sci-fi</option>
                        <option value="13">Sports</option>
                        <option value="14">Supernatural</option>
                        <option value="15">Tragedy</option>
                        </optgroup>
                      </select>
                      </div></td>
                    </tr>
                  </table>
                </li>
                <li><a href={url}><i className="material-icons search-icon">search</i></a></li>

            </ul>
      </nav>);
      
	}
}
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});
export default navbar;