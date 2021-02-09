import React, { Component } from 'react';

class Kasir extends Component {
    constructor() {
        super();
        this.state = {
            awal: 0,
            ppn: 0,
            diskon: 0,
            hasil: 0
        }
    }

    hitung(){
        let awal = Number(this.state.awal);
        let ppn  = Number(this.state.ppn);
        let diskon = Number(this.state.diskon);

        let hasil = awal + (awal * (ppn * 0.01) ) - (awal * (diskon * 0.01) )
        this.setState({hasil: hasil})
    }

    render() {
        return (
            <div className="App container col-sm-6">
                <br></br>
                <div className="card">
                    <div className="card-body">Hitung Harga Akhir</div>
                </div>
                <br></br>
                <br></br>
                <div className="mb-3">

                    <label className="form-label">Masukkan Harga Awal</label>
                    <input type="number" className="form-control" id="awal" value={this.state.awal} onChange={ev => this.setState({ awal: ev.target.value })}></input>

                    <br></br>

                    <label className="form-label">Masukkan Persen PPN</label>
                    <input type="number" className="form-control" id="ppn" value={this.state.ppn} onChange={ev => this.setState({ ppn: ev.target.value })}></input>

                    <br></br>

                    <label className="form-label">Masukkan Persen Diskon</label>
                    <input type="number" className="form-control" id="diskon" value={this.state.diskon} onChange={ev => this.setState({ diskon: ev.target.value })}></input>

                    <br></br>

                    <button onClick={() => this.hitung()} type="button" className="btn btn-info" id="hitung">Hitung</button>

                    <br></br>
                    <br></br>
                    <div className="card">
                        <div className="card-body">Harga Akhir: Rp.{this.state.hasil}</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Kasir;