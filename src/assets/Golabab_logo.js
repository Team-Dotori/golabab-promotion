import * as React from 'react';

function Golabab_logo(props){
    return ( 
<svg width={80} height={47} viewBox="0 0 80 60" fill="none" {...props}>
  <path
    d="M13.409 33v-4.19C9.606 29.23 2 28.225 2 20.852c0-7.373 6.76-8.378 10.141-7.96C11.578 9.262 13.325 2 24.818 2c14.367 0 8.874 19.27 2.958 15.081-.986-1.676-1.268-4.86 5.493-4.19 3.099-.697 9.888-.418 12.254 6.285 2.366 6.702-4.648 9.216-8.45 9.635L35.803 33H13.41z"
    stroke="#573719"
    strokeWidth={2.5}
    strokeLinejoin="round"
  />
  <path
    d="M17 19c.828 2.85 4.386 8.64 12 9"
    stroke="#573719"
    strokeLinejoin="round"
  />
  <ellipse cx={20} cy={42} rx={2} ry={4} fill="#573719" />
  <ellipse cx={29} cy={42} rx={2} ry={4} fill="#573719" />
  <path
    d="M17 55.552c1.98 1.379 7.552 3 14-1.552M35.007 50c-1.488.153-4.367 1.194-3.97 4.131.397 2.938 3.474 3.06 4.963 2.755"
    stroke="#573719"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
   )
};

const MemoGolabab_logo = React.memo(Golabab_logo);
export default MemoGolabab_logo;
