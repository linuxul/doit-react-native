import React from 'react';
import {FC} from 'react';
import * as D from '../data';
import {Text} from 'react-native';

export type PersonProps = {
  person: D.IPerson;
};

const Person: FC<PersonProps> = ({person}) => {
  return <Text>{JSON.stringify(person, null, 2)}</Text>;
};

export default Person;

// const Person: FC<PersonProps>

// const Person: FC<PersonProps> = ({person}) => {
//   return <Text>{JSON.stringify(person, null, 2)}</Text>;
// };

// const Person: FC<PersonProps> = props => {
//   const {person} = props;
//   return <Text>{JSON.stringify(person, null, 2)}</Text>;
// };
