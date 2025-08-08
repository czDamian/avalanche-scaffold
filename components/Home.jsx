"use client"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ReadData from './ReadData';
import ReadData2 from './ReadData2';
import WriteData from './WriteData';

export const Home = () => {
  return (
    <div>
      {/* connect wallet button from rainbowkit. You can customise it to your liking*/}
      <ConnectButton label='Connect Wallet' />

      {/* read data from the blockchain using wagmi hook*/}
      <ReadData />

      {/* read data from the blockchain and your smart contract */}
      <ReadData2 />

      {/* write data to the blockchain / perfororm a transaction */}
      <WriteData />


    </div>
  )

    ;
};
