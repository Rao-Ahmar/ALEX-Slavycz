import React from "react";
import { Data } from "../../../JSON/Data";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const Router = useRouter();

  const Path = (Name: string) => {
    if (Name === "BRANDING") return Router.query.branding;
    else if (Name === "EDITORIAL") return Router.query.editorial;
    else if (Name === "ADVERTISING") return Router.query.advertising;
  };

  return (
    <div className="flex justify-center h-[45px] items-center md:gap-[30px] gap-6">
      {Data.Creative.NavItems[1].subRoutes?.map((item: any, index: number) => {
        return (
          <Link
            key={index}
            href={item.Route}
            className={`font-Grotesque md:text-[13px] text-[10px] md:leading-[45px] leading-[20px] tracking-[5%] Custom-Hover-Cursor ${
              Router.pathname === item.Route || Path(item.Name)
                ? "text-black font-normal"
                : "text-offGray font-[200]"
            } uppercase text-start`}
          >
            {item.Name}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
