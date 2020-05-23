/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Children } from '../../../utils/types';
import { withMediaQueries } from '../../../utils/style-helpers';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props): JSX.Element => (
  <div
    css={(theme) =>
      withMediaQueries(theme)({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: [
          '100vw',
          '100vw',
          theme.grid.charlie.maxWidth,
          theme.grid.delta.maxWidth,
          theme.grid.echo.maxWidth,
        ],
      })
    }
  >
    {children}
  </div>
);
