
import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'
import HeaderPendingOrders from '../components/HeaderPendingOrders';
import ListPendingOrders from '../components/ListPendingOrders';
import ListCompletedOrders from '../components/ListCompletedOrders'

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [completed, setComplated] = useState([]);
  const firebase = useContext(FirebaseContext);
  const [isPending, setIsPending] = useState(true)
  const [isUpdated, setIsUpdated] = useState(false);
  const fetchData = async () => {
    const data = await firebase.getPendingOrders();
    setOrders(data);

    const data2 = await firebase.getCompletedOrders();
    setComplated(data2)
    if(isUpdated) setIsUpdated(false);
  }

  useEffect(() =>{
    fetchData();
  }, [isUpdated])

  return (
    <div className='info-orders'>
      <div className='info-orders__selector'>
        <div className='info-orders__selector__txt' onClick={() => setIsPending(true)}>
          Đơn hàng cần xử lí
        </div>
        <div div className='info-orders__selector__txt' onClick={() => setIsPending(false)}>
          Đơn hàng đã xử lý
        </div>
      </div>
      <div className='info-orders__list'>
        <HeaderPendingOrders />
        {isPending ? (
            orders && Array.isArray(orders) && orders.map((item,index) => {
            
              return (
            <>
              <ListPendingOrders setIsUpdated={setIsUpdated} item={item} key1={index}/> 
            </>
            )
            })
          ) :(
            completed && Array.isArray(completed) && completed.map((item,index) => {
           
              return (
             <>
              <ListCompletedOrders setIsUpdated={setIsUpdated} item={item} key2={index}/> 
             </>
             )
            })
          )
        }

      </div>
    </div>
    
  )
}

export default Admin
