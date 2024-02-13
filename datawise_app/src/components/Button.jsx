// eslint-disable-next-line react/prop-types
export const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium tex-[18px] text-primary outline-none ${styles} rounded-lg`}
    >
      Get Started
    </button>
  );
};

export default Button;
