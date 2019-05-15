import React from 'react';
import Header from './Basic/NavBar';
import Footer from './Basic/Footer';
import ComicBox from './ReadComic/ComicBox';
import ComicNav from './ReadComic/ComicNav';

const readcomic = () => {
    return (
        <div>
            <div className="container" >
            <Header />
            <br />
            <ComicNav comicName="Infinity crown" chapter="1"/>
            <br /><br />
            <ComicBox pic="https://i.kym-cdn.com/photos/images/original/001/414/042/1d4.png"/>
            </div>
            <br/>
            <Footer />
        </div>
    );
}

export default readcomic;