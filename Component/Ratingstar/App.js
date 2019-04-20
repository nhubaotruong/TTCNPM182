import React from 'react';
// import logo from './logo.svg';
// import './App.css';

//phan them vao de hien thuc Rating
import ReactStars from './Rating/Rating';
//ngoài ra thêm file Rating.js ở thư mục Rating để định nghĩa Component và file Rating.js để fix lỗi khi chọn sô sao!
//phan them vao de hien thuc Rating
//------------------------------dinh nghia thuoc tinh cho Component Rating.
const atribute_Rating = {
  size: 30,
  count: 5,
  half: false,
  value: 0,
  onChange: newValue => {
    console.log(`Example 3: new value is ${newValue}`)
  }
}
//------------------------------dinh nghia thuoc tinh cho Component Rating.
class App extends React.Component {
  render() {
    return (
      <div>
          <h3>Đánh giá chất lượng web</h3>
          {/* sử dụng Component Rating */}
          <ReactStars {...atribute_Rating}/> 
          {/* sử dụng Component Rating */}
      </div>
    );
  }
}

export default App;
