import React from 'react'

const HeaderPendingOrders = () => {
  return (
    <div className='info-orders__item'>
      <div className="info-orders__item__txt__date">
        Ngày
      </div>
      <div className="info-orders__item__txt__name">
        Tên Khách Hàng
      </div>
      <div className="info-orders__item__txt__normal">
        SĐT
      </div>
      <div className="info-orders__item__txt__name">
        Địa Chỉ
      </div>
      {/* <div className="info-orders__item__txt__normal">
        Thanh Toán
      </div> */}
      <div className="info-orders__item__txt__order-name">
        Tên Mặt Hàng
      </div>
      <div className="info-orders__item__txt__normal">
        Tổng tiền
      </div>
      <div className="info-orders__item__txt__normal">
        Tình Trạng
      </div>
    </div>
  )
}

export default HeaderPendingOrders
