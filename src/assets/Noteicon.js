import * as React from 'react';

function Noteicon(props){
    return(
<svg width={278} height={343} fill="none" {...props}>
  <path fill="url(#prefix__pattern0)" d="M0 0h278v343H0z" />
  <defs>
    <pattern
      id="prefix__pattern0"
      patternContentUnits="objectBoundingBox"
      width={1}
      height={1}
    >
      <use
        xlinkHref="#prefix__image0_3_145"
        transform="matrix(.00072 0 0 .00058 0 -.001)"
      />
    </pattern>
    <image
      id="prefix__image0_3_145"
      width={1391}
      height={1721}
    />
  </defs>
</svg>  
    )
};

const MemoNoteicon = React.memo(Noteicon);

export default MemoNoteicon;