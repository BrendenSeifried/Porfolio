import React from 'react'
import { useState } from 'react';

export default function Pages() {
      const [expandOne, setExpandOne] = useState(true);
  const [expandTwo, setExpandTwo] = useState(true);
  const [expandThree, setExpandThree] = useState(true);
  const [expandFour, setExpandFour] = useState(true);
  const [blur, setBlur] = useState(false);
  return {
    expandOne, setExpandOne,
    blur, setBlur
  }
}
