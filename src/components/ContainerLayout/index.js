import React from 'react';
import { RectangleLarge, RectangleMedium, RectangleSmall, RectangleSmaller } from './styles';

function ContainerLayout({ children }) {
  return (
    <RectangleLarge>
      <RectangleMedium>
        <RectangleSmall>
          <RectangleSmaller>
            {children}
          </RectangleSmaller>
        </RectangleSmall>
      </RectangleMedium>
    </RectangleLarge>
  );
}

export default ContainerLayout;