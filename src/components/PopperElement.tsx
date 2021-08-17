import React from 'react';
import { usePopper } from 'react-popper';

const PopperElement = ({ children }: { children: React.FC<{ element: any; popper: any }> }) => {
  const [referenceElement, setReferenceElement] = React.useState<HTMLElement>();
  const [popperElement, setPopperElement] = React.useState<HTMLElement>();
  const { styles, attributes } = usePopper(referenceElement, popperElement);
  const [isHovered, setIsHovered] = React.useState(false);

  const popperStyles: React.CSSProperties = {
    ...styles.popper,
    display: isHovered ? null : 'none',
    zIndex: 1,
    pointerEvents: 'none',
  };

  return children({
    element: { ref: setReferenceElement, onMouseOver: () => setIsHovered(true), onMouseOut: () => setIsHovered(false) },
    popper: {
      ref: setPopperElement,
      style: popperStyles,
      ...attributes.popper,
    },
  });
};

export default PopperElement;
