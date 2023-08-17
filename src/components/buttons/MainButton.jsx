import React, { useState, useEffect } from 'react';

import { Button } from 'reactstrap';

export default function MainButton({ color, text, click }) {

  console.log(color)
  return (
    <>
      <Button
        style={{
          margin:'3px',
          width: '100%',
          backgroundColor: color === 'var(--mint)' ? color : 'white',
          color: color === 'var(--mint)' ? 'white' : 'var(--mint)',
          border: color === 'var(--mint)' ? 'none' : '1px solid var(--mint)',
        }}
        onClick={click}>
        {text ? text : 'Continue'}
      </Button>
    </>
  )
}