import React, {useEffect, useState, useContext} from 'react'
import { FirebaseContext } from '../context/FirebaseContext'
import Button from '../components/Button'
const ListPendingOrders = (props) => {
  const [item, setItem] = useState(props.item)
  const firebase = useContext(FirebaseContext);
  const date = new Date(item.date*1000)
  const setCompleted = async () => {
    console.log("55555")
    const send = await firebase.createCompletedOrder(item.date,item.name, item.address,item.order, item.payment, item.phone, item.price )
    const dlt = await firebase.deleteOrder(item.id);
    props.setIsUpdated(true);

  }
  const Delete = async () => {
    const dlt = await firebase.deleteOrder(item.id);
    props.setIsUpdated(true);
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
      <div className="info-orders__item__txt__normal">
        {item.payment ?? ""}
      </div>
      <div className="info-orders__item__txt__order-name">
        {item.order ?? ""}
      </div>
      <div className="info-orders__item__txt__normal">
        {item.price ?? ""}
      </div>
      <div className="info-orders__item__btn">
        <Button size="sm" onClick={() => setCompleted()}>
          Hoàn Thành
        </Button>
        <Button size="sm" onClick={() => Delete()}>
          Xóa
        </Button>
      </div>
    </div>
  )
}

export default ListPendingOrders
