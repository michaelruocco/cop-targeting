import * as React from 'react';
import { FC } from 'react';
import TaskHeading from './task-heading';
import AirPaxTaskListItem from './air-pax-task-list-item';
import { Task } from '../../adapters/task/task-client';
import Pagination from '../../pages/task/pagination';
import FormRenderer, { Utils } from '@ukhomeoffice/cop-react-form-renderer';
import { MultiSelectAutocomplete } from '@ukhomeoffice/cop-react-components';

class AppliedFilters {
  movementModes: string[];
  mode: string;
  selectors: string;
  rules: string[];
  searchText: string;
}

class Props {
  tasks: Task[];
}

const AirPaxTaskList: FC<Props> = ({ tasks }) => {
  const appliedFilters: AppliedFilters = {
    movementModes: ['AIR_PASSENGER'],
    mode: 'AIR_PASSENGER',
    selectors: 'ANY',
    rules: [],
    searchText: '',
  };

  const rulesOptions: string[] = [];

  const airpax = {
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
            id: 'mode',
            fieldId: 'mode',
            label: 'Mode',
            type: 'select',
            required: true,
            dynamicoptions: 'true',
            data: {
              options: [
                {
                  value: 'AIR_PASSENGER',
                  label: 'Air passenger',
                },
              ],
            },
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
                  label: 'Has no selector',
                },
                {
                  value: 'PRESENT',
                  label: 'Has selector',
                },
                {
                  value: 'ANY',
                  label: 'Both',
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

  const onApplyFilter = async (_: any, payload: any, onSuccess: any) => {
    console.log(`applying filter ${JSON.stringify(payload)}`);
    onSuccess(payload);
  };

  const onGetComponent = (component: any, wrap: any) => {
    const attrs = Utils.Component.clean(component, [
      'fieldId',
      'dynamicoptions',
      'multi',
    ]);
    if (component.type === 'select') {
      const select = (
        <select
          className="govuk-select"
          id={component.id}
          name={component.fieldId}
          onChange={component.onChange}
          onBlur={component.onChange}
          value={component.value}
        >
          {component.data.options.map((opt: any) => {
            return (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            );
          })}
        </select>
      );
      if (wrap) {
        return Utils.Component.wrap(attrs, select);
      }
      return select;
    }
    if (component.type === 'multiautocomplete') {
      const multiSelect = (
        <MultiSelectAutocomplete
          className="hods-multi-select-autocomplete"
          {...component}
          item={{ value: 'id', label: 'name' }}
          options={rulesOptions}
        />
      );
      if (wrap) {
        return Utils.Component.wrap(attrs, multiSelect);
      }
      return multiSelect;
    }
    return null;
  };

  const handleFilterReset = (e: any) => {
    console.log('resetting filters');
    //e.preventDefault();
    //localStorage.removeItem(AIRPAX_FILTERS_KEY);
    //getFiltersAndSelectorsCount(getTaskStatus(TASK_STATUS_KEY));
    //setAppliedFilters(DEFAULT_APPLIED_AIRPAX_FILTER_STATE);
    //getTaskCount(DEFAULT_APPLIED_AIRPAX_FILTER_STATE);
  };

  const taskItems =
    tasks &&
    tasks.map((task) => <AirPaxTaskListItem task={task} key={task.id} />);
  return (
    <>
      <TaskHeading text="Air Passenger Tasks" />
      <div className="govuk-grid-row">
        <section className="govuk-grid-column-one-quarter">
          <div className="cop-filters-container">
            <div className="cop-filters-header">
              <h2 className="govuk-heading-s">Filters</h2>
              <button
                className="govuk-link govuk-heading-s "
                data-module="govuk-button"
                type="button"
                onClick={(e) => handleFilterReset(e)}
              >
                Clear all filters
              </button>
            </div>
            <div>
              <FormRenderer
                {...airpax}
                hooks={{
                  onGetComponent,
                  onSubmit: onApplyFilter,
                }}
                data={appliedFilters}
              />
            </div>
          </div>
        </section>
        <section className="govuk-grid-column-three-quarters">
          <div id="tasks" className="govuk-tabs">
            <div>
              <ul className="govuk-tabs__list">
                <li className="govuk-tabs__list-item govuk-tabs__list-item--selected">
                  <a className="govuk-tabs__tab" href="#new">
                    New (123)
                  </a>
                </li>
                <li className="govuk-tabs__list-item">
                  <a className="govuk-tabs__tab" href="#inProgress">
                    In progress (55)
                  </a>
                </li>
                <li className="govuk-tabs__list-item">
                  <a className="govuk-tabs__tab" href="#issued">
                    Issued (18)
                  </a>
                </li>
                <li className="govuk-tabs__list-item">
                  <a className="govuk-tabs__tab" href="#complete">
                    Complete (13)
                  </a>
                </li>
              </ul>
            </div>
            <div id="new" className="govuk-tabs__panel">
              <Pagination />
              <div>{taskItems}</div>
              <Pagination />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AirPaxTaskList;
