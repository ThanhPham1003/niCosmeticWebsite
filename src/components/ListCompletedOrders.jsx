import React, { useContext} from 'react'
import Button from '../components/Button'
import { FirebaseContext } from '../context/FirebaseContext'
import numberWithCommas from '../utils/numberWithCommas'
const ListCompletedOrders = (props) => {
  const item = props.item
  const firebase = useContext(FirebaseContext);
  const date = new Date(item.date*1000)

  const Delete = async () => {
    await firebase.deleteCompletedOrder(item.id);
    props.setIsUpdated(!props.isUpdated);
  }
  return (
    <div className='info-orders__item'>
      <div className="info-orders__item__txt__date">
        {date.getDate()+"/"+(date.getMonth()+1) ?? ""}
      </div>
      <div className="info-orders__item__txt__name">
        {item.name ?? ""}
      </div>
      <div className="info-orders__item__txt__normal">
        {item.phone ?? ""}
      </div>
      <div className="info-orders__item__txt__name">
        {item.address ?? ""}
      </div>
      {/* <div className="info-orders__item__txt__normal">
        {item.payment ?? ""}
      </div> */}
      <div className="info-orders__item__txt__order-name">
        {item.order ?? ""}
      </div>
      <div className="info-orders__item__txt__normal">
        {numberWithCommas(item.price) ?? ""}
      </div>
      <div className="info-orders__item__btn">
        <Button size="sm" onClick={() => Delete()}>
          Xóa
        </Button>
      </div>
    </div>
  )
}

export default ListCompletedOrders
