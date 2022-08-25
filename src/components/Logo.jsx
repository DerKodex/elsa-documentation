import Image from 'next/future/image'
import logoImage from '@/images/logo-small.png';

export function Logo(props) {
  return (
    <div className="flex space-x-2">
      <Image src={logoImage} unoptimized alt="Elsa Workflows 3.0 logo"/>
      <h2 className="font-display text-2xl tracking-tight text-slate-900 dark:text-white uppercase">Elsa 3.0</h2>
    </div>
  );
}