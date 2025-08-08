"use client"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ReadData from './ReadData';
import ReadData2 from './ReadData2';
import WriteData from './WriteData';
import Image from 'next/image';

export const Home = () => {
  return (
    <div>
      {/* connect wallet button from rainbowkit. You can customise it to your liking*/}
      <div className="flex justify-between items-center px-4 md:px-8 py-2">
        <div className='text-2xl font-bold'>
          <Image src="/avax-logo.png" alt='Avax Logo' width={28} height={28} className='inline mr-1' />
          Avalanche Scaffold
        </div>
        <ConnectButton label='Connect Wallet' />
      </div>

      <div className='px-8 py-2 max-w-5xl mx-auto'>
      <p className='text-gray-300 text-center md:px-20 my-8'>This is a starter template for building decentralized applications (dApps) on the Avalanche blockchain. It comes pre-configured with RainbowKit for wallet connections, Wagmi for interacting with smart contracts, and Next.js for the frontend.</p>
        <ReadData />
        <ReadData2 />
        <WriteData />
      </div>


    </div>
  )

    ;
};
