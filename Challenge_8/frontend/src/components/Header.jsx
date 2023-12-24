import React from 'react';
import { Link } from 'react-router-dom';
import Mercedes from '../images/mercedes-car.png'
import '../style/style.css'

const Header = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-5 desc-header'>
          <p className='title'>Sewa & Rental Mobil Terbaik di <br />kawasan (Lokasimu)</p>
          <p className='article'>Selamat datang di Binar Car Rental. Kami menyediakan mobil berkualitas <br />terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br />untuk sewa mobil selama 24 jam.</p>
          <Link to={'/cars'}><button type="button" id="button-sewa"
            className="btn btn-limegreen btn-sewa">Mulai Sewa Mobil</button></Link>
        </div>
        <div className='col-7 img-header'>
          <div className='bg-img-header'>
            <img src={Mercedes} />
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
