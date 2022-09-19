const Button = () => {
  return (
    <>
      <button
        onClick={(e) => {
          if (process.env.NODE_ENV === 'development') {
            e.preventDefault();
          }
        }}
        className='leading-none bg-white text-primary border-0 text-lg font-bold transition-all uppercase rounded-md px-8 py-4'
      >
        download
      </button>
    </>
  );
};

export default Button;
