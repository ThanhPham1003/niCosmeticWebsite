import React from 'react'

import OrderConfirm from '../pages/OrderConfirm'
import Button from './Button'

const InfoModal = ({setOpenModal, setIsDoneDeal, price, title, cartProducts}) => {
  // const [isDoneDeal, setIsDoneDeal] = useState(false);
  // useEffect(() => {
  //   console.log("444444", isDoneDeal)
  // }, [])
  return (
    <div className="info-modal">
      <div className="info-modal__content">
        <OrderConfirm price={price} title={title} setOpenModal={setOpenModal} setIsDoneDeal={setIsDoneDeal} cartProducts={cartProducts}/>
        <div className="info-modal__content__close">
          <Button size="sm" onClick={() => setOpenModal(false)}>Đóng</Button>
        </div>
      </div>
      {/* <div className="info-modal__content">
        {isDoneDeal && <ConfirmModal setIsDoneDeal={setIsDoneDeal} title="Cảm ơn bạn đã đặt hàng. Chúng mình sẽ xử lý và gửi hàng trong thời gian sớm nhất. Bạn có thể tiếp tục mua hàng tại website của chúng mình."/>}
      </div>
  */}
    </div>
  )
}

export default InfoModal

