import React from 'react'
import { Cards } from './Cards/Cards';

import {
  WrapperFeed,
} from './styles'

type Props = {}

export const Feed = (props: Props) => {
  return (
    <WrapperFeed>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
    </WrapperFeed>
  );
}
