/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Variants } from '../../../../../utils/types';

type Props = {
  variant: Variants;
  error?: string;
  touched: boolean;
  rows?: number;
};

export const StyledTextarea = ({ variant, error, touched, rows }: Props) => (
  <textarea
    rows={rows}
    css={(theme) => {
      const colorVariants = {
        primary: {
          backgroundColor: theme.colors.white,
          color: theme.colors.n200,
          borderColor: !(error && touched)
            ? theme.colors.n500
            : theme.colors.danger,

          '&::placeholder': {
            color: theme.colors.n300,
          },
        },
        secondary: {
          backgroundColor: theme.colors.bodyBg,
          color: theme.colors.bodyColor,
          borderColor: !(error && touched)
            ? theme.colors.n500
            : theme.colors.danger,

          '&::placeholder': {
            color: theme.colors.n300,
          },
        },
        tertiary: {
          backgroundColor: theme.colors.n100,
          color: theme.colors.n900,
          borderColor: !(error && touched)
            ? theme.colors.n400
            : theme.colors.danger,

          '&::placeholder': {
            color: theme.colors.n700,
          },
        },
      };

      return {
        ...colorVariants[variant],
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none',
        borderStyle: 'solid',
        borderRadius: theme.borderRadius.bravo,
        borderWidth: theme.borderWidth.bravo,
        fontFamily: theme.fontStack.default,
        fontSize: theme.text.delta.fontSize,
        marginTop: theme.spacings.alpha,
        padding: theme.spacings.charlie,
        resize: 'none',
        width: '100%',
      };
    }}
  />
);