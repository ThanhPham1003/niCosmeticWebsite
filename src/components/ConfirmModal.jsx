import React from 'react'
import Button from '../components/Button'
import { Link} from 'react-router-dom'
const ConfirmModal = ({setIsDoneDeal, title}) => {
  const navigator = () => {
    setIsDoneDeal(false);
  }
  return (
    <div className="info-modal">
      <div className='info-modal__content'>
        <div className='info-modal__content__txt'>{title}</div>
        <div className='info-modal__content__button'>
          <Link to="/">
            <Button size="sm" onClick={() => navigator()}>Xác nhận</Button>
          </Link>
        </div> 
      </div>

    </div>
  )
}

export default ConfirmModal
