/**
 * DateRangeWrapper: Redux Form Basic Usage
 */

import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';

import DateRangeWrapper from '../../DateRangeWrapper';
import Datepicker from '../../Datepicker';
import Harness from '../../../tests/Harness';

const BasicUsage = ({ initialvalues }) => {
  // With redux-form, best value comes in the 2nd param...
  const getter = (e, value) => {
    return value;
  };

  return (
    <DateRangeWrapper
      initialStartDate={initialvalues.rangeStartDate}
      initialEndDate={initialvalues.rangeEndDate}
      startValueGetter={getter}
      endValueGetter={getter}
    >
      {({
        getStartInputProps,
        getEndInputProps,
        endDateExclude,
        startDateExclude,
      }) => (
        <Fragment>
          <Field
            component={Datepicker}
            name="rangeStartDate"
            label="Start date"
            exclude={startDateExclude}
            {...getStartInputProps()}
          />
          <Field
            component={Datepicker}
            name="rangeEndDate"
            label="End date"
            exclude={endDateExclude}
            {...getEndInputProps()}
          />
        </Fragment>
        )
      }
    </DateRangeWrapper>
  );
};

/**
 * For this example we manually wire up redux-form wrapped in a Harness-component
 * In a real life FOLIO application you would most likely
 * use the form wrapper from @folio/stripes-form
 */
const BasicUsageWithReduxForm = reduxForm({
  form: 'date-range-wrapper-form',
  initialvalues: {
    rangeStartDate: null,
    rangeEndDate: null,
  }
})(BasicUsage);

export default () => (
  <Harness>
    <BasicUsageWithReduxForm />
  </Harness>
);
