import { PlmgAvatar } from '@ducky/plumage-react';

const styles = {
  marginLeft: '-15px',
};

export default function Avatars() {
  return (
    <>
      <h3>Avatars</h3>
      <div style={{ display: 'flex' }}>
        <PlmgAvatar
          size={'medium'}
          imageUrl="https://static.ducky.eco/icons/maskable_icon_192.png"
        ></PlmgAvatar>
        <PlmgAvatar style={styles} size={'medium'}></PlmgAvatar>
        <PlmgAvatar style={styles} size={'medium'} userDeleted></PlmgAvatar>
        <PlmgAvatar
          size={'medium'}
          style={styles}
          imageUrl="https://static.ducky.eco/icons/maskable_icon_192.png"
        ></PlmgAvatar>
        <PlmgAvatar style={styles} size={'medium'}></PlmgAvatar>
        <PlmgAvatar size={'medium'} style={styles} userDeleted></PlmgAvatar>
      </div>
    </>
  );
}
