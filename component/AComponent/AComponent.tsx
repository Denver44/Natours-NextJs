import React, { forwardRef, useState } from 'react';

export interface AComponentProps {
  [key: string]: any;
  onClickEvent?: (e: any) => void;
}

const Component = (props: AComponentProps, ref) => {
  const [attr] = useState(
    Object.keys(props)
      .filter((p) => p !== 'children' && p !== 'onClickEvent')
      .reduce((obj, key) => {
        obj[key] = props[key];
        if (ref) {
          obj['ref'] = ref;
        }
        return obj;
      }, {})
  );

  const onClick = (e) => {
    e.preventDefault();
    if (props.onClickEvent && typeof props.onClickEvent === 'function') {
      props.onClickEvent(e);
    }
  };

  return (
    <a href="#" onClick={onClick} {...attr}>
      {props.children}
    </a>
  );
};

const A = forwardRef(Component);

A.displayName = 'A';

export default A;
