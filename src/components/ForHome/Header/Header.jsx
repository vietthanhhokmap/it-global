import React from "react";
import styled from './Header.module.scss'
import classNames from 'classnames/bind';



function Header() {
    const cx = classNames.bind(styled)
    return ( 
        <div className={cx('Header-Home')}>
            <div className="container">
                <div className={cx('title')} >
                    <div className={cx('title-sub')} >
                        <h1> Xây dựng - Thiết kế - Lập trình Webiste & Ứng dụng di động </h1>
                        <p>
                            Điều đặc biệt nhất khi thiết kế website ở <span className={cx('strong')}> IT-Global</span> là bạn không cần phải lo lắng về trình độ kỹ thuật, 
                            thẩm mỹ thiết kế hay hậu mãi, bảo trì, bảo hành, bảo mật… 
                            Tất cả những gì bạn cần chuẩn bị một ý tưởng rõ ràng để cùng chúng tôi trao đổi tư vấn cho bạn..
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
