import React, { useState } from 'react';
import { useSnips } from '../../context/SnipsContext.js';
import { createSnip } from '../../services/snips.js';
import { Grid, TextField } from '@mui/material';
import { Button } from '@mui/material';

export default function SnipsForm() {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const { setSnips } = useSnips();

  const handleNewSnip = async () => {
    try {
      const snip = await createSnip(name, body);
      setSnips((prev) => [...prev, snip]);
      setBody('');
    } catch (e) {
      console.error(e.message);
    }
  };

  const submitSnip = (e) => {};

  return (
    <div>
      {/* <input
        type="text"
        placeholder="anything but ctrl+c"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      <Grid container gridTemplateColumns="1fr 1fr 1fr" spacing={5}>
        <Grid gap={1} justifyContent="center" container item spacing={1}>
          <TextField id="name-input" label="Name" defaultValue={name} helperText="" />

          <TextField id="body-input" label="Description" defaultValue={body} />

          <Button variant="outlined" size="large" onClick={handleNewSnip}>
            Click Me
          </Button>
        </Grid>
      </Grid>

      {/* <input
        type="text"
        placeholder="anything but ctrl+c"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      /> */}
    </div>
  );
}
