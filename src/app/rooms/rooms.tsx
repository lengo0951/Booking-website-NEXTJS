import React from "react";

export default function Rooms() {
  const expand = (btnId: string, expdId: string, viewId: string) => {
    const expd = document.getElementById(expdId);
    const view = document.getElementById(viewId);
    if (expd && view) {
      if (expd.style.display === "none") {
        expd.style.display = "block";
        view.innerHTML = "HIDE ROOM DETAILS";
        document.getElementById(btnId)?.innerHTML = "-";
      } else {
        expd.style.display = "none";
        view.innerHTML = "VIEW ROOM DETAILS";
        document.getElementById(btnId)?.innerHTML = "+";
      }
    }
  };

  return (
    <div>
      <div className="rooms-first-description">
        <p className="rooms-first-description-bigtext">ROOMS AND RATES</p>
        <p className="rooms-first-description-smalltext">
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn’t our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature’s palette as visible from our
          rooms’ sea-view windows and terraces.{" "}
        </p>
      </div>

      {/* DELUXE DOUBLE ROOM */}
      <div className="room-desc">
        <div style={{ backgroundColor: "rgb(45, 28, 86)" }}>
          <img
            src="/img/rooms/deluxe-double-room.webp"
            alt=""
            className="room-desc-img"
          />
        </div>

        <p className="room-desc-name">DELUXE DOUBLE ROOM</p>
        <div className="room-desc-detail">
          <button
            className="room-desc-detail-button-more"
            id="btn-desc-1"
            onClick={() => expand("btn-desc-1", "expd1", "view1")}
          >
            +
          </button>
          <p className="room-desc-detail-text" id="view1">
            VIEW ROOM DETAILS
          </p>
          <button className="room-desc-detail-button-cost">
            $139 Avg/night
          </button>
        </div>

        {/* Expend/collapse contents */}
        <div id="expd1" style={{ display: "none" }}>
          <div className="room-decription">
            <p className="room-decription-bigtext">Description: </p>
            <p className="room-decription-smalltext">
              {" "}
              With an area of 32 square meters, the Deluxe Double Room is a
              modernly designed hotel room featuring a luxurious double bed and
              fully integrated amenities for your stay. Enjoy expansive views
              and a prime location right next to the beach, making it an ideal
              choice for couples, small families, or business travelers.{" "}
            </p>
            <p className="room-decription-bigtext">Convenient:</p>
            <div className="room-decription-icon">
              <div>
                <img
                  className="room-decription-smallicon"
                  src="img/icon/air-conditioner.png"
                  alt=""
                />{" "}
                Air-conditioning
              </div>
              <div>
                <img
                  className="room-decription-smallicon"
                  src="img/icon/television.png"
                  alt=""
                />{" "}
                Tivi
              </div>
              <div>
                <img
                  className="room-decription-smallicon"
                  src="img/icon/minibar.png"
                  alt=""
                />{" "}
                Mini-fridge
              </div>
              <div>
                <img
                  className="room-decription-smallicon"
                  src="img/icon/ceiling-fan.png"
                  alt=""
                />{" "}
                Ceiling-fan
              </div>
            </div>
            {/* Add other descriptions here */}
          </div>
        </div>
      </div>

      {/* DELUXE TWIN ROOM */}
      <div className="room-desc">
        <div style={{ backgroundColor: "rgb(45, 28, 86)" }}>
          <img
            src="/img/rooms/twin-room.webp"
            alt=""
            className="room-desc-img"
          />
        </div>

        <p className="room-desc-name">DELUXE TWIN ROOM</p>
        <div className="room-desc-detail">
          <button
            className="room-desc-detail-button-more"
            id="btn-desc-2"
            onClick={() => expand("btn-desc-2", "expd2", "view2")}
          >
            +
          </button>
          <p className="room-desc-detail-text" id="view2">
            VIEW ROOM DETAILS
          </p>
          <button className="room-desc-detail-button-cost">
            $139 Avg/night
          </button>
        </div>

        {/* Expend/collapse contents */}
        <div id="expd2" style={{ display: "none" }}>
          <div className="room-decription">
            <p className="room-decription-bigtext">Description: </p>
            <p className="room-decription-smalltext">
              {" "}
              With an area of 32 square meters, the Deluxe Twin Room is a
              modernly designed hotel room featuring two luxurious single beds
              and fully integrated amenities for your stay. Enjoy expansive
              views and a prime location right next to the beach, making it an
              ideal choice for couples, small families, or business travelers.{" "}
            </p>
            <p className="room-decription-bigtext">Convenient:</p>
            <div className="room-decription-icon">
              <div>
                <img
                  className="room-decription-smallicon"
                  src="img/icon/air-conditioner.png"
                  alt=""
                />{" "}
                Air-conditioning
              </div>
              <div>
                <img
                  className="room-decription-smallicon"
                  src="img/icon/television.png"
                  alt=""
                />{" "}
                Tivi
              </div>
              <div>
                <img
                  className="room-decription-smallicon"
                  src="img/icon/minibar.png"
                  alt=""
                />{" "}
                Mini-fridge
              </div>
              <div>
                <img
                  className="room-decription-smallicon"
                  src="img/icon/ceiling-fan.png"
                  alt=""
                />{" "}
                Ceiling-fan
              </div>
            </div>
            {/* Add other descriptions here */}
          </div>
        </div>
      </div>

      {/* Add other rooms similarly */}

      <div className="body-end">
        <b>
          <p className="body-end-header">Testimonials</p>
        </b>
        <p className="body-end-text-1">
          "Calm, Serene, Retro - What a way to relax and enjoy"
        </p>
        <p className="body-end-text-2">Mr. and Mrs.Baxter, UK</p>
      </div>
    </div>
  );
}
