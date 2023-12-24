import React, { useState } from 'react';
import { allCars } from '../store/actions/car-actions'
import { connect } from 'react-redux'
import '../style/style.css'

const SearchBox = (props) => {
  const [tipeDriver, setTipeDriver] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktuJemput, setWaktuJemput] = useState("");
  const [jlhPenumpang, setPenumpang] = useState("");
  const handleSubmit = () => {
    let ObjCar = {
      tanggal: tanggal,
      jlhPenumpang: jlhPenumpang
    }

    props.allCars(ObjCar)
  }

  return (
    <>
      <div id="mySearch">
        <div class="container-search">
          <div class="input-driver">
            <label for="tipe-driver">Tipe Driver</label>
            <div class="list-tipe-driver">
              <i class="fa-solid fa-angle-down"></i>
              <select name="tipe-driver" id="tipe-driver" onChange={(e) => setTipeDriver(e.target.value)}>
                <option selected disabled hidden>Pilih Tipe Driver</option>
                <option value="1">Dengan Sopir</option>
                <option value="0">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>
          </div>
          <div class="input-tanggal">
            <label for="pilih-tanggal">Tanggal</label>
            <div class="tanggal">
              <input type="date" name="pilih-tanggal" id="pilih-tanggal" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
            </div>
          </div>
          <div class="input-waktuJemput">
            <label for="pilih-waktu">Waktu Jemput/Ambil</label>
            <div class="waktu">
              <i class="fa-solid fa-angle-down"></i>
              <select name="pilih waktu" id="pilih-waktu" onChange={(e) => setWaktuJemput(e.target.value)}>
                <option selected disabled hidden>Pilih Waktu</option>
                <option value="08:00">08:00 WIB</option>
                <option value="09:00">09:00 WIB</option>
                <option value="10:00">10:00 WIB</option>
                <option value="11:00">11:00 WIB</option>
                <option value="12:00">12:00 WIB</option>
              </select>
            </div>
          </div>
          <div class="input-penumpang">
            <label for="jumlah-penumpang">Jumlah Penumpang (optional)</label>
            <div class="list-penumpang">
              <i class="fa-solid fa-user-group"></i>
              <input type="text" name="jumlah-penumpang" id="jumlah-penumpang" placeholder="Jumlah Penumpang" onChange={(e) => setPenumpang(e.target.value)} />
            </div>
          </div>
          <div class="cari-mobil">
            <button type="button" id="search-cars" class="btn btn-limegreen btn-cariMobil" onClick={() => handleSubmit()}>Cari Mobil</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(null, { allCars })(SearchBox);
