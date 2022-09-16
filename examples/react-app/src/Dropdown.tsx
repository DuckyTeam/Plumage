import {
  PlmgDropdown,
  PlmgDropdownItem,
  PlmgAvatar,
  PlmgSeparator,
} from '@ducky/plumage-react';
import { useEffect } from 'react';

export default function Dropdown(): JSX.Element {
  async function toggleVisible() {
    await customElements.whenDefined('plmg-dropdown');
    const dropdownElements = document.querySelector('plmg-dropdown');
    await dropdownElements?.toggleVisible();
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PlmgDropdown disableListeners align={'right'}>
        <PlmgAvatar
          slot={'slot-trigger'}
          size={'small'}
          interactive
          onAvatarClick={() => toggleVisible()}
        />
        <div slot={'slot-menu'}>
          <PlmgDropdownItem
            onClick={() => {
              toggleVisible();
            }}
            icon={'duck'}
            text={'Dropdown Item 1'}
            href={'https://ducky.eco'}
            target={'_blank'}
          />
          <PlmgSeparator style={{ padding: '8px 8px', color: '#BFCBD1' }} />
          <PlmgDropdownItem
            onClick={() => {
              toggleVisible();
            }}
            icon={'duck'}
            text={'Dropdown Item 1'}
            href={'https://ducky.eco'}
            target={'_blank'}
          />
        </div>
      </PlmgDropdown>
    </div>
  );
}
