import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [contact, setContact] = useState([
    { icon: "icon-phone.svg", text: "+20121212121" },
    { icon: "icon-email.svg", text: "example@fylo.com" },
  ]);
  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "icons8-facebook-logo.svg",
    "icons8-instagram.svg",
    "icons8-twitter.svg",
  ]);
  return (
    <section className="bg-slate-500 py-[50px] text-white h-[800px] md:h-[350px] ">
      <div className="container  w-[80%] md:w-[90%] m-auto">
        <Link to="/">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </Link>
        <div className="flex justify-between flex-wrap flex-col md:grid grid-cols-4  lg:flex-row gap-[30px] mt-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="/src/assets/images/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className=" font-normal text-sm tracking-[0.8px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
              fuga.
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`/src/assets/images/${item.icon}`}
                  alt="icon"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  className=" hover:text-primary transition-all duration-200 text-base"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto ">
            {socialIcons.map((item) => (
              <li key={item}>
                <Link to={item} className="group">
                  <img src= {`/src/assets/images/${item}`} className="bg-white w-[60px] h-[60px] element-center border border-white rounded-[20%]"/>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;

