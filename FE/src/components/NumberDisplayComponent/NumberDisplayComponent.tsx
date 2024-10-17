import "./NumberDisplayComponent.scss";

import React from "react";
import { NumericFormat } from "react-number-format";

import { NumberDisplayProps } from "../../types";

export const NumberDisplayComponent: React.FC<NumberDisplayProps> = ({
  amount,
  prefix,
  displayType = "text",
  decimalScale,
  fixedDecimalScale = true,
  thousandSeparator = true,
  style = "amount",
}) => {
  return (
    <NumericFormat
      value={amount}
      prefix={prefix}
      displayType={displayType}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimalScale}
      thousandSeparator={thousandSeparator}
      className={style}
    />
  );
};
