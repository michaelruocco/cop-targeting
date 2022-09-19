import * as _ from 'lodash';
import {
  MovementDirectionCounts,
  TaskCountsResponse,
  TaskSelectorCounts,
} from '../../adapters/task/task';

const searchTextComponent = {
  id: 'search',
  fieldId: 'searchText',
  label: 'Search',
  type: 'text',
  required: false,
  placeholder: 'Passenger Name or Task Id',
};

const roroModeCheckboxesComponent = {
  id: 'mode',
  fieldId: 'movementModes',
  label: 'Mode',
  type: 'checkboxes',
  required: true,
  dynamicoptions: 'true',
  data: {
    options: [
      {
        value: 'RORO_UNACCOMPANIED_FREIGHT',
        label: 'Unaccompanied freight',
      },
      {
        value: 'RORO_ACCOMPANIED_FREIGHT',
        label: 'Accompanied freight',
      },
      {
        value: 'RORO_TOURIST',
        label: 'Tourist',
      },
    ],
  },
};

const selectorRadiosComponent = {
  id: 'selectors',
  fieldId: 'selectors',
  label: 'Selectors',
  type: 'radios',
  required: true,
  dynamicoptions: 'true',
  data: {
    options: [
      {
        value: 'NOT_PRESENT',
        label: `Has no selector (%NO_SELECTOR_COUNT%)`,
      },
      {
        value: 'PRESENT',
        label: `Has selector (%HAS_SELECTOR_COUNT%)`,
      },
      {
        value: 'ANY',
        label: `Both (%ANY_SELECTOR_COUNT%)`,
      },
    ],
  },
};

const ruleAutocompleteComponent = {
  id: 'rules',
  fieldId: 'rules',
  label: 'Rule matches',
  type: 'multiautocomplete',
  multi: true,
  required: false,
};

const directionCheckboxesComponent = {
  id: 'movementDirections',
  fieldId: 'movementDirections',
  label: 'Direction',
  type: 'checkboxes',
  required: true,
  dynamicoptions: 'true',
  data: {
    options: [
      {
        value: 'INBOUND',
        label: 'Inbound (%INBOUND_COUNT%)',
      },
      {
        value: 'OUTBOUND',
        label: 'Outbound (%OUTBOUND_COUNT%)',
      },
      {
        value: 'UNKNOWN',
        label: 'Unknown (%UNKNOWN_MOVEMENT_DIRECTION_COUNT%)',
      },
    ],
  },
};

const roroComponents = [
  searchTextComponent,
  roroModeCheckboxesComponent,
  selectorRadiosComponent,
  ruleAutocompleteComponent,
  directionCheckboxesComponent,
];

const airPaxComponents = [
  searchTextComponent,
  selectorRadiosComponent,
  ruleAutocompleteComponent,
  directionCheckboxesComponent,
];

const toTaskFilterForm = (components: any): any => {
  return {
    id: 'filter',
    version: '0.0.1',
    name: 'filter',
    type: 'form',
    pages: [
      {
        id: 'filter',
        name: 'filter',
        components: components,
        actions: [
          {
            type: 'submit',
            validate: true,
            label: 'Apply',
          },
        ],
      },
    ],
  };
};

export const roroTaskFilterForm = (): any => {
  return toTaskFilterForm(roroComponents);
};

export const airPaxTaskFilterForm = (): any => {
  return toTaskFilterForm(airPaxComponents);
};

export const populateFormTaskCounts = (
  taskFilterForm: any,
  taskCounts: TaskCountsResponse,
): any => {
  const copy = _.cloneDeep(taskFilterForm);

  const selectorComponent = findComponentById(copy, 'selectors');
  selectorComponent.data.options.forEach((option: any) => {
    replaceTaskSelectorCount(option, taskCounts.taskSelectorCounts);
  });

  const movementComponent = findComponentById(copy, 'movementDirections');
  movementComponent.data.options.forEach((option: any) => {
    replaceMovementDirectionCount(option, taskCounts.movementDirectionCounts);
  });

  return copy;
};

export const findComponentById = (form: any, id: string): any => {
  return form.pages[0].components.filter(
    (component: any) => component.id === id,
  )[0];
};

const replaceTaskSelectorCount = (
  option: any,
  taskSelectorCounts: TaskSelectorCounts,
) => {
  const replacement = toSelectorCountReplacement(option, taskSelectorCounts);
  option.label = option.label.replace(
    replacement.placeholder,
    replacement.value.toString(),
  );
};

const toSelectorCountReplacement = (
  option: any,
  taskSelectorCounts: TaskSelectorCounts,
): any => {
  switch (option.value) {
    case 'NOT_PRESENT':
      return {
        placeholder: '%NO_SELECTOR_COUNT%',
        value: taskSelectorCounts.hasNoSelector,
      };
    case 'PRESENT':
      return {
        placeholder: '%HAS_SELECTOR_COUNT%',
        value: taskSelectorCounts.hasSelector,
      };
    default:
      return {
        placeholder: '%ANY_SELECTOR_COUNT%',
        value: taskSelectorCounts.both,
      };
  }
};

const replaceMovementDirectionCount = (
  option: any,
  movementDirectionCounts: MovementDirectionCounts,
) => {
  const replacement = toMovementDirectionCountReplacement(
    option,
    movementDirectionCounts,
  );
  option.label = option.label.replace(
    replacement.placeholder,
    replacement.value.toString(),
  );
};

const toMovementDirectionCountReplacement = (
  option: any,
  movementDirectionCounts: MovementDirectionCounts,
): any => {
  switch (option.value) {
    case 'INBOUND':
      return {
        placeholder: '%INBOUND_COUNT%',
        value: movementDirectionCounts.inbound,
      };
    case 'OUTBOUND':
      return {
        placeholder: '%OUTBOUND_COUNT%',
        value: movementDirectionCounts.outbound,
      };
    default:
      return {
        placeholder: '%UNKNOWN_MOVEMENT_DIRECTION_COUNT%',
        value: movementDirectionCounts.unknown,
      };
  }
};
