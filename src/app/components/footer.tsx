import "@/styles/footer.css";
import React from 'react';
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="ft">
      <div className="row">
        <div className="col">
          <div className="logo-wrapper">
            <Image
              className="col logo"
              src="/header-footer/logo.webp" // Đường dẫn từ thư mục public
              alt="Logo"
              width={200} // Chiều rộng ảnh
              height={100} // Chiều cao ảnh
            />
            <h2 className="slogan">BRING HEAVEN TO YOU</h2>
          </div>
        </div>
        <div className="col">
          <h3>Office</h3>
          <div className="underline">
            <span></span>
          </div>
          <p style={{ fontSize: "medium", marginTop: "15px" }}>
            <b>Công ty Cổ phần Du lịch Paradise</b>
          </p>
          <br />
          <p className="information-footer">
            <i className="fa-solid fa-location-dot"></i>
            Đảo Hòn Tre, Phường Vĩnh Nguyên, Thành phố Nha Trang, Tỉnh Khánh
            Hòa, Việt Nam
          </p>
          <p className="information-footer">
            <i className="fa-solid fa-envelope"></i> paradise.resort@booking.com
          </p>
          <p className="information-footer">
            <i className="fa-solid fa-phone"></i> 087.898.7686
          </p>
          <br />
          <p className="information-footer">
            Số ĐKKD: 4200456848. ĐK lần đầu 26/03/2024. <br />
            ĐK thay đổi tại từng thời điểm
            <br />
            Nơi cấp: Sở Kế hoạch và Đầu tư tỉnh Khánh Hòa
          </p>
        </div>
        <div className="col">
          <h3>Điều khoản và quy định</h3>
          <div className="underline"></div>
          <ul className="information-link">
            <li>
              <a href="#">Điều khoản chung</a>
            </li>
            <li>
              <a href="#">Quy định chung</a>
            </li>
            <li>
              <a href="#">Quy định về thanh toán</a>
            </li>
            <li>
              <a href="#">Quy định về đặt phòng</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>News</h3>
          <div className="underline">
            <span></span>
          </div>
          <form>
            <i
              style={{ marginRight: "10px" }}
              className="fa-solid fa-envelope"
            ></i>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </button>
          </form>
          <div className="qr-code-wrapper">
            <div className="img-wrapper">
              <img
                className="qr-img"
                src='@/img/header-footer/qr-code.png'
                alt="QR Code"
              />
            </div>
            <div className="qr-code-guide-text">Quét QR để đặt phòng</div>
          </div>
          <div className="social-icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <p className="cpr">Copyright © 2024 paradise.com. All rights reserved</p>
    </footer>
  );
}
