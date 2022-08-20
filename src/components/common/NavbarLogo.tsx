import Link from "next/link";

const NavbarLogo = ({ showLogoText }: { showLogoText: boolean }) => {
  return (
    <Link href="/">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="flex items-center space-x-3" title="jsDocs.io">
        <img className="h-12" src="/logo.png" alt="jsDocs.io logo" />

        <span
          className={`${
            showLogoText ? "block" : "hidden"
          } text-2xl font-bold sm:block`}
        >
          jsDocs.io
        </span>
      </a>
    </Link>
  );
};

export default NavbarLogo;
