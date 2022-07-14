import cn from 'classnames';
import Image from 'next/image';

const Avatar = ({image,text,className,isWithRing = null}) => {

  return (
    <div className={cn('avatar rounded-full overflow-hidden',{
      [className]: className,
      'ring-2': isWithRing && isWithRing.size === 2,
      'ring-4':isWithRing &&  isWithRing.size === 4,
      'flex justify-center items-center bg-color-primary': text
    })}>
    {image && (<Image
      src={image}
      alt={`Picture of the user`}
      layout='responsive'
    />)}
    {text && (
      <span className="font-bold text-white">{text}</span>
    ) }
  </div>
  )
};

export default Avatar;
