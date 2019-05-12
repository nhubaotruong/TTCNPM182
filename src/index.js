import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SumComment from "./Comment/SumComment";
import ReactStars from "./Rating/Rating";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<div>
    <div className="container">
    <div className="row">
    <div className="col s2"><h5>Đánh giá: </h5> </div>
      <div className="col s4"><ReactStars /></div>
    </div>
        {/* <ReactStars/>> */}
    </div>
    <SumComment />
</div>, document.getElementById("root"));
registerServiceWorker();
