/* 
 *  This is the default license template.
 *  
 *  File: use-offset-trigger.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Hook to determine when an effect should trigger
 * based off element offset and given triggerpoint
 * @author Gabriel Womble
 */
import { useState, useEffect } from 'react';

/**
 * @returns {boolean} shouldTrigger
 * Note: returns true when offset is lower than trigger point
 * @param {string} elemSelector element selector
 * @param {number} triggerPoint - point at which to trigger
 */
export function useOffsetTrigger(elemSelector, triggerPoint) {
  function getOffset() {
    return document.querySelector(elemSelector).getBoundingClientRect().top;
  }

  const [offset, setOffset] = useState(0);

  function handleScrollEvent() {
    setOffset(getOffset());
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent, true);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent, true);
    };
  }, [handleScrollEvent]);

  return offset <= triggerPoint;
}
