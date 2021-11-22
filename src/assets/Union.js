import * as React from 'react';

function Union(props){
    return(
<svg width={24} height={17} fill="none" {...props}>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M13.44.44a1.5 1.5 0 012.12 0l7 7 .01.008a1.5 1.5 0 01.004 2.13l-7.016 6.985a1.5 1.5 0 11-2.116-2.126L17.898 10H1.5a1.5 1.5 0 110-3h16.379l-4.44-4.44a1.5 1.5 0 010-2.12z"
    fill="#FF5151"
  />
</svg>
        
    )
};

const MemoUnion = React.memo(Union);
export default MemoUnion;
