/** @jsx jsx */
import { jsx } from '@emotion/react';

import { withMediaQueries } from '../../../utils/style-helpers';

import { Children } from '../../../types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props): JSX.Element => (
  <div
    css={theme =>
      withMediaQueries(theme)({
        marginBottom: [
          theme.spacings.foxtrot,
          theme.spacings.foxtrot,
          theme.spacings.foxtrot,
          theme.spacings.golf,
          theme.spacings.golf,
        ],
      })
    }
  >
    {children}
  </div>
);
