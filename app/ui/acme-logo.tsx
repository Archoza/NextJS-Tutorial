import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { inter } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${inter.className[1]} flex flex-row items-center leading-none text-white`}
    >bv  
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
