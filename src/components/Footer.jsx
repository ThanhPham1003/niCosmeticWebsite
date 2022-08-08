import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/HeaderLogo.jpg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={2}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    {/* <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>0123456789</strong>
                            </p>
                        </div>
                    </div> */}
                    <div>
                        <div className="footer__title">
                        🌱 Chuyên mỹ phẩm  - Thực phẩm chức năng
                        </div>
                        <div className="footer__title">
                        👉 Cam kết chính hãng 1OO%, Fake hoàn 2OO% giá trị sản phẩm ❌
                        </div>
                        <div className="footer__title">
                        🏡 Địa chỉ: đường DD6 , Tân Hưng Thuận Q12
                        </div>
                        <div className="footer__title">
                        👉 Instagram: @thuthao.order
                        </div>
                        <div className="footer__title">
                        👉 Tiktokshop: 
                            <a className="footer__link" href='https://www.tiktok.com/@nicosmetic_skincare'>
                            www.tiktok.com/@nicosmetic_skincare
                            </a> 
                        </div>
                        
                        <div className="footer__title">
                        👉 Group săn sale hằng ngày cho khách lẻ: 
                        
                            <a className="footer__link" href='https://www.facebook.com/groups/301457590921228/'>
                            https://www.facebook.com/groups/301457590921228/
                            </a>
                        </div>
                        
                        <div className="footer__title">
                        ☎️  Nhóm sỉ , ctv:                         
                        <a className="footer__link" href='https://zalo.me/g/dknqgh163'>https://zalo.me/g/dknqgh163</a>
                        </div>

                        
                        {/* <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div> */}
                    </div>
                    {/* <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div> */}
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <div className="footer__slogan">
                            Selling For Fun. Customer is The God!
                        </div>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
