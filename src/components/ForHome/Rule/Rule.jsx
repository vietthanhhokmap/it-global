import React from "react";
import styled from './Rule.module.scss'
import classNames from 'classnames/bind';

import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';

function Rule() {

    const cx = classNames.bind(styled)

    return ( 
        <div className={cx('Rule')}>
             <div className="container">
                <div className={cx('Content')}>
                    <div className={cx('title')}>
                        <h2>Nguyên Tắc Làm Việc Của Chúng Tôi</h2>
                        <p>
                            Chúng tôi chuyên hỗ trợ tư vấn, thiết kế và xây dựng thương hiệu cho các doanh nghiệp, giúp doanh nghiệp sở hữu
                            những thương hiệu độc quyền và thu hút khách hàng. IT-Global nỗ lực mang đến cho Khách hàng các giải pháp hiệu
                            quả với chi phí tiết kiệm và hỗ trợ một cách nhanh chóng trong thời đại công nghệ số.
                        </p>
                    </div>
                    <div  className={cx('Rule-item')}>
                        <div className={cx('item')}>
                            <SecurityOutlinedIcon className={cx('icon')}/>
                            <h4>
                                SỬ DỤNG CÔNG NGHỆ VÀ NGÔN NGỮ MẠNH MẼ
                            </h4>
                            <p>
                                Ứng dụng các công nghệ tiên tiến. Quy trình kiểm tra chất lượng sản phẩm chặt chẽ trước khi bàn giao.
                            </p>
                        </div>
                        <div className={cx('item')}>
                            <PhoneAndroidOutlinedIcon className={cx('icon')}/>
                            <h4>
                                HIỂN THỊ TỐT TRÊN MỌI THIẾT BỊ DI ĐỘNG
                            </h4>
                            <p>
                                Xu hướng khách hàng sử dụng di động ngày càng nhiều và website học trực tuyến luôn được khách hàng tận dụng để học trong thời gian di chuyển vì vậy đây là tính năng cần được tối ưu ngay từ đầu.                            
                            </p>
                        </div>
                        <div className={cx('item')}>
                            <StarBorderPurple500OutlinedIcon className={cx('icon')}/>
                            <h4>
                                GIAO DIỆN ĐƯỢC THIẾT KẾ RIÊNG VÀ ĐỘC QUYỀN
                            </h4>
                            <p>
                                Chúng tôi biết được mỗi trung tâm là một style khác nhau vì vậy website cũng vậy chúng tôi không thể sử dụng chung một giao diện cho nhiều website khác nhau.                            
                            </p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
}
export default Rule;
