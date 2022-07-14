import { ArrowNarrowLeftIcon,ShareIcon } from '@heroicons/react/solid';

const Topbar = props => {
  return (
    <div className="bg-color-primary top-bar flex flex-row items-center justify-between px-4 pt-8 pb-4 rounded-t-xl sticky top-0 left-0 right-0 z-50">
    <ArrowNarrowLeftIcon className="text-white h-6 w-6" />
    <p className="font-sans text-white text-base">Leaderboard</p>
    <ShareIcon className="text-white h-6 w-6"/>
  </div>
  )
}

export default Topbar;
