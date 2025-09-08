import React from "react";
import "./ValidationError.scss";
import { useTranslation } from 'react-i18next';

const ValidationError = ({ children }) => {
  const { t } = useTranslation()
  return <span className="validation-error">{t(children)}</span>;
};

export default ValidationError;
