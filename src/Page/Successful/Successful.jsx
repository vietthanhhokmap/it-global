import classNames from "classnames/bind";
import React from "react";
import styled from "./Successful.module.scss";
import thuexemiennam from "../../../src/components/Image/thuexemiennam.png";
import hieutao from "../../../src/components/Image/hieutao.jpg";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Successful() {
  const cx = classNames.bind(styled);
  return (
    <div className={cx("Successful")}>
      <div className="container">
        <div className={cx("Content")}>
          <div className={cx("title")}>
            <h2>Dự án thành công</h2>
            <p>Đây là những dự án mà IT-Global đã hoàn thành và thành công</p>
          </div>
          <div className={cx("card")}>
            <div className={cx("card-item")}>
              <div className={cx("card-image")}>
                <img
                  src="https://tancool.net/public/homestudent/images/vlu.png"
                  alt="Card image cap"
                  className={cx("image-vlu")}
                />
              </div>
              <div className={cx("card-body")}>
                <h5 className={cx("cart-title")}>Hồ Sơ Điện Tử</h5>
                <p className={cx("card-text")}>
                  Hồ sơ điện tử sinh viên là website có thể đăng ký kế hoạch học
                  tập, đăng ký môn học và quản lý điểm học tập cũng như lịch học
                  của sinh viên
                </p>
              </div>
              <div className={cx("card-footer")}>
                <div className={cx("card-btn")}>
                  <a href="https://tancool.net/">
                    Xem chi tiết <ArrowRightAltIcon className={cx("icon")} />
                  </a>
                </div>
              </div>
            </div>
            <div className={cx("card-item")}>
              <div className={cx("card-image")}>
                <img
                  src={thuexemiennam}
                  alt="Card image cap"
                  className={cx("image-vlu")}
                />
              </div>
              <div className={cx("card-body")}>
                <h5 className={cx("cart-title")}>Thuê xe miền nam</h5>
                <p className={cx("card-text")}>
                  Thuexemiennam là đơn vị tiên phong cung cấp các dịch vụ thuê
                  xe mang lại trải nghiệm tốt nhất cho khách hàng khi ngồi xe
                </p>
              </div>
              <div className={cx("card-footer")}>
                <div className={cx("card-btn")}>
                  <a href="https://cameraphuongnghi.com/">
                    Xem chi tiết <ArrowRightAltIcon className={cx("icon")} />
                  </a>
                </div>
              </div>
            </div>
            <div className={cx("card-item")}>
              <div className={cx("card-image")}>
                <img
                  src={hieutao}
                  alt="Card image cap"
                  className={cx("image-vlu")}
                />
              </div>
              <div className={cx("card-body")}>
                <h5 className={cx("cart-title")}>Hiếu Táo Store</h5>
                <p className={cx("card-text")}>
                  Hiếu Táo là cửa hàng bán lẻ chuyên các dòng sản phẩm Apple.
                  Chúng tôi luôn mang cho bạn những dòng sản phẩm chất lượng
                  nhất.
                </p>
              </div>
              <div className={cx("card-footer")}>
                <div className={cx("card-btn")}>
                  <a href="https://hieutao.com/">
                    Xem chi tiết <ArrowRightAltIcon className={cx("icon")} />
                  </a>
                </div>
              </div>
            </div>
            <div className={cx("card-item")}>
              <div className={cx("card-image")}>
                <img
                  src="https://cameraphuongnghi.com/public/images/logo.jpg"
                  alt="Card image cap"
                  className={cx("image-vlu")}
                />
              </div>
              <div className={cx("card-body")}>
                <h5 className={cx("cart-title")}>Camera Phương Nghi</h5>
                <p className={cx("card-text")}>
                  Các sản phẩm và giải pháp của Camera Phương Nghi thi việc giám
                  sát của quý khách giờ đây sẽ không chỉ dừng lại ở giám sát nội
                  bộ, giám sát trong phạm vị hẹp mà còn có thể giám sát từ xa
                </p>
              </div>
              <div className={cx("card-footer")}>
                <div className={cx("card-btn")}>
                  <a href="https://cameraphuongnghi.com/">
                    Xem chi tiết <ArrowRightAltIcon className={cx("icon")} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Successful;
