import { env } from '@/env/server';
import { env as clientEnv } from '@/env/client';
import ClientComponent from './_components/client-component';

export default function Home() {
  return (
    <div>
      <p>Server Variable: {env.VARIABLE}</p>
      <p>Client Variable: {clientEnv.NEXT_PUBLIC_VARIABLE}</p>
      <ClientComponent />
    </div>
  );
}
