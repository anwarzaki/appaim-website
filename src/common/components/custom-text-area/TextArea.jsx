import React from 'react';
import './TextArea.scss';
import { useTranslation } from 'react-i18next';
import { TextareaAutosize } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const CustomTextArea = ({
  name,
  label,
  className,
  rows,
  maxLength,
  placeHolder,
  ariaLabel,
  control,
  errors,
  ...rest
}) => {
  const { t } = useTranslation();
  return (
    <div className="CustomTextArea__main-container dynamic-text-area">
      <Controller
        name={name}
        as={
          <TextareaAutosize
            label={t(`${label}`)}
            aria-label={ariaLabel}
            rows={rows}
            placeholder={t(`${placeHolder}`)}
            maxLength={maxLength}
          />
        }
        control={control}
        errors={errors}
        className={className}
        {...rest}
      />
    </div>
  );
};

export default CustomTextArea;
