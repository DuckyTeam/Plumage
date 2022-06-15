import * as React from 'react';
import { PlmgButton } from '@ducky/plumage-react';

export default function Button() {
  const [count, setCount] = React.useState(0);

  return (
    <PlmgButton
      onClick={() => setCount((c) => c + 1)}
      text={count}
    ></PlmgButton>
  );
}
