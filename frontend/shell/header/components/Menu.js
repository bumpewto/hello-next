import Link from "next/link";
import Anchor from "../../../elements/Anchor";

const Menu = () => (
  <nav>
    <Link href="/about">
      <Anchor>About</Anchor>
    </Link>
  </nav>
);

export default Menu;
