import React, { useState, useContext } from 'react'
import Helmet from '../components/Helmet'
import FormInput from '../components/FormInput'
import Button from '../components/Button'

import { useDispatch } from 'react-redux'
import { removeItem } from '../redux/shopping-cart/cartItemsSlide'
import { FirebaseContext } from '../context/FirebaseContext'

const OrderConfirm = ({price, title,setOpenModal, setIsDoneDeal ,cartProducts}) => {
  const firebase = useContext(FirebaseContext);
  const [values, setValues] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const newPrice = Math.ceil(price * 1.015)
  const [payment, setPayment] = useState('cod');
  const [isCk, setIsCk] = useState(false);
  //const [isDoneDeal, setIsDoneDeal] = useState(false);
  const dispatch = useDispatch()

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Tên của bạn...",
      errorMessage:"Vui lòng nhập tên của bạn",
      label: "Tên khách hàng",
      required: true
    },
    {
      id: 2,
      name: "address",
      type: "text",
      placeholder: "Địa chỉ...",
      errorMessage:"Vui lòng nhập địa chỉ của bạn",
      label:"Địa chỉ",
      required: true
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "Số điện thoại...",
      pattern: "[0-9]{10}",
      errorMessage:"Vui lòng nhập số điện thoại theo chữ số từ 0-9, bắt đầu bằng 0",
      label:"Số điện thoại",
      required: true
    },
  ]
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value});
  }




  const sendInfo = async () => {
    if(!values.name || !values.address || !values.phone) alert("Vui lòng điền đầy đủ thông tin");
    else{
      const timestamp = Math.floor(Date.now() / 1000)
      const send = await firebase.createOrder(timestamp, values.name, values.address, title, payment, values.phone, price)
      setOpenModal(false);
      setIsDoneDeal(true);
      cartProducts.map((item) => (
        dispatch(removeItem(item))
      ))
    }

    // alert("Cảm ơn bạn đã đặt hàng. Chúng mình sẽ xử lý và gửi hàng trong thời gian sớm nhất. Bạn có thể tiếp tục mua hàng tại website của chúng mình.")  
    //window.location.replace("http://localhost:3000");

  }

  return (
    <Helmet title="Xác nhận đơn hàng">
      <div className="order">
        <div className='order__text'>THÔNG TIN KHÁCH HÀNG</div>
          <form>
            {inputs.map((input) =>(
              <FormInput 
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              />
            ))}
          </form>
            
          <div className='order__payment-tittle'>Hình thức thanh toán</div>    
          <select 
            className='order__select'
            value={payment}
            onChange={(e) =>{
              const selectedPayment = e.target.value;
              setPayment(selectedPayment);
              if(selectedPayment === 'ck'){
                setIsCk(true);
              }else setIsCk(false);
            }}>
            <option value="cod">Thanh toán khi nhận hàng</option>
            <option value="ck">Chuyển khoản</option>   
          </select>
          {!isCk && <div className='order__content'>Hiện tại Tổng Cục Thuế có quyết định truy thu sao kê tài khoản liên kết với tài khoản COD GHTK. Em xin phép thu thêm 1,5% trên tổng hoá đơn theo qui định hiện hành nếu khách chọn dịch vụ thanh toán khi nhận hàng (COD).</div>} 
          {!isCk && <div className='order__content'>Đối với chuyển khoản trước khi nhận hàng bên em không thu thêm thuế.</div>}
          {!isCk && <div className='order__content__stk'>Nên giá sản phẩm sẽ là {newPrice}</div>}
          {isCk && <div className='order__content'>Vui lòng chuyển khoản theo stk:</div>}
          {isCk && <div className='order__content__stk'>  123456 Thu Thao MB Bank  </div>}
          {isCk && <div className='order__content'>Theo cú phápp: </div>}
          {isCk && <div className='order__content__stk'>{values.name}-{values.phone} </div>}
          <div className='order__button'>
            <Button size="sm" onClick={() => sendInfo()}>Xác nhận</Button>
          </div>
          
      </div>  
    </Helmet>
  )
}
export default OrderConfirm