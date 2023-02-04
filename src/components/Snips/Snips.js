import React from 'react';
import { useSnips } from '../../context/SnipsContext.js';

export default function Snips() {
  const { snips } = useSnips();
  console.log('snips', snips);
  return (
    <ul>
      {snips.map((snip) => {
        return (
          <div key={snip.id}>
            <h3>{snip.name}</h3>
            <p>{snip.body}</p>
          </div>
        );
      })}
    </ul>
  );
}
