import React from "react";
import {connect} from "react-redux";
import {ConverterInputGroup} from "./";
import {Tabs} from "./";
import {ConverterContainer, TabsContainer} from "../styled/CurrencyConverter/style";

const CurrencyConverter = ({exchangeRates}) => (
  <>
    <TabsContainer>
        <Tabs/>
      </TabsContainer>
    <ConverterContainer>
      <ConverterInputGroup
        exchangeRates={exchangeRates}
      />
    </ConverterContainer>
  </>
);

const mapStateToProps = ({
  exchangeRates
}) => {
  return {
    exchangeRates
  };
};

export default connect(mapStateToProps)(CurrencyConverter);