import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ path, name, nav, handleClose }) => {
  const router = useRouter();
  const location = router.asPath;

  const active = location === path;

  return (
    <Link href={path}>
      <li
        className={`${nav ? "text-[21px]" : "text-[15px]"} leading-5 font-bold ${
          active && nav ? "text-orange" : active ? "text-black" : "text-black/50"
        }`}
        onClick={handleClose}
      >
        {name}
      </li>
    </Link>
  );
};

export default NavLink;
