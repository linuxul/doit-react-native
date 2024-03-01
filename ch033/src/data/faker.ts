import {faker} from '@faker-js/faker';
import * as U from './util';
// import {v4 as uuidv4} from 'uuid';

export const randomId = (): string => {
  return 'uuid';
};
export const randomName = (): string => faker.person.fullName();
export const randomEmail = (): string => faker.internet.email();
export const randomAvatarUrl = (name?: string): string =>
  U.avatarUriByName(name ?? randomName());
export const randomDate = (): Date => faker.date.recent();
export const randomParagraphs = (count: number = 2): string =>
  U.makeArray(count).map(faker.lorem.paragraph).join('\n');
export const randomImage = (): string => // 오타 수정됨: randromImage -> randomImage
  U.unsplashUrl(U.random(800, 1000), U.random(800, 1000));

// import {faker} from '@faker-js/faker';
// import * as U from './util';

// export const randomId = (): string => faker.datatype.uuid();
// export const randomName = (): string => faker.person.fullName();
// export const randomEmail = (): string => faker.internet.email();
// export const randomAvatarUrl = (name?: string): string =>
//   U.avatarUriByName(name ?? randomName());
// export const randomDate = (): Date => faker.date.recent();
// export const randomParagraphs = (count: number = 2): string =>
//   U.makeArray(count).map(faker.lorem.paragraph).join('\n');
// export const randromImage = (): string =>
//   U.unsplashUrl(U.random(800, 1000), U.random(800, 1000));
