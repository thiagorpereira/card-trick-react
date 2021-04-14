import React from 'react';
import { TitleGame, ContainerApp, RectangleLarge, RectangleMedium, RectangleSmall, RectangleSmaller } from './styles';

function ContainerLayout({ children }) {
  return (
    <ContainerApp>
      <TitleGame>MAGIC TRICK</TitleGame>
      <RectangleLarge>
        <RectangleMedium>
          <RectangleSmall>
            <RectangleSmaller>
              {children}
            </RectangleSmaller>
          </RectangleSmall>
        </RectangleMedium>
      </RectangleLarge>
    </ContainerApp>
  );
}

export default ContainerLayout;