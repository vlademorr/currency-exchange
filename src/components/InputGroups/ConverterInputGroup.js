import React from "react";
import {InputGroup, DropdownButton, FormControl, Dropdown} from "react-bootstrap";

const ConverterInputGroup = ({
  currencyArr, 
  defaultCurrency
}) => {
  return(
    <InputGroup className="mb-3">
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title={defaultCurrency}
        id="input-group-dropdown-1"
      >
        {
          (currencyArr).map((currency) => {
            return(
              <Dropdown.Item key={currency.cc}>{currency.cc}</Dropdown.Item>
            )
          })
        }
      </DropdownButton>
      <FormControl aria-describedby="basic-addon1" />
    </InputGroup>
  )
}

export default ConverterInputGroup;