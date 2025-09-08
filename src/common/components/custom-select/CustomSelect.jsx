import React, { useRef, useEffect, useState } from 'react';
import { InputLabel, MenuItem, Select, FormControl } from '@material-ui/core';
import ValidationError from '../validation-error/ValidationError';
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from '@hookform/error-message';
import { Controller } from 'react-hook-form';
import './CustomSelect.scss';

/**
 * @param {object} props Component props
 * @param {string} props.name Name for the form feild
 * @param {function} props.handleChange Value change callback function
 * @param {string} props.control Control object of react hook forms
 * @param {string} props.label Label of the input
 * @param {string} props.list List of options to be rendered
 * @param {string} [props.searchKey=name] Key name on which search should be done
 * @param {string} [props.returnValue=id] Which key value should be returned
 * @param {boolean} props.isStringOptions If true tells list is plain Array of strings
 */

const CustomSelect = ({
  errors,
  id,
  name,
  control,
  label,
  list,
  handleChange,
  searchKey,
  returnValue,
  isStringOptions,
  labelId,
  ...rest
}) => {
  const { t } = useTranslation();
  const inputRef = useRef();
  const keyValue = searchKey || 'name';
  const returnKey = returnValue || 'id';

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div className="form-group TypeSelect__section">
      <FormControl variant="outlined">
        <InputLabel ref={inputLabel}>{t(label)}</InputLabel>
        <Controller
          id={id}
          name={name}
          control={control}
          error={name in errors}
          onFocus={() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
          as={
            <Select
              ref={inputRef}
              labelId={labelId}
              labelWidth={labelWidth}
              MenuProps={{
                getContentAnchorEl: null,
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
              }}
            >
              {list.map((item, index) => (
                <MenuItem
                  key={index}
                  value={isStringOptions ? item : item[returnKey]}
                >
                  {isStringOptions ? item : item[keyValue]}
                </MenuItem>
              ))}
            </Select>
          }
          {...rest}
        />
      </FormControl>
      {/* {name in errors ? (
        <ErrorMessage errors={errors} name={name} as={ValidationError} />
      ) : null} */}
      <ErrorMessage errors={errors} name={name} as={ValidationError} />
    </div>
  );
};
export default CustomSelect;
