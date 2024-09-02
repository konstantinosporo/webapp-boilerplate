import Image from 'next/image';

const LogoImage = () => {

  const logoImage = (
    <Image
      alt='Logo'
      src={'/next.svg'}
      width={300}
      height={61}
      priority={true}
    />
  );

  return (
    <span className='max-w-16'>{logoImage}</span>
  )
}

export default LogoImage