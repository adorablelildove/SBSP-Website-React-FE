import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FunFact extends Component {

    render() {

        let publicUrl = 'http://adminsbsp.sbsp-penyengatolak.store/'

    return   <section className="fun-fact-area text-center pd-top-100" style={{background: 'url('+publicUrl+'assets/img/fact/bg.png)'}}>
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-fact-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/fact/icon1.png"} alt="img" />
			          </div>
			          <h2><span className="counter">1000</span><span>++</span></h2>
			          <p className="fact-title">Kunjungan</p>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-fact-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/fact/icon2.png"} alt="img" />
			          </div>
			          <h2><span className="counter">100</span><span>++</span></h2>
			          <p className="fact-title">Produk</p>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-fact-wrap style-3">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/fact/icon3.png"} alt="img" />
			          </div>
			          <h2><span className="counter">18</span></h2>
			          <p className="fact-title">Anggota</p>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-fact-wrap style-4">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/fact/icon4.png"} alt="img" />
			          </div>
			          <h2><span className="counter">100</span><span>++</span></h2>
			          <p className="fact-title">Produk Terjual</p>
			        </div>
			      </div>
			    </div>
			  </div>      
			</section>



        }
}

export default FunFact