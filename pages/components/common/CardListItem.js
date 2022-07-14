import cn from 'classnames';

import Avatar from './Avatar';

const CardListItem = ({user:{rank,image,name,score}}) => {
  const isBackgroundColor = [1,2,3].includes(rank);
  return (
    <div className={cn('list p-4 flex flex-row justify-between items-center drop-shadow-md rounded-xl mb-3 text-base',{
      'text-white': isBackgroundColor,
      'bg-amber-500': rank === 1,
      'bg-sky-400': rank === 2,
      'bg-emerald-300': rank === 3,
      'bg-white': !isBackgroundColor
    })}>
      <div className='list__details-left flex flex-row items-center'>
        <span className='font-bold'>{rank}</span>
        <Avatar image={image} className="mx-4" />
        <span className='font-medium'>{name}</span>
      </div>
      <div className='list__details-right font-bold'>{score} pts.</div>
    </div>
  );
};

export default CardListItem;

