import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [AboutUsOpen, setAboutUs] = useState(false);
  const [AboutUsMobileOpen, setAboutUsMobileMenuOpen] = useState(false);

  return (
    <div>
      <Menu
        open={AboutUsOpen}
        handler={setAboutUs}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <Link to="/AboutUs">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={AboutUsOpen || AboutUsMobileOpen}
                onClick={() => setAboutUsMobileMenuOpen((cur) => !cur)}
              >
                ABOUT US
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    AboutUsOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    AboutUsMobileOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Link>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          <MenuItem>Company History</MenuItem>
          <MenuItem>Mission and Vision</MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={AboutUsMobileOpen}>
          <MenuItem>Company History</MenuItem>
          <MenuItem>Mission and Vision</MenuItem>
        </Collapse>
      </div>
    </div>
  );
};

const BRANDS = () => {
  const [BRANDSOpen, setBRANDS] = useState(false);
  const [BRANDSMobileOpen, setBRANDSMobileMenuOpen] = useState(false);

  return (
    <div>
      <Menu
        open={BRANDSOpen}
        handler={setBRANDS}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <Link to="/Brands">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={BRANDSOpen || BRANDSMobileOpen}
                onClick={() => setBRANDSMobileMenuOpen((cur) => !cur)}
              >
                BRANDS
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    BRANDSOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    BRANDSMobileOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Link>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          <MenuItem>Rupchanda</MenuItem>
          <MenuItem>Fortune</MenuItem>
          <MenuItem>Kings</MenuItem>
          <MenuItem>Veola</MenuItem>
          <MenuItem>Meizan </MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={BRANDSMobileOpen}>
          <MenuItem>Rupchanda</MenuItem>
          <MenuItem>Fortune</MenuItem>
          <MenuItem>Kings</MenuItem>
          <MenuItem>Veola</MenuItem>
          <MenuItem>Meizan </MenuItem>
        </Collapse>
      </div>
    </div>
  );
};

const MediaCenter = () => {
  const [MediaCenter, setMediaCenterOpen] = useState(false);
  const [MobileMediaCenter, setMobileMediaCenterOpen] = useState(false);

  return (
    <div>
      <Menu
        open={MediaCenter}
        handler={setMediaCenterOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <Link to="/MediaCenter">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={MediaCenter || MobileMediaCenter}
                onClick={() => setMobileMediaCenterOpen((cur) => !cur)}
              >
                MEDIA CENTER
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    MediaCenter ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    MobileMediaCenter ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Link>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          <MenuItem>TV and Online Video Commercial</MenuItem>
          <MenuItem>Press Advertisement</MenuItem>
          <MenuItem>Press Release</MenuItem>
          <MenuItem>Gallery</MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={MobileMediaCenter}>
          <MenuItem>TV and Online Video Commercial</MenuItem>
          <MenuItem>Press Advertisement</MenuItem>
          <MenuItem>Press Release</MenuItem>
          <MenuItem>Gallery</MenuItem>
        </Collapse>
      </div>
    </div>
  );
};

const NavList = () => {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography
        as="div"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={`/`}>
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            BEOL
          </ListItem>
        </Link>
      </Typography>

      <AboutUs />
      <BRANDS />
      <MediaCenter />

      <Typography
        as="div"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/Career">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            CAREER
          </ListItem>
        </Link>
      </Typography>

      <Typography
        as="div"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/Contact">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            CONTACT
          </ListItem>
        </Link>
      </Typography>

      <Typography
        as="div"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/MilContact">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            WEBMAIL
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
};

const Navbars = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <Navbar className="mx-auto max-w-full  px-16 py-4 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link aria-label="Home" to={`/`}>
          <img
            loading="lazy"
            src={`https://beol-bd.com/wp-content/uploads/2022/07/logo.png`}
            alt=""
          />
        </Link>

        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Navbars;
