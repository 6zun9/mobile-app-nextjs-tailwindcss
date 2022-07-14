import AvatarImage from '../../public/images/person.jpg';
import CardListItem from './common/CardListItem';

const users = [
  {
    rank: 1,
    name: 'Isabelle Allen',
    score: '2,516',
    image: AvatarImage
  },
  {
    rank: 2,
    name: 'Chat Nunez',
    score: '2,312',
    image: AvatarImage
  },
  {
    rank: 3,
    name: 'Johanna Townsend',
    score: '1,915',
    image: AvatarImage
  },
  {
    rank: 4,
    name: 'Todd Rodriguez',
    score: '1,324',
    image: AvatarImage
  },
  {
    rank: 5,
    name: 'Sue Pearson',
    score: '1,102',
    image: AvatarImage
  },
  {
    rank: 6,
    name: 'Robert Black',
    score: '915',
    image: AvatarImage
  },
  {
    rank: 7,
    name: 'Todd Rodriguez',
    score: '1,324',
    image: AvatarImage
  },
  {
    rank: 8,
    name: 'Sue Pearson',
    score: '1,102',
    image: AvatarImage
  },
  {
    rank: 9,
    name: 'Robert Black',
    score: '915',
    image: AvatarImage
  }
]

const ScoreList = () => {
  return (
    <div className="list-wrapper -mt-6 p-4 overflow-auto h-screen">
      {users.map((user) => <CardListItem key={user.rank} user={user} />)}
    </div>
  );
};

export default ScoreList;
