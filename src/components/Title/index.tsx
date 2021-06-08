import React, { FC } from 'react';

import { H1 } from 'components/Title/styled';

interface TitleProps {
  children: string;
}

export const Title: FC<TitleProps> = ({ children }: TitleProps) => (
  <H1>{children}</H1>
);
