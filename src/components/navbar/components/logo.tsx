
type ComponentsProps = {
  isScrolled: boolean;
};

const LogoApp = ({ isScrolled }: ComponentsProps) => {
  return (
    <a href="#" className="text-2xl font-semibold">
      <img
        alt={'logo'}
        src={'/logo/logo-app.png'}
        width={145}
        height={32}
        className={isScrolled ? '' : ''}
      />
    </a>
  );
};

export default LogoApp;
