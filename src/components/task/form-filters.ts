import {
  FilterRule,
  MovementMode,
  HasSelectors,
} from '../../adapters/task/task';

export class FormFilters {
  movementModes: MovementMode[];
  selectors: HasSelectors;
  rules: FilterRule[];
  searchText: string;
}
