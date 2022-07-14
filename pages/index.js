import Head from 'next/head';

import Topbar from './components/Topbar';
import ScoreList from './components/ScoreList';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className='sm:container sm:mx-auto rounded-xl bg-slate-100 overflow-hidden h-screen'>
      <Head>
        <title>Leaderboard</title>
      </Head>
      <Topbar />
      <Hero />
      <ScoreList />
    </div>
  );
}
