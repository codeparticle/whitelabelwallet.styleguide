/* 
 *  This is the default license template.
 *  
 *  File: use-component-size.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Reusable component size hook. This hook can be passed a component ref
 * and return the height and width dimensions of a component
 * @author Kevin Van Beek
 */
import {
  useEffect,
  useState,
} from 'react';

/**
 * @returns {Object} - { height, width } of a component
 * @param {Object} containerRef - the ref set on a container
 */
export function useComponentSize(containerRef) {
  const [size, setSize] = useState('');
  const getSize = ref => ref.current.getBoundingClientRect();
  const updateSize = (ref) => {
    const { width, height } = getSize(ref);
    setSize({ width, height });
  };

  useEffect(() => {
    updateSize(containerRef);
    const handleResize = () => {
      updateSize(containerRef);
    };

    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, []);

  return size;
}
