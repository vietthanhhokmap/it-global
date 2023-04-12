import React from "react";
import { useState } from "react";
import classNames from "classnames/bind";
import styled from "./QandA.module.scss";
import QandAimg from "../../components/Image/QandA.jpg";
import Author from "../../components/Image/author.jpg";
import AddIcon from "@mui/icons-material/Add";

function QandA() {
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);

  const handleToggle1 = () => {
    setActive1(!isActive1);
    setActive2(isActive2 ? !isActive2 : null);
  };

  const handleToggle2 = () => {
    setActive2(!isActive2);
    setActive1(isActive1 ? !isActive1 : null);
  };

  const cx = classNames.bind(styled);
  return (
    <div className={cx("QandA")}>
      <div className="container">
        <div className={cx("Content")}>
          <div className={cx("Description")}>
            <h2 className={cx("title")}>FAQs</h2>
            <p className={cx("intro")}>
              It-Global xin phép giải đáp một số thắc mắc chung của Qúy khách
            </p>
            <button className={cx("btn")} onClick={handleToggle1}>
              <p>Quy trình phát triển phần mềm tại It-Global? </p>
              <AddIcon className={isActive1 ? cx("icon-active") : "add-icon"} />
            </button>
            <div className={isActive1 ? cx("d-block") : null}>
              1. Lấy yêu cầu từ khách hàng <br />
              2. Phân tích - thiết kế hệ thống <br />
              3. Nhận phản hồi từ khách hàng <br />
              4. Phát triển hệ thống <br />
              5. Nhận phản hồi từ khách hàng <br />
              6. Hoàn thiện hệ thống <br />
              7. Bảo trì hệ thống.
            </div>
            <button className={cx("btn")} onClick={handleToggle2}>
              <p>Các công nghệ được It-Global sử dụng? </p>
              <AddIcon className={isActive2 ? cx("icon-active") : "add-icon"} />
            </button>
            <div className={isActive2 ? cx("d-block") : null}>
              1. Thiết kế web: HTML, JS, CSS, Laravel, NodeJS, ReactJS, VueJS,
              AngularJS... <br />
              2. Lập trình ứng dụng di động: Java, React Native, Fluter...{" "}
              <br />
              3. Lập trình phần mềm ứng dụng Desktop: .Net Framework
            </div>
            <p className={cx("promise")}>
              "Chúng tôi luôn nỗ lực hết sức để mang lại những trải nghiệm hoàn
              hảo, hiệu quả trong công việc cho Khách hàng với một chi phí tối
              ưu."
            </p>
            <div className={cx("author")}>
              <img src={Author} alt="" className={cx("author-img")} />
              <div className={cx("author-content")}>
                <h6 className={cx("name")}>Nguyễn Minh Tân</h6>
                <p className={cx("role")}>Founder, CEO</p>
              </div>
            </div>
          </div>
          <div className={cx("Image")}>
            <img src={QandAimg} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QandA;
