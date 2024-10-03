import { TbBrandYoutube, TbBrandFacebook } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { TfiTwitter } from "react-icons/tfi";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { CgInstagram } from "react-icons/cg";

const Copyright = () => {
  const logos = [
    { id: 1, icon: TbBrandYoutube, path: '/youtube' },
    { id: 2, icon: CgInstagram, path: '/insta' },
    { id: 3, icon: TbBrandFacebook, path: '/facebook' },
    { id: 4, icon: TfiTwitter, path: '/twitter' },
    { id: 5, icon: BiLogoPinterestAlt, path: '/pinterest' }
  ];

  return (
    <div className="bg-[#dbd2b7] md:flex flex-col md:flex-row md:justify-between md:items-center md:gap-0  lg:px-12 md:px-10 sm:p-3 p-2">
     
      {/* Logo list on small screens and copyright on larger screens */}
     
      <ul className="md:order-2 order-1 flex justify-center md:justify-around space-x-5 items-center lg:p-3 md:p-2 sm:p-3 p-3">
        {logos.map((logo) => (
          <NavLink key={logo.id} to={logo.path}>
            <li>
              <logo.icon className="text-xs lg:h-12 md:h-8 sm:h-7 h-5 lg:w-12 md:w-8 sm:w-7 w-5 hover:scale-110 lg:rounded-xl md:rounded-lg sm:rounded-md rounded-[5px] border-[1px] border-spacing-x-0 border-black lg:p-2 md:p-1 sm:p-[3px] p-[2px]" />
            </li>
          </NavLink>
        ))}
      </ul>

      {/* Copyright text on larger screens and below logo list on smaller screens */}

      <p className="order-2 md:order-1 lg:text-base md:text-[10pt] md:text-left text-center sm:text-[8pt] text-[6pt] font-medium">
        Copyright &copy; 2022 Kalles all rights reserved. created by logicPulse
      </p>
    </div>
  );
};

export default Copyright;
