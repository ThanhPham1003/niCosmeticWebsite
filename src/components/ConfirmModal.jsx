import React, {useEffect} from 'react'
import Button from '../components/Button'
const ConfirmModal = ({setIsDoneDeal, title}) => {
  const navigator = () => {
    setIsDoneDeal(false);
   window.location.replace("http://localhost:3000");
  }
  return (
    <div className="info-modal">
      <div className='info-modal__content'>
        <div className='info-modal__content__txt'>{title}</div>
        <div className='info-modal__content__button'>
          <Button size="sm" onClick={() => navigator()}>Xác nhận</Button>
        </div> 
      </div>

    </div>
  )
}

export default ConfirmModal
