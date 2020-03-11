import React, { Component } from 'react';
import gambar from './gambar.jpg';

class Biodata extends Component{
    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                <div class="Container-fluid">
                <h2>Biodata</h2> 
                <img src={gambar} height="250" width="200" align="center"/><br/>
                    <div class="row">
                        <div class="col-sm-4">
                            Nama
                        </div>
                        <div class="col-sm-4">
                            :
                        </div>
                        <div class="col-sm-4">
                            Satria Putra Sabana
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            Tempat Tanggal Lahir
                        </div>
                        <div class="col-sm-4">
                            :
                        </div>
                        <div class="col-sm-4">
                            Magetan, 3 Februari 1999
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            Alamat
                        </div>
                        <div class="col-sm-4">
                            :
                        </div>
                        <div class="col-sm-4">
                            Pakis Malang
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Biodata;