import {
  FilterRule,
  MovementMode,
  HasSelectors,
} from '../../adapters/task/targeting-api-client';

export class FormFilters {
  movementModes: MovementMode[];
  selectors: HasSelectors;
  rules: FilterRule[];
  searchText: string;
}
