import React from 'react';
import GetToKnow from './GetToKnow';
import ConnectWithUs from './ConnectWithUs';
import MakeMoneyWithUs from './MakeMoneyWithUs';
import LetUsHelpYou from './LetUsHelpYou';

function Footer() {
  return (
    <footer className="flex justify-around bg-gray-800 text-white p-6 mt-auto">
      <GetToKnow />
      <ConnectWithUs />
      <MakeMoneyWithUs />
      <LetUsHelpYou/>
    </footer>
  );
}

export default Footer;