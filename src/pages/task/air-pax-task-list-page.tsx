import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import {
  Task,
  HasSelectors,
  MovementMode,
  TaskSelectorStatusCounts,
} from '../../adapters/task/task';
import { FormFilters } from '../../components/task/form-filters';
import AirPaxTaskListCard from '../../components/task/air-pax-task-list-card';

import '../../styles/task-list-page.scss';
import TaskListPage from '../../components/task/task-list-page';

const AirPaxTaskListPage: FC = () => {
  const defaultFormFilters: FormFilters = {
    movementModes: [MovementMode.AirPassenger],
    selectors: HasSelectors.Any,
    rules: [],
    searchText: '',
  };

  const taskFilterForm = {
    id: 'filter',
    version: '0.0.1',
    name: 'filter',
    type: 'form',
    pages: [
      {
        id: 'filter',
        name: 'filter',
        components: [
          {
            id: 'search',
            fieldId: 'searchText',
            label: 'Search',
            type: 'text',
            required: false,
            placeholder: 'Passenger Name or Task Id',
          },
          {
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
          },
          {
            id: 'rules',
            fieldId: 'rules',
            label: 'Rule matches',
            type: 'multiautocomplete',
            multi: true,
            required: false,
          },
        ],
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

  const populateTaskStatusCounts = (
    taskFilterForm: any,
    taskSelectorStatusCounts: TaskSelectorStatusCounts,
  ): any => {
    const copy = _.cloneDeep(taskFilterForm);
    const component = copy.pages[0].components.filter(
      (component: any) => component.id === 'selectors',
    )[0];
    component.data.options.forEach((option: any) => {
      replaceTaskSelectorStatusCount(option, taskSelectorStatusCounts);
    });
    return copy;
  };

  const replaceTaskSelectorStatusCount = (
    option: any,
    taskSelectorStatusCounts: TaskSelectorStatusCounts,
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
    taskSelectorStatusCounts: TaskSelectorStatusCounts,
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

  const handleTaskClaimed = (task: Task) => {
    console.log(`air pax task claimed ${task.id}`);
  };

  const handleTaskUnclaimed = (task: Task) => {
    console.log(`air pax task unclaimed ${task.id}`);
  };

  const handleTaskViewed = (task: Task) => {
    console.log(`air pax task viewed ${task.id}`);
  };

  const toTaskCard = (task: Task): React.ReactNode => {
    return (
      <AirPaxTaskListCard
        task={task}
        key={task.id}
        onTaskClaimed={handleTaskClaimed}
        onTaskUnclaimed={handleTaskUnclaimed}
        onTaskViewed={handleTaskViewed}
      />
    );
  };

  return (
    <TaskListPage
      headerText="Air Passenger Tasks"
      defaultFormFilters={defaultFormFilters}
      taskFilterForm={taskFilterForm}
      populateFormStatusCounts={populateTaskStatusCounts}
      pnrAccessCheckEnabled={true}
      toTaskCard={toTaskCard}
    />
  );
};

export default AirPaxTaskListPage;
