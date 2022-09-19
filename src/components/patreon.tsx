import common from '../config/common.json';

const Patreon = () => {
  return (
    <a
      href={common.url.patreon}
      target='_blank'
      rel='noopener noreferrer'
      className='absolute right-3 bottom-3 text-sm font-bold rounded-lg px-3 py-3 leading-none flex items-center'
      style={{ backgroundColor: '#FF4852' }}
    >
      <svg className='h-4 mr-2' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M0 28.4337H5.09766V0.623104H0V28.4337Z' fill='#002C49' />
        <path
          d='M28.8551 11.4389C28.8551 17.1766 24.1879 21.8494 18.4445 21.8494C12.6842 21.8494 7.99999 17.1822 7.99999 11.4389C7.99999 5.68418 12.6842 0.999998 18.4445 0.999998C24.1879 0.999998 28.8551 5.68418 28.8551 11.4389Z'
          fill='white'
        />
      </svg>
      Support us on Patreon
    </a>
  );
};

export default Patreon;
