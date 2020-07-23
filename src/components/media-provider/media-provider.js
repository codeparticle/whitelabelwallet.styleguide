/* 
 *  This is the default license template.
 *  
 *  File: media-provider.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { useMedia } from 'hooks/use-media';

const MediaContext = React.createContext(null);

function MediaProvider(props) {
  const media = useMedia(false);

  return (
    <MediaContext.Provider value={media}>
      {props.children}
    </MediaContext.Provider>
  );
}

export {
  MediaContext,
  MediaProvider,
};
