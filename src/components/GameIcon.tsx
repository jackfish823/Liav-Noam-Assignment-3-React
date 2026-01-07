import type { FC, CSSProperties } from 'react';

import xIcon from '../assets/x.svg';
import oIcon from '../assets/o.svg';

interface Props {
  value: string | null;
  style?: CSSProperties;
}

const GameIcon: FC<Props> = ({ value, style }) => {
    if (!value) return null;
    
    return <img src={value === 'X' ? xIcon : oIcon} alt={value || ''} style={style} />;
};

export default GameIcon;

