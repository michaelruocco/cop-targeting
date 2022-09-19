import {
  FilterRule,
  MovementMode,
  HasSelectors,
  MovementDirection,
} from '../../adapters/task/task';

export class FormFilters {
  movementModes: MovementMode[];
  selectors: HasSelectors;
  rules: FilterRule[];
  searchText: string;
  movementDirections: MovementDirection[];
}
