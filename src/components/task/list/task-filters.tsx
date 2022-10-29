import * as React from 'react';
import { FC, useState } from 'react';
import FormRenderer, { Utils } from '@ukhomeoffice/cop-react-form-renderer';
import { MultiSelectAutocomplete } from '@ukhomeoffice/cop-react-components';
import { FilterRule } from '../../../adapters/task/task';
import { FormFilters } from './form-filters';

class Props {
  form: object;
  defaultFilters: FormFilters;
  ruleOptions: FilterRule[];
  onApplyFilters: (filters: FormFilters) => void;
  onResetFilters: (filters: FormFilters) => void;
}

export const TaskFilterComponent: FC<Props> = ({
  form,
  defaultFilters,
  ruleOptions,
  onApplyFilters,
  onResetFilters,
}) => {
  const [filters, setFilters] = useState(defaultFilters);

  const handleApplyFilters = async (_: any, payload: any, onSuccess: any) => {
    onSuccess(payload);

    const selectedFilters = toFormFilters(payload);
    setFilters(selectedFilters);
    onApplyFilters(selectedFilters);
  };

  const toFormFilters = (payload: any): FormFilters => {
    return {
      movementModes: payload.movementModes,
      selectors: payload.selectors,
      rules: payload.rules.map(function (selectedRule: any) {
        return { id: selectedRule.id, name: selectedRule.name };
      }),
      searchText: payload.searchText,
      movementDirections: payload.movementDirections,
    };
  };

  const handleResetFilters = (e: any) => {
    e.preventDefault();
    setFilters(defaultFilters);
    onResetFilters(defaultFilters);
  };

  const onGetComponent = (component: any, wrap: any) => {
    const attrs = Utils.Component.clean(component, [
      'fieldId',
      'dynamicoptions',
      'multi',
    ]);
    if (component.type === 'select') {
      return getSelectComponent(component, wrap, attrs);
    }
    if (component.type === 'multiautocomplete') {
      return getMultiAutoComponent(component, wrap, attrs);
    }
    return null;
  };

  const getSelectComponent = (component: any, wrap: any, attrs: any) => {
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
  };

  const getMultiAutoComponent = (component: any, wrap: any, attrs: any) => {
    const multiSelect = (
      <MultiSelectAutocomplete
        className="hods-multi-select-autocomplete"
        {...component}
        item={{ value: 'id', label: 'name' }}
        options={ruleOptions}
      />
    );
    if (wrap) {
      return Utils.Component.wrap(attrs, multiSelect);
    }
    return multiSelect;
  };

  return (
    <div className="cop-filters-container">
      <div className="cop-filters-header">
        <h2 className="govuk-heading-s">Filters</h2>
        <button
          className="govuk-link govuk-heading-s "
          data-module="govuk-button"
          type="button"
          onClick={(e) => handleResetFilters(e)}
        >
          Clear all
        </button>
      </div>
      <div>
        <FormRenderer
          {...form}
          hooks={{
            onGetComponent,
            onSubmit: handleApplyFilters,
          }}
          data={filters}
        />
      </div>
    </div>
  );
};
