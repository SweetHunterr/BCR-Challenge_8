import React from 'react';
import ImgService from '../images/img_service.png'
import IconCheck from '../images/ceklis.png'
import IconJempol from '../images/tombol_jempol.png'
import IconAward from '../images/award.png'
import IconClock from '../images/jam.png'
import IconSale from '../images/sale.png'
import Profile_1 from '../images/photo_1.png'
import Profile_2 from '../images/photo_2.png'
import IconRate from '../images/rate.png'
import '../style/style-home.css'
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <>
      {/* Content - 1 */}
      <div className="container-fluid" id="our-services">
        <div className="row">
          <div className="col-6 img-service">
            <img src={ImgService} />
          </div>
          <div className="col-6 description">
            <h2 className="title-desc">Best Car Rental for any kind of trip in <br />(Lokasimu)!</h2>
            <p className="article-desc">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
              <br />murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              <br />pelayanan terbaik untuk
              perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul>
              <li><img src={IconCheck} />
                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
              </li>
              <li><img src={IconCheck} />
                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
              </li>
              <li><img src={IconCheck} />
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
              </li>
              <li><img src={IconCheck} />
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
              </li>
              <li><img src={IconCheck} />
                <p>Layanan Airport Transfer / Drop In Out</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content - 2 */}
      <div className="container-fluid" id="why-us">
        <div className="why-us">
          <h3>Why Us?</h3>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="desc-why-us">
          <div className="item-1">
            <div className="bg-img-item-1">
              <img src={IconJempol} />
            </div>
            <h6>Mobil Lengkap</h6>
            <p>Tersedia banyak pilihan mobil, <br />kondisi masih baru, bersih dan
              <br />terawat</p>
          </div>
          <div className="item-2">
            <div className="bg-img-item-2">
              <img src={IconSale} />
            </div>
            <h6>Harga Murah</h6>
            <p>Harga murah dan bersaing, bisa <br />bandingkan harga kami dengan
              <br />rental mobil lain</p>
          </div>
          <div className="item-3">
            <div className="bg-img-item-3">
              <img src={IconClock} />
            </div>
            <h6>Layanan 24 Jam</h6>
            <p>Siap melayani kebutuhan Anda <br />selama 24 jam nonstop. Kami juga
              <br />tersedia di akhir minggu
            </p>
          </div>
          <div className="item-4">
            <div className="bg-img-item-4">
              <img src={IconAward} />
            </div>
            <h6>Sopir Profesional</h6>
            <p>Sopir yang profesional, <br />berpengalaman, jujur, ramah dan <br />selalu tepat waktu</p>
          </div>
        </div>
      </div>

      {/* Content - 3 */}
      <div className="container-fluid" id="testimonial">
        <div className="testimonial">
          <h3>Testimonial</h3>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
      </div>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="row">
              <div className="col-4">
                <div className="box-testimonial">
                  <div className="photo">
                    <img src={Profile_1} />
                  </div>
                  <div className="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p className="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="box-testimonial">
                  <div className="photo">
                    <img src={Profile_2} />
                  </div>
                  <div className="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p className="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="box-testimonial">
                  <div className="photo">
                    <img src={Profile_1} />
                  </div>
                  <div className="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p className="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row">
              <div className="col-4">
                <div className="box-testimonial">
                  <div className="photo">
                    <img src={Profile_1} />
                  </div>
                  <div className="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p className="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="box-testimonial">
                  <div className="photo">
                    <img src={Profile_2} />
                  </div>
                  <div className="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p className="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="box-testimonial">
                  <div className="photo">
                    <img src={Profile_1} />
                  </div>
                  <div className="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p className="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row">
              <div className="col-4">
                <div className="box-testimonial">
                  <div className="photo">
                    <img src={Profile_1} />
                  </div>
                  <div className="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p className="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="box-testimonial">
                  <div className="photo">
                    <img src={Profile_2} />
                  </div>
                  <div className="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p className="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="box-testimonial">
                  <div className="photo">
                    <img src={Profile_1} />
                  </div>
                  <div className="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p className="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-btn-carousel">
        {/* <button className="carousel-control cstm-btn" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon btn-crsl" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control cstm-btn" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span className="carousel-control-next-icon btn-crsl" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

      {/* Content - 4 */}
      <div className="container-fluid">
        <div className="bg-desc-sewa">
          <div className="desc-sewa">
            <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              <br />tempor incididunt ut
              labore et dolore magna aliqua.</p>
            <Link to={'/cars'}><button type="button" className="btn btn-limegreen">Mulai Sewa Mobil</button></Link>
          </div>
        </div>
      </div>

      {/* Content - 5 */}
      <div className="container-fluid faq" id="faq">
        <div className="row faq-container">
          <div className="col-5 faq-title">
            <h5>Frequently Asked Question</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="col-7 faq-list">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item my-accordion">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed cstm-btn-accordion" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body cstm-body-accordion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem amet sequi ipsa
                    ex, dolorum mollitia exercitationem perspiciatis, cumque quam beatae fugiat rerum
                    quae hic distinctio? Maiores voluptas minus deleniti.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-accordion">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed cstm-btn-accordion" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body cstm-body-accordion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem amet sequi ipsa
                    ex, dolorum mollitia exercitationem perspiciatis, cumque quam beatae fugiat rerum
                    quae hic distinctio? Maiores voluptas minus deleniti.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-accordion">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed cstm-btn-accordion" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body cstm-body-accordion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem amet sequi ipsa
                    ex, dolorum mollitia exercitationem perspiciatis, cumque quam beatae fugiat rerum
                    quae hic distinctio? Maiores voluptas minus deleniti.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-accordion">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed cstm-btn-accordion" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                    aria-controls="collapseFour">
                    Apakah ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body cstm-body-accordion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem amet sequi ipsa
                    ex, dolorum mollitia exercitationem perspiciatis, cumque quam beatae fugiat rerum
                    quae hic distinctio? Maiores voluptas minus deleniti.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-accordion">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed cstm-btn-accordion" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                    aria-controls="collapseFive">
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body cstm-body-accordion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem amet sequi ipsa
                    ex, dolorum mollitia exercitationem perspiciatis, cumque quam beatae fugiat rerum
                    quae hic distinctio? Maiores voluptas minus deleniti.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
