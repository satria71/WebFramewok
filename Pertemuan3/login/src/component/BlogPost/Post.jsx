import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = (props) =>{
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumnail Artikel"></img>
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
                <button className="btn btn-sm btn-danger" onClick={props.hapusArtikel}>Hapus</button>
            </div>
        </div>
    );
}

export default Post;