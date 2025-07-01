'use client';

import { env } from '@/env/client';

const ClientComponent = () => {
  return (
    <div>
      <p>ClientComponent: {env.NEXT_PUBLIC_VARIABLE}</p>
    </div>
  );
};

export default ClientComponent;
