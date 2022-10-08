import { TaskStatus } from './task-status';
import { Person } from './person';
import { Booking } from './booking';

export enum MovementMode {
  RoRoTourist = 'RORO_TOURIST',
  RoRoAccompaniedFreight = 'RORO_ACCOMPANIED_FREIGHT',
  RoRoUnaccompaniedFreight = 'RORO_UNACCOMPANIED_FREIGHT',
  AirPassenger = 'AIR_PASSENGER',
}

export enum HasSelectors {
  Present = 'PRESENT',
  NotPresent = 'NOT_PRESENT',
  Any = 'ANY',
}

export class TaskFilters {
  movementModes: MovementMode[];
  statuses: TaskStatus[];
  selectors: HasSelectors;
  rules: FilterRule[];
  searchText: string;
  movementDirections: MovementDirection[];
}

export class FilterRule {
  id: number;
  name: string;
}

export type TaskCountsResponse = {
  filters: TaskFilters;
  movementModeCounts: MovementModeCounts;
  taskStatusCounts: TaskStatusCounts;
  taskSelectorCounts: TaskSelectorCounts;
  movementDirectionCounts: MovementDirectionCounts;
};

export type MovementModeCounts = {
  roRoAccompaniedFreight: number;
  roRoUnaccompaniedFreight: number;
  roRoTourist: number;
  airPassenger: number;
};

export type TaskStatusCounts = {
  new: number;
  inProgress: number;
  issued: number;
  complete: number;
};

export type TaskSelectorCounts = {
  hasSelector: number;
  hasNoSelector: number;
  both: number;
};

export type MovementDirectionCounts = {
  inbound: number;
  outbound: number;
  unknown: number;
};

export type Pagination = {
  offset: number;
  limit: number;
};

export type TaskPageRequest = {
  filters: TaskFilters;
  pagination: Pagination;
};

export type TaskPageResponse = {
  request: TaskPageRequest;
  totalNumberOfTasks: number;
  tasks: Task[];
};

export class Task {
  id: string;

  status: TaskStatus;
  assignee: string;
  relisted: boolean;
  latestVersionNumber: 1;
  notes: Note[];

  movement: Movement;
  risks: Risks;
}

export type Note = {
  id: string;
  content: string;
  timestamp: Date;
  userId: string;
};

export type Risks = {
  targetingIndicators: TargetingIndicators;
  matchedSelectorGroups: SelectorGroups;
  matchedRules: Rule[];
  highestThreatLevel: ThreatLevel;
};

export type SelectorGroups = {
  groups: SelectorGroup[];
  totalNumberOfSelectors: number;
};

export type SelectorGroup = {
  threatType: string;
};

export enum ThreatType {
  Selector = 'SELECTOR',
  Rule = 'RULE',
}

export type Rule = {
  id: number;
  name: string;
  abuseTypes: string[];
};

export type ThreatLevel = {
  type: ThreatType;
  value: string;
};

export type Movement = {
  mode: MovementMode;
  description: string;
  groupSize: number;
  journey: Journey;
  person: Person;
  otherPersons: Person[];
  flight: Flight;
  vessel: Vessel;
  vehicle: Vehicle;
  trailer: Trailer;
  baggage: Baggage;
  booker: Booker;
  booking: Booking;
  haulier: Haulier;
  account: Account;
  goods: Goods;
};

export enum MovementDirection {
  Inbound = 'INBOUND',
  Outbound = 'OUTBOUND',
  Unknown = 'UNKNOWN',
}

export type Juncture = {
  country: string;
  location: string;
  time: Date;
};

export type Leg = {
  id: string;
  arrival: Juncture;
  departure: Juncture;
  duration: Number;
};

export type Journey = {
  id: string;
  direction: MovementDirection;
  arrival: Juncture;
  departure: Juncture;
  route: string[];
  itinerary: Leg[];
  duration: Number;
};

export enum DepartureStatus {
  BookedPassenger = 'BOOKED_PASSENGER',
  CheckedIn = 'CHECKED_IN',
  DepartureConfirmed = 'DEPARTURE_CONFIRMED',
  DepartureException = 'DEPARTURE_EXCEPTION',
}

export type Flight = {
  departureStatus: DepartureStatus;
  number: string;
  operator: string;
  seatNumber: string;
};

export type Vessel = {
  operator: string;
  name: string;
};

export type Vehicle = {
  make: string;
  model: string;
  registrationNumber: string;
};

export type Trailer = {
  registrationNumber: string;
};

export type Baggage = {
  numberOfCheckedBags: number;
  weight: string;
  tags: string[];
};

export type Haulier = {
  name: string;
};

export type Booker = {
  name: string;
};

export type Account = {
  reference: string;
  name: string;
  shortName: string;
};

export type Goods = {
  description: string;
  hazardous: boolean;
};

export type TargetingIndicator = {
  id: number;
  name: string;
  description: string;
  score: number;
};

export type TargetingIndicators = {
  indicators: TargetingIndicator[];
  count: number;
  score: number;
};

export const isNew = (task: Task): boolean => {
  return task.status === TaskStatus.New;
};

export const isInProgress = (task: Task): boolean => {
  return task.status === TaskStatus.InProgress;
};
