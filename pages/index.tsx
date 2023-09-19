import React, { forwardRef, useMemo } from 'react'
import { useSnapshot } from 'valtio';
import state from '../state';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface HomeProps {
  data: any
  seo: any
}

const Home = forwardRef((props: HomeProps, ref: any) => {
  Home.displayName = "Home";
  // const snapshot = useSnapshot(state); // Leaving this here in case we need to re-render component
  const router = useRouter();

  const cellStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'lightgrey',
  };
  // @ts-ignore
  const handleCellClick = (i) => {
    state.selectedCell = i;
    router.push(`/articles/${i}`);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {Array.from({ length: 36 }, (_, i) => (
        <motion.div
          key={i}
          onClick={() => handleCellClick(i)}
          layoutId={`cell-${i}`}
          style={cellStyle}
        >
          {`Cell ${i}`}
        </motion.div>
      ))}
    </div>
  );
});

export default Home;
