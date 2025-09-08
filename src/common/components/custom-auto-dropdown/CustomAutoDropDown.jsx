import React from 'react';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import  ValidationError  from '../validation-error/ValidationError';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import './CustomAutoDropDown.scss';


/**
 *
 * @param {object} props Component props
 * @param {string} props.name Name for the form feild
 * @param {function} props.handleChange Value change callback function
 * @param {boolean} props.isArray Indicates whether used in useFieldArray
 * @param {string} props.control Control object of react hook forms
 * @param {string} props.label Label of the input
 * @param {string} props.list List of options to be rendered
 * @param {string} props.keyId Key name on which search should be done
 * @param {string} props.variant Type of the Auto Drop Down variant(Ex: outline, standard)
 * @param {string} props.returnValue Which key value should be returned
 * @param {boolean} props.noObject If true tells list is plain Array of strings
 * @param {JSX} props.renderOption JSX to be rendered in list
 */

const CustomAutoDropDown = ({
  errors,
  id,
  name,
  isArray,
  control,
  label,
  list,
  subLabel,
  handleChange,
  keyId,
  returnValue,
  noObject,
  renderOption,
  variant,
  ...rest
}) => {
  const { t } = useTranslation();
  const inputRef = React.useRef();
  const keyValue = keyId ? keyId : 'name';
  const returnKey = returnValue ? returnValue : 'id';
  const [section, key] = !isArray ? name.split('.') : ['', ''];

  //Check errors when used insode useFieldArray
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

  const getOpObj = (option) => {
    if (option && !option[returnKey])
      option = list.find((op) => op[returnKey] === option);
    return option;
  };

  const handleOnChange = (obj) => {
    if (noObject) return obj;
    let option = getOpObj(obj);
    if (handleChange) handleChange(obj);
    return option ? option[returnKey] : '';
  };

  return (
    <>
      <div className="form-group custom-input-container">
        <Controller
          variant={variant ? variant : 'outlined'}
          id={id}
          name={name}
          control={control}
          margin="normal"
          fullWidth
          onFocus={() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
          render={
            ({ onChange, ...props }) => (<Autocomplete
              className="custom-auto-field"
              options={list}
              renderOption={(option) =>
                renderOption ? (
                  renderOption(option)
                ) : !noObject ? (
                  <>{option[keyValue]}</>
                ) : (
                      <>{option}</>
                    )
              }
              getOptionLabel={(option) =>
                !noObject
                  ? getOpObj(option)
                    ? getOpObj(option)[keyValue]
                    : ''
                  : option
              }
              getOptionSelected={(option, value) => {
                return !noObject ? option.id === getOpObj(value)?.id : option;
              }}
              renderInput={params => (
                <TextField
                  inputRef={inputRef}
                  error={!isArray
                    ? !key
                      ? name in errors
                      : section in errors && key in errors[section]
                    : fetchError()}
                  {...params}
                  label={t(label || '') + (subLabel || '')}
                  variant="outlined"
                  {...rest}
                />
              )}
              onChange={(e, data) => {
                let value = handleOnChange(data);
                onChange(value);
              }}
              {...props}
              {...rest}
            />
            )
          }
          control={control}
          errors={errors}
          {...rest}
        />
        {!isArray &&
          (!key
            ? name in errors
            : section in errors && key in errors[section]) ? (
            <ErrorMessage errors={errors} name={name} as={ValidationError} />
          ) : null}
      </div>
    </>
  );
};
export default CustomAutoDropDown;
