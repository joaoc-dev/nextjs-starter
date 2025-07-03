'use client';

import { useState } from 'react';
import { env } from '@/env/client';

function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        ClientComponent:
        <button
          type="button"
          onClick={() => {
            setCount(prev => prev + 1);
          }}
        >
          Count
        </button>
        Count:
        {count}
        {env.NEXT_PUBLIC_VARIABLE}
      </p>
    </div>
  );
}

export default ClientComponent;
