import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostMahasiswa = (props) =>{
    return(
        <div className="mahasiswa">
            <div className="konten-mahasiswa">
                <table border='0'>
                    <tr>
                        <td>NIM</td>
                        <td>:</td>
                        <td><div className="nim-mahasiswa">{props.nim}</div></td>
                    </tr>
                    <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td><div className="nama-mahasiswa">{props.nama}</div></td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>:</td>
                        <td><div className="alamat-mahasiswa">{props.alamat}</div></td>
                    </tr>
                    <tr>
                        <td>Hp</td>
                        <td>:</td>
                        <td><div className="hp-mahasiswa">{props.hp}</div></td>
                    </tr>
                    <tr>
                        <td>Angkatan</td>
                        <td>:</td>
                        <td><div className="angkatan-mahasiswa">{props.angkatan}</div></td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>:</td>
                        <td><div className="status-mahasiswa">{props.status}</div></td>
                    </tr>
                </table>
                <button className="btn btn-sm btn-danger" onClick={props.hapusMahasiswa}>Hapus</button>
            </div>
        </div>
    );
}

export default PostMahasiswa;