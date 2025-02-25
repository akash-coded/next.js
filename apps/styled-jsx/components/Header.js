import React from "react";
import Link from "next/link";

const Header = () => (
  <>
    <header>
      <h1>
        <Link href="/" className={"header-text"}>
          My Blog
        </Link>
      </h1>
    </header>
    <style jsx>{`
      header {
        background-color: #333;
        color: #fff;
        padding: 15px;
        text-align: center;
      }
      h1 {
        font-size: 20px;
        margin: 0;
      }
      .header-text {
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </>
);

export default Header;
