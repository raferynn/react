import React, { Component } from 'react';

class BMI extends Component {
    constructor() {
        super();
        this.state = {
            hasil: " ",
            keterangan: " ",
            berat: 0,
            tinggi: 0
        }
    }

    hitung() {
        let berat = this.state.berat;
        let tinggi = this.state.tinggi;
        let bmi = berat / Math.pow((tinggi / 100), 2);
        this.setState({ hasil: bmi })
        if( bmi < 18.5) {
            this.setState({keterangan: "underweight"})
        } else if ( bmi >= 18.5 && bmi < 25) {
            this.setState({keterangan: "normal"})
        } else if ( bmi >= 25 && bmi < 30) {
            this.setState({keterangan: "overweight"})
        } else if ( bmi >= 30) {
            this.setState({keterangan: "obesitas:)))"})
        }
    }


    render() {
        return (
            <div className="App container col-sm-6">
                <br></br>
                <div className="card">
                    <div className="card-body">Body Mass Index</div>
                </div>
                <br></br>
                <br></br>
                <div className="mb-3">

                    <label className="form-label">Masukkan Berat Badan Anda</label>
                    <input type="number" className="form-control" id="berat" value={this.state.berat} onChange={ev => this.setState({ berat: ev.target.value })}></input>

                    <br></br>

                    <label className="form-label">Masukkan Tinggi Badan Anda</label>
                    <input type="number" className="form-control" id="tinggi" value={this.state.tinggi} onChange={ev => this.setState({ tinggi: ev.target.value })}></input>

                    <br></br>

                    <button onClick={() => this.hitung()} type="button" className="btn btn-info" id="hitung">Hitung</button>

                    <br></br>
                    <br></br>
                    <div className="card">
                        <div className="card-body">Hasil: {this.state.hasil} ({this.state.keterangan})</div>
                        <div className="card-body">Berat: {this.state.berat}kg</div>
                        <div className="card-body">Tinggi: {this.state.tinggi}cm</div>


                    </div>
                </div>
            </div>
        );
    }
}

export default BMI;