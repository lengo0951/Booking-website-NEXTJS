import Link from "next/link";
import style from "@/styles/style.module.css";
import footercss from "@/styles/footer.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      {/* Home section */}
      <section className="home" id="home">
        <div className="home-text">
          <h1>Welcome to Paradise!</h1>
          <p>
            Awaken all senses with Paradise's classy coastal resort ecosystem
          </p>
          <button className="book-btn">
            <i className="fa-regular fa-calendar"></i> book now
          </button>
        </div>
      </section>

      {/* Body */}
      <div>
        <p className="home-desc">
          All of our room types include complimentary breakfast
        </p>
        {/* 1st Description */}
        <div className="home-desc-detail">
          <div className="home-desc-detail-text">
            <p className="home-desc-detail-text-1">Luxury redefined</p>
            <p className="home-desc-detail-text-2">
              Our rooms are designed to transport you into an environment made
              for leisure. Take your mind off the day-to-day of home life and
              find a private paradise for yourself.
            </p>
            <div className="home-desc-detail-button">
              {/* Click to go to 'Room lists' in rooms.html */}
              <Link href="rooms.html">
                <button className="home-desc-detail-button-texture">
                  <b>EXPLORE</b>
                </button>
              </Link>
            </div>
          </div>
          <div className="home-desc-detail-img">
            <Image
              src="/img/index/desc1.png"
              className="home-desc-detail-img-style"
              alt="desc"
              width={500}
              height={300}
            ></Image>
          </div>
        </div>

        {/* 2nd Description */}
        <div className="home-desc-detail">
          <div className="home-desc-detail-text">
            <p className="home-desc-detail-text-1">
              Leave your worries in the sand
            </p>
            <p className="home-desc-detail-text-2">
              We love life at the beach. Being close to the ocean with access to
              endless sandy beach ensures a relaxed state of mind. It seem like
              time stands still watching the ocean.
            </p>
            <div className="home-desc-detail-button">
              {/* Click to go to 'Facilities lists' in facilities.html */}
              <Link href="facilities.html">
                <button className="home-desc-detail-button-texture">
                  <b>EXPLORE</b>
                </button>
              </Link>
            </div>
          </div>
          <div className="home-desc-detail-img">
            <img
              src="img/index/desc2.png"
              className="home-desc-detail-img-style"
            />
          </div>
        </div>

        <div className="body-end">
          <p className="body-end-header">Testimonials</p>
          <p className="body-end-text-1">
            "Calm, Serene, Retro - What a way to relax and enjoy"
          </p>
          <p className="body-end-text-2">Mr. and Mrs.Baxter, UK</p>
        </div>
      </div>

      {/* link to js */}
      <script src="main.js" defer></script>

      {/* Chat box */}
      <div>
        <button className="chatbox-toggler">
          <span>
            <i className="fa-regular fa-message"></i>
          </span>
          <span>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </button>
        <div className="chatbox">
          <div className="chat-head">
            <h2>Chat</h2>
          </div>
          <ul className="message">
            <li className="chat incoming">
              <span>
                <i className="fa-solid fa-user-tie"></i>
              </span>
              <p>
                Hi there! <br />
                How can i help you today?
              </p>
            </li>
            <li className="chat outgoing">
              <p>Thank you</p>
            </li>
          </ul>
          <div className="chat-input">
            <textarea placeholder="Enter a message..." required></textarea>
            <span>
              <i className="fa-solid fa-paper-plane"></i>
            </span>
          </div>
        </div>
      </div>

      {/* LOGIN FORM */}
      <div className="modal">
        <div className="modal__body">
          {/* Phần form đăng ký và đăng nhập */}
          <div className="auth-form">
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="auth-form__heading">Login</h3>
                <span className="auth-form__switch-btn">Register</span>
              </div>
              <div className="auth-form__form">
                <div className="auth-form__group">
                  <input
                    type="text"
                    className="auth-form__input"
                    placeholder="Phone/Email"
                  />
                </div>
                <div className="auth-form__group">
                  <input
                    type="password"
                    className="auth-form__input"
                    placeholder="Password"
                  />
                </div>
                <div className="auth-form__aside">
                  <p className="auth-form__policy-text">
                    By logining in, I agree to Paradise's
                    <a href="" className="auth-form__policy-link">
                      {" "}
                      Term and Conditions{" "}
                    </a>{" "}
                    &
                    <a href="" className="auth-form__policy-link">
                      {" "}
                      Privacy Policy
                    </a>
                  </p>
                </div>
                <div className="auth-form__controls">
                  <button className="auth-form__controls__btn">LOGIN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
