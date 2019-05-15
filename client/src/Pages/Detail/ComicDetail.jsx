import React from 'react';

const comicdetail = (props) => {
    return (
        <div className="row">
            <table className="col m12">
                    <tr>
                        <td className="col m2">Đánh giá:</td>
                        <td className="col m10">{props.rating}</td>
                    </tr><br/>
                    <tr>
                        <td className="col m2">Tác giả:</td>
                        <td className="col m10">{props.author}</td>
                    </tr><br/>
                    <tr>
                        <td className="col m2">Hoạ sĩ:</td>
                        <td className="col m10">{props.artist}</td>
                    </tr><br/>
                    <tr>
                        <td className="col m2">Thể loại:</td>
                        <td className="col m10">{props.genre}</td>
                    </tr><br/>
                    <tr>
                        <td className="col m2">Xuất bản:</td>
                        <td className="col m10">{props.publisher}</td>
                    </tr><br/>
                    <tr>
                        <td className="col m2">Trạng thái:</td>
                        <td className="col m10">{props.status}</td>
                    </tr><br/>
            </table>
        </div>
    );
}

export default comicdetail;