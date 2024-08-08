'use client';

import React, { useState } from 'react';
import { Section, Cell, Image, List, CompactPagination } from '@telegram-apps/telegram-ui';

import { Link } from '@/components/Link/Link';

import tonSvg from './_assets/ton.svg';

const Home = () => {
  const [selected, setSelected] = useState(1);

  return (
    // <List>
    //   <Section
    //     header='Features'
    //     footer='You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects'
    //   >
    //     <Link href='/ton-connect'>
    //       <Cell
    //         before={<Image src={tonSvg.src} style={{ backgroundColor: '#007AFF' }}/>}
    //         subtitle='Connect your TON wallet'
    //       >
    //         TON Connect
    //       </Cell>
    //     </Link>
    //   </Section>
    //   <Section
    //     header='Application Launch Data'
    //     footer='These pages help developer to learn more about current launch information'
    //   >
    //     <Link href='/init-data'>
    //       <Cell subtitle='User data, chat information, technical data'>Init Data</Cell>
    //     </Link>
    //     <Link href='/launch-params'>
    //       <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
    //     </Link>
    //     <Link href='/theme-params'>
    //       <Cell subtitle='Telegram application palette information'>Theme Parameters</Cell>
    //     </Link>
    //   </Section>
    // </List>
    <div
      style={{
        alignItems: 'center',
        // background: 'var(--tgui--secondary_bg_color)',
        display: 'inline-flex',
        padding: 20
      }}
    >
      test mini app
      {/* <CompactPagination>
        <CompactPagination.Item
          onClick={() => setSelected(1)}
          selected={selected === 1}
        >
          1
        </CompactPagination.Item>
        <CompactPagination.Item
          onClick={() => setSelected(2)}
          selected={selected === 2}
        >
          2
        </CompactPagination.Item>
        <CompactPagination.Item
          onClick={() => setSelected(3)}
          selected={selected === 3}
        >
          3
        </CompactPagination.Item>
      </CompactPagination> */}
    </div>
  );
}

export default Home;
