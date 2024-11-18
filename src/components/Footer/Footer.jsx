import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="  pt-16 ">
          <div
            className="grid grid-cols-1 gap-8 lg:grid-cols-4 py-8 px-10 " 
            style={{ backgroundColor: "#2e363a" }}
          >
            <div className="leading-loose ">
              <strong className="font-medium text-3xl text-white">
              
                About Us
              </strong>

              <p className="pt-8  leading-loose text-gray-400">
                Bangladesh Edible Oil Limited (BEOL) was established in 1993 and
                has since been aggressive in the marketing of consumer pack…
              </p>
            </div>

            <div style={{color:'#4169e1'}} className="leading-loose ">
              <strong className="font-medium text-3xl text-white">
                Press Release
              </strong>

              <ul className="mt-6 space-y-1 " >
                <li >
                  <a className="underline hover:no-underline transition hover:text-blue-gray-800" href="#">
                    নারায়ণগঞ্জের রূপসীতে ভোজ্যতেল কোম্পানি বাংলাদেশ এডিবল অয়েল
                    লিমিটেডের ত্রাণ বিতরণ
                  </a>
                </li>

                <li>
                  <a
                    className="underline hover:no-underline transition hover:text-blue-gray-800"
                    href="#"
                  >
                    রুপসীতে বাংলাদেশ এডিবল অয়েল লিমিটেডের ত্রাণ বিতরণ
                  </a>
                </li>

                <li>
                  <a
                   className="underline hover:no-underline transition hover:text-blue-gray-800"
                    href="#"
                  >
                    রূপচাঁদা সুপার শেফ ২০১৯ এর যাত্রা শুরু
                  </a>
                </li>

                <li>
                  <a
                  className="underline hover:no-underline transition hover:text-blue-gray-800"
                    href="#"
                  >
                    রূপচাঁদা সরিষার তেল অন্যদিন আবহমান রেসিপি প্রতিযোগিতা
                    অনুষ্ঠিত
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-3xl text-white ">
              
                Gallery
              </strong>

              <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 ">
                <img
                  src="https://beol-bd.com/wp-content/uploads/2022/07/4e41e2ee8656960967f8b9e2d883743e1554612798-1-300x86.png"
                  alt=""
                />
                <img
                  src="https://beol-bd.com/wp-content/uploads/2022/07/007fa1010be30b05980604537099fcd41546486409-300x73.jpg"
                  alt=""
                />

                <img
                  src="https://beol-bd.com/wp-content/uploads/2022/07/9f5e72e3cbac76713d578ed4fad56f871546428593-300x73.jpg"
                  alt=""
                />
                <img
                  className=" lg:hidden"
                  src="https://beol-bd.com/wp-content/uploads/2022/07/e5fa56cb89250b490495f412837922331546485999-2-300x73.jpg"
                  alt=""
                />
              </div>

              <img
                className=" hidden  lg:block mt-8"
                src="https://beol-bd.com/wp-content/uploads/2022/07/e5fa56cb89250b490495f412837922331546485999-2-300x73.jpg"
                alt=""
              />
            </div>

            <div>
              <div className="mb-10 "> </div>

              <ul className="pt-3 space-y-1  text-gray-400 leading-loose ">
                <li>
                  <Link to='/AboutUs'
                    className=" underline hover:no-underline transition hover:text-white"
                  
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to='/Brands'
                    className="underline hover:no-underline transition hover:text-white"
                    
                  >
                    Brands
                  </Link>
                </li>
                <li>
                  <Link to='/MediaCenter'
                    className="underline hover:no-underline transition hover:text-white"
                  
                  >
                    Media Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="underline hover:no-underline transition hover:text-white"
                   
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Career"
                    className="underline hover:no-underline transition hover:text-white"
                   
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    to="/MilContact"
                    className=" underline hover:no-underline transition hover:text-white"
                   
                  >
                    Webmail
                  </Link>
                </li>
              </ul>
              <ul className="mt-8 flex justify-center lg:justify-start gap-6 md:gap-8">
                <li>
                  <a
                    href="https://web.facebook.com/?_rdc=1&_rdr#"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebookSquare className="text-white text-4xl" />
                  </a>
                </li>
                <li>
                  <a href="#" rel="noreferrer" target="_blank">
                    <FaYoutube className="text-white text-4xl" />
                  </a>
                </li>
                <li>
                  <a href="#" rel="noreferrer" target="_blank">
                    <FaLinkedin className="text-white text-4xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ backgroundColor: "#25292f" }} className="   py-8 ">
            <p
              className="text-center text-xs/relaxed text-white font-medium "
              style={{ fontSize: 16 }}
            >
              Copyright © 2022
              <Link
                to='/'
                className="text-gray-400 underline transition hover:c hover:no-underline px-1"
              >
                Bangladesh Edible Oil Limited (BEOL)
              </Link>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
