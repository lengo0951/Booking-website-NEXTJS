import Link from "next/link";
import React from "react";
import Image from "next/image";
import "@/styles/header.css";
export default function Header() {
  return (
    <header>
      <Link href="/" className="logo">
        <Image
          src="@/img/header-footer/Group2.svg"
          width={300}
          height={30}
        ></Image>
      </Link>
      <div className="menu">
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul className="navlinks">
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/facilities">facilities</Link>
        </li>
        <li>
          <Link href="/rooms">rooms</Link>
        </li>
        <li>
          <Link href="/contact-us">contact-us</Link>
        </li>
        <li>
          <Link href="/reservation">reservation</Link>
        </li>
        <li>
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
        <li>
          <button className="btn-login">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            Login
          </button>
        </li>
      </ul>
    </header>
  );
}
