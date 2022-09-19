import * as _ from 'lodash';
import {
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
  label: 'Movement Direction',
  type: 'checkboxes',
  required: true,
  dynamicoptions: 'true',
  data: {
    options: [
      {
        value: 'INBOUND',
        label: 'Inbound',
      },
      {
        value: 'OUTBOUND',
        label: 'Outbound',
      },
      {
        value: 'UNKNOWN',
        label: 'Unknown',
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

export const populateTaskCounts = (
  taskFilterForm: any,
  taskCounts: TaskCountsResponse,
): any => {
  const copy = _.cloneDeep(taskFilterForm);
  const component = copy.pages[0].components.filter(
    (component: any) => component.id === 'selectors',
  )[0];
  component.data.options.forEach((option: any) => {
    replaceTaskSelectorStatusCount(option, taskCounts.taskSelectorCounts);
  });
  return copy;
};

const replaceTaskSelectorStatusCount = (
  option: any,
  taskSelectorStatusCounts: TaskSelectorCounts,
) => {
  const replacement = toSelectorCountReplacement(
    option,
    taskSelectorStatusCounts,
  );
  option.label = option.label.replace(
    replacement.placeholder,
    replacement.value.toString(),
  );
};

const toSelectorCountReplacement = (
  option: any,
  taskSelectorStatusCounts: TaskSelectorCounts,
): any => {
  switch (option.value) {
    case 'NOT_PRESENT':
      return {
        placeholder: '%NO_SELECTOR_COUNT%',
        value: taskSelectorStatusCounts.hasNoSelector,
      };
    case 'PRESENT':
      return {
        placeholder: '%HAS_SELECTOR_COUNT%',
        value: taskSelectorStatusCounts.hasSelector,
      };
    default:
      return {
        placeholder: '%ANY_SELECTOR_COUNT%',
        value: taskSelectorStatusCounts.both,
      };
  }
};
