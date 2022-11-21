import * as _ from 'lodash';
import { toShortDateFormat } from '../date/date';
import { MovementStats } from './movement-stats';

export type Person = {
  entitySearchUrl: string;
  name: PersonName;
  role: PersonRole;
  dateOfBirth: Date;
  gender: string;
  nationality: string;
  document: Document;
  movementStats: MovementStats;
  frequentFlyerNumber: string;
  ssrCodes: string[];
};

export type Document = {
  entitySearchUrl: string;
  type: string;
  number: string;
  validFrom: Date;
  expiry: Date;
  countryOfIssue: string;
};

export type PersonName = {
  first: string;
  last: string;
  full: string;
};

export enum PersonRole {
  Passenger = 'PASSENGER',
  Crew = 'CREW',
  Driver = 'DRIVER',
  Unknown = 'UNKNOWN',
}

const unknown = 'Unknown';

export const formatPersonRole = (person: Person): string => {
  return formatRole(person?.role);
};

const formatRole = (role: PersonRole): string => {
  if (role) {
    return _.startCase(_.toLower(role));
  }
  return unknown;
};

export const formatGender = (person: Person): string => {
  if (!person) {
    return unknown;
  }
  switch (person.gender) {
    case 'M':
      return 'Male';
    case 'F':
      return 'Female';
    default:
      return unknown;
  }
};

export const formatPersonNationality = (person: Person): string => {
  return person?.nationality || unknown;
};

export const formatPersonDateOfBirth = (person: Person) => {
  return toShortDateFormat(person?.dateOfBirth);
};

export const formatPersonFirstName = (person: Person) => {
  return person.name?.first || unknown;
};

export const formatPersonLastName = (person: Person) => {
  return person.name?.last || unknown;
};

export const formatDocumentNumber = (document: Document) => {
  return document?.number || unknown;
};

export const formatDocumentCountryOfIssue = (document: Document) => {
  return document?.countryOfIssue || unknown;
};

export const formatDocumentValidFrom = (document: Document) => {
  return formatDocumentDate(document?.validFrom);
};

export const formatDocumentExpiry = (document: Document) => {
  return formatDocumentDate(document?.expiry);
};

const formatDocumentDate = (date: Date) => {
  if (date) {
    return toShortDateFormat(date);
  }
  return unknown;
};
