import * as React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { Controller, useForm } from 'react-hook-form';
import  ValidationError  from '../validation-error/ValidationError';
import './CustomInput.scss';

import TextField from '@material-ui/core/TextField';

/**
 *
 * @param {object} props Component props
 * @param {string} props.name Name for the form feild
 * @param {boolean} props.isArray Indicates whether used in useFieldArray
 * @param {string} props.control Control object of react hook forms
 * @param {string} props.label Label of the input
 */

const CustomInput = ({ errors = {}, id, name, isArray, onInput, control, ...rest }) => {
  const inputRef = React.useRef();
  const [section, key] = !isArray ? name.split('.') : ['', ''];

  //Check errors when used inside useFieldArray
  const fetchError = () => {
    var reg = /([A-Za-z].*)[\[]+(\d)+[\]].(.*)/;
    var match = reg.exec(name);
    let res = errors[match[1]]
      ? errors[match[1]][Number(match[2])]
        ? errors[match[1]][Number(match[2])][match[3]]
          ? true
          : false
        : false
      : false;
    return res;
  };

  //Return Error Message when used inside useFieldArray
  const fetchMsg = () => {
    var reg = /([A-Za-z].*)[\[]+(\d)+[\]].(.*)/;
    var match = reg.exec(name);
    let errMsgs = errors[match[1]][Number(match[2])];
    return errMsgs;
  };
  const fetchName = () => {
    var reg = /([A-Za-z].*)[\[]+(\d)+[\]].(.*)/;
    var match = reg.exec(name);
    return match[3];
  };
  return (
    <>
      <div className="form-group custom-input-container">
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              inputRef={inputRef}
              variant="outlined"
              id={id}
              error={!!error}
              helperText={error?.message}
              margin="normal"
              fullWidth
              onInput={onInput}
              {...rest}
            />
          )}
        />
        {!isArray &&
          (!key
            ? name in errors
            : section in errors && key in errors[section]) ? (
            <ErrorMessage errors={errors} name={name} as={ValidationError} />
          ) : null}
        {isArray && fetchError() ? (
          <ErrorMessage
            errors={fetchMsg()}
            name={fetchName()}
            as={ValidationError}
          />
        ) : null}
      </div>
    </>
  );
};

export default CustomInput;
