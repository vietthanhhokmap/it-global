import styled from './Footer.module.scss'
import classNames from 'classnames/bind';

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import PlaceSharpIcon from '@mui/icons-material/PlaceSharp';

import icon from "../../Image/icon.svg";
function Footner() {

    const cx = classNames.bind(styled)
    
    return (  
        <div className={cx('footer')}>
            <div className="container padding">
                <div className={cx('content')}>
                    <div className={cx('item')}>
                        <img className={cx('logo-footer')} src={icon} alt="" />
                        <div className={cx('margin-top')}>
                                <div>
                                    <p>Công ty TNHH Giải pháp Công nghệ IT-Global</p>
                                    <p>Mr.Tân: 0987613161</p>
                                </div>
                                <div className={cx('icons')}>
                                    <ul>
                                        <li><InstagramIcon className={cx('icon')}/></li>
                                        <li><YouTubeIcon  className={cx('icon')}/></li>
                                        <li><GoogleIcon className={cx('icon')}/></li>
                                        <li><FacebookOutlinedIcon className={cx('icon')}/></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('flex')}> <h3>Dịch Vụ</h3></div>
                        <div className={cx('service')}>
                            <div className={cx('service-item')}>
                                <ul>
                                    <li><p>Thiết kế website</p></li>
                                    <li><p>Lập trình ứng dụng di động</p></li>
                                    <li><p>Tư vấn - thiết kế phần mềm</p></li>
                                </ul>
                            </div>
                            <div className={cx('service-item')}>
                                <ul>
                                    <li><p>Dự án</p></li>
                                    <li><p>Hỏi đáp</p></li>
                                    <li><p>Liên hệ</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('flex')}> <h3>Liên Hệ</h3></div>
                        <div className={cx('contact')}>
                            <ul>
                                <li>
                                    <LocalPhoneOutlinedIcon  className={cx('icon-contact')}/>
                                    <p>+84 987.613.161</p>
                                </li>
                                <li>
                                    <MailOutlineSharpIcon className={cx('icon-contact')}/>
                                    <a href="mailto:info@it-global.net" >info@it-global.net</a>
                                </li>
                                <li>
                                    <PlaceSharpIcon  className={cx('icon-contact')}/>
                                    <p>2/1/15 đường 40, F Hiệp Bình Chánh, Tp. Thủ Đức</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footner;