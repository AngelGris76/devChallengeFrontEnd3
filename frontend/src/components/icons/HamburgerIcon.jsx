const HamburgerIcon = ({ ...props }) => {
  return (
    <svg
      // width='16px'
      // height='16px'
      {...props}
      viewBox='0 0 16 16'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      // xmlns:xlink='http://www.w3.org/1999/xlink'
      fill='currentColor'
    >
      <rect width='16' height='16' id='icon-bound' fill='none' />
      <path d='M1,9h14V7H1V9z M1,14h14v-2H1V14z M1,2v2h14V2H1z' />
    </svg>
  );
};

export default HamburgerIcon;
