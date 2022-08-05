import { PlmgAvatar } from '@ducky/plumage-react';

const users = [
  {
    name: 'John Foo',
    picture: 'https://static.ducky.eco/icons/maskable_icon_192.png',
    user_id: '1',
  },
  {
    name: 'Mary Berry',
    picture: '',
    user_id: '2',
  },
  {
    name: '',
    picture: '',
    user_id: '3',
  },
  {
    name: 'Carl Carlson',
    picture: 'https://static.ducky.eco/icons/maskable_icon_192.png',
    user_id: '4',
  },
  {
    name: 'Ima Another',
    picture: '',
    user_id: '5',
  },
  {
    name: '',
    picture: '',
    user_id: '6',
  },
];

const avatarsComponents = users.map(({ name, picture, user_id }) => (
  <PlmgAvatar
    key={user_id}
    userDeleted={name === ''}
    imageUrl={picture}
    size={'medium'}
    style={{ marginLeft: '-15px' }}
  />
));

export default function Avatars() {
  return (
    <>
      <h3>Avatars</h3>
      <div style={{ display: 'flex', marginLeft: '15px' }}>
        {avatarsComponents}
      </div>
    </>
  );
}
