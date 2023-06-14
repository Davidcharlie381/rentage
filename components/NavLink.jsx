import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ path, name }) => {
  const router = useRouter();
  const location = router.asPath;

  const active = location === path;

  return (
    <Link href={path}>
      <li
        className={`text-[15px] leading-5 font-bold ${
          active ? "text-black" : "text-black/50"
        }`}
      >
        {name}
      </li>
    </Link>
  );
};

export default NavLink;
