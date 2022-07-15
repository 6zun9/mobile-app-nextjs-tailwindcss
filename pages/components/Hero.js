import Image from 'next/future/image';

import MenImage from '../../public/images/person.jpg';
import LadyImage from '../../public/images/lady.jpg';
import Lady2Image from '../../public/images/lady2.jpg';
import CrownImage from '../../public/images/crown.svg';

import Avatar from './common/Avatar';
import { getAvatarClass } from '../helpers/classGenerators';
import { AVATAR_SIZE, AVATAR_RING_TYEPS } from '../constants/avatart';

const ringSize = {
  md: 2,
  lg: 4
}

const Hero = () => {
  return (
    <div className='hero-section px-4 h-72 bg-color-primary flex flex-row justify-between items-center relative before:h-4 before:left-0 before:bg-color-primary before:w-1/2 before:skew-y-12 before:absolute before:-bottom-6 after:h-4 after:bg-color-primary after:w-1/2 after:-skew-y-12 after:absolute after:-bottom-6 after:right-0'>
      <div className="relative">
      <Avatar
        image={LadyImage}
        className={`${getAvatarClass(AVATAR_SIZE.md)} ${getAvatarClass(
          AVATAR_RING_TYEPS.thirdRank
        )}`}
        isWithRing={{ size: ringSize.lg }}
      />
      <Avatar
        text={3}
        className={`${getAvatarClass(AVATAR_SIZE.sm)} ${getAvatarClass(
          AVATAR_RING_TYEPS.black
        )} absolute inset-x-2/4 -translate-y-2/4 -translate-x-2/4 bg-emerald-300`}
        isWithRing={{ size: ringSize.md }}
      />
      </div>
      <div className="relative">
      <Image
      src={CrownImage}
      alt={`Crown Image`}
      layout='raw'
      className="relative !left-12 !-top-4"
      width={36}
      height={36}
    />
      <Avatar
        image={MenImage}
        className={`${getAvatarClass(AVATAR_SIZE.lg)} ${getAvatarClass(
          AVATAR_RING_TYEPS.firstRank
        )}`}
        isWithRing={{ size: ringSize.lg }}
      />
      <Avatar
        text={1}
        className={`${getAvatarClass(AVATAR_SIZE.sm)} ${getAvatarClass(
          AVATAR_RING_TYEPS.black
        )} absolute inset-x-2/4 -translate-y-2/4 -translate-x-2/4 bg-amber-500`}
        isWithRing={{ size: ringSize.md }}
      />
      </div>
      <div className="relative">

      <Avatar
        image={Lady2Image}
        className={`${getAvatarClass(AVATAR_SIZE.md)} ${getAvatarClass(
          AVATAR_RING_TYEPS.secondRank
        )}`}
        isWithRing={{ size: ringSize.lg }}
      />
      <Avatar
        text={2}
        className={`${getAvatarClass(AVATAR_SIZE.sm)} ${getAvatarClass(
          AVATAR_RING_TYEPS.black
        )} absolute inset-x-2/4 -translate-y-2/4 -translate-x-2/4 bg-sky-400`}
        isWithRing={{ size: ringSize.md }}
      />
      </div>
    </div>
  );
};

export default Hero;
