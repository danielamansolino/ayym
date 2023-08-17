import React, { useState, useEffect } from 'react';

import { Button } from 'reactstrap';

export default function MainButton({ color, text, click }) {

  return (
    <>
      <Button
        style={{
          margin:'3px',
          width: '100%',
        }}
        color={color ? color : 'success'}
        onClick={click}>
        {text ? text : 'No Text'}
      </Button>
    </>
  )
}