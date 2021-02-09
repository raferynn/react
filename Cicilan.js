import React, {Component} from 'react';
 
class Cicilan extends Component {
    constructor() {
        super();
        this.state = {
            hasil: " ",
            nominal: 0,
            bunga: 0,
            periode: 0
        }
    }

    hitung(){
        let nominal = Number(this.state.nominal);
        let bunga = Number(this.state.bunga);
        let periode = Number(this.state.periode);

        let hasil = ( nominal + ( nominal * (bunga * 0.01 ) ) ) / periode;
        this.setState({hasil: hasil});
    }

    render(){
        return(
            <div className="App container col-sm-6">
                <br></br>
                <div className="card">
                    <div className="card-body">Cicilan Bank</div>
                </div>
                <br></br>
                <br></br>
                <div className="mb-3">

                    <label className="form-label">Masukkan Nominal Pinjaman</label>
                    <input type="number" className="form-control" id="nominal" value={this.state.nominal} onChange={ev => this.setState({ nominal: ev.target.value })}></input>

                    <br></br>

                    <label className="form-label">Masukkan Persen Bunga</label>
                    <input type="number" className="form-control" id="bunga" value={this.state.bunga} onChange={ev => this.setState({ bunga: ev.target.value })}></input>

                    <br></br>

                    <label className="form-label">Masukkan Periode</label>
                    <input type="number" className="form-control" id="periode" value={this.state.periode} onChange={ev => this.setState({ periode: ev.target.value })}></input>

                    <br></br>

                    <button onClick={() => this.hitung()} type="button" className="btn btn-info" id="hitung">Hitung</button>

                    <br></br>
                    <br></br>
                    <div className="card">
                        <div className="card-body">Jumlah Cicilan yang Harus Dibayarkan: Rp.{this.state.hasil}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cicilan;