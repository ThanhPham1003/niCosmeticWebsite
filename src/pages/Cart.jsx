import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'
import Button from '../components/Button'
import InfoModal from '../components/InfoModal'
import ConfirmModal from '../components/ConfirmModal'

import productData from '../assets/fake-data/products'
import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [isDoneDeal, setIsDoneDeal] = useState(false);

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    const [title, setTitle] = useState('');

    // useEffect(() => {
    //     let result = cartProducts.map(item => {
    //         return item.slug + " x " + item.quantity;
    //     })
    //     console.log("hihihihi", result.toString());
    // },[])
    const textInfo= () => {
        if(totalProducts === 0) alert("Vui lòng chọn sản phẩm vào giỏ hàng")
        else setModalOpen(true)
    }

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
        let title = cartProducts.map(item => {
            return item.slug + " x " + item.quantity;
        })
        setTitle(title.toString());
    }, [cartItems])
    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền  :</span> <span>{numberWithCommas(Number(totalPrice))}</span>
                        </div>
                        <p>(chưa bao gồm phí ship và thuế)</p>
                    </div>
                    <div className="cart__info__btn">

                            <Button size="block" onClick={() => {
          textInfo();
        }}>
                                Đặt hàng
                            </Button>
                        
                        <Link to="/catalog">
                            <Button size="block">
                                Tiếp tục mua hàng
                            </Button>
                        </Link>
                        
                    </div>
                </div>
                {modalOpen && <InfoModal cartProducts={cartProducts} setIsDoneDeal={setIsDoneDeal} setOpenModal={setModalOpen} price={Number(totalPrice)} title={title}/>}
                {isDoneDeal && <ConfirmModal setIsDoneDeal={setIsDoneDeal} title="Cảm ơn bạn đã đặt hàng. Chúng mình sẽ xử lý và gửi hàng trong thời gian sớm nhất. Bạn có thể tiếp tục mua hàng tại website của chúng mình."/>}
                <div className="cart__list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </Helmet>

    )
}

export default Cart
