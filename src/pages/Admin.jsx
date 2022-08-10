
import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'
import HeaderPendingOrders from '../components/HeaderPendingOrders';
import ListPendingOrders from '../components/ListPendingOrders';
import ListCompletedOrders from '../components/ListCompletedOrders'
import Helmet from '../components/Helmet'

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
    
  }

  useEffect(() =>{
    setIsUpdated(false);
    fetchData();
  },[isUpdated])

  return (
    <Helmet title="Quản lý">
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
              <ListPendingOrders isUpdated={isUpdated} setIsUpdated={setIsUpdated} item={item} key1={index}/> 
            </>
            )
            })
          ) :(
            completed && Array.isArray(completed) && completed.map((item,index) => {
           
              return (
             <>
              <ListCompletedOrders isUpdated={isUpdated} setIsUpdated={setIsUpdated} item={item} key2={index}/> 
             </>
             )
            })
          )
        }

      </div>
    </div>
    </Helmet>
  )
}

export default Admin
