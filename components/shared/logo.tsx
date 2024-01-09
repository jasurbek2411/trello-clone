import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-80 duration-300 transition">
        <Image src={"/logo.svg"} alt="LOGO" width={96} height={96} />
      </div>
    </Link>
  );
};

export default Logo;
