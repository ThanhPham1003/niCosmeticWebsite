import React from 'react'
import logo from '../assets/images/MainLogo.png'
const Beacons = () =>{
  const Facebook = () => {
    window.location.replace("https://www.facebook.com/thuthao.275")
  }
  const Tiktok = () => {
    window.location.replace("https://www.tiktok.com/@nicosmetic_skincare")
  }
  const GroupFacebook = () => {
    window.location.replace("https://www.facebook.com/groups/301457590921228/")
  }
  const GroupZalo = () => {
    window.location.replace("https://zalo.me/g/dknqgh163")
  }
  return(
    <div className='beacons'>
      <div className='beacons__form'>
        <div className='beacons__form__logo'>
          <img src={logo} alt="" />
        </div>
        <div className='beacons__form__text'>
          @nicosmetic
        </div>
        <div className='beacons__form__info' onClick={() => Tiktok()}>
          <div className='beacons__form__info__icon'>
            <i class='bx bxl-tiktok'></i>
          </div>
          <div className='beacons__form__info__text'>TikTok</div>
          
        </div>
        <div className='beacons__form__info' onClick={() => Facebook()}>
          <div className='beacons__form__info__icon'>
            <i class='bx bxl-meta' ></i>
          </div>
          <div className='beacons__form__info__text'>Facebook</div>
        </div>
        <div className='beacons__form__info' onClick={() => GroupFacebook()}>
          <div className='beacons__form__info__icon'>
            <i class='bx bxl-facebook-circle'></i>
          </div>
          <div className='beacons__form__info__text'>Group săn sale cho khách lẻ</div>
        </div>
        <div className='beacons__form__info' onClick={() => GroupZalo()}>
          <div className='beacons__form__info__icon'>
            <i class='bx bxs-group' ></i>
          </div>
          <div className='beacons__form__info__text'>Nhóm sỉ , ctv</div>
        </div>
      </div>
    </div>
  )
}
export default Beacons