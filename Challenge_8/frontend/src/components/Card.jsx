import React from 'react';
import IconUser from '../images/users.png'
import IconSetting from '../images/setting.png'
import IconCalender from '../images/calender.png'
import '../style/style.css'

const Card = (props) => {
  return (
    <>
      <div className="gambarMobil">
        <img src={props.image} />
      </div>
      <p>{props.manufacture} - {props.model}</p>
      <p className="hargaPerHari">Rp {props.rentPerDay} / hari</p>
      <p>{props.description}</p>
      <div className="orang">
        <img src={IconUser} />
        <p>{props.capacity}</p>
      </div>
      <div className="setting">
        <img src={IconSetting} />
        <p>{props.transmission}</p>
      </div>
      <div className="tahun">
        <img src={IconCalender} />
        <p>{props.year}</p>
      </div>
      <button className="btn btn-pilihMobil">Pilih Mobil</button>
    </>
  );
}

export default Card;
