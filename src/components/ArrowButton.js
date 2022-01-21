export const ArrowButton = ({ onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      <svg
        width="34"
        height="49"
        viewBox="0 0 34 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.70541 28.2586C1.43153 26.3599 1.43153 22.6401 3.7054 20.7414L24.9599 2.99341C27.8353 0.592384 32 2.81585 32 6.752L32 42.248C32 46.1841 27.8353 48.4076 24.9599 46.0066L3.70541 28.2586Z"
          fill="rgba(250, 250, 250, 50%)"
          stroke="rgba(250, 250, 250, 0%)"
          strokeWidth="3"
        />
      </svg>
    </button>
  );
};
