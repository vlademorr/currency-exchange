import React from "react";
import {ConverterInputGroup} from "../InputGroups"
import {Tabs} from "../Tabs";
import {ConverterContainer, TabsContainer} from "./style";

const CurrencyConverter = () => {
  const testArr = [
    { 
    "r030":36,"txt":"Австралійський долар","rate":22.0522,"cc":"AUD","exchangedate":"11.01.2021"
     }
    ,{ 
    "r030":124,"txt":"Канадський долар","rate":22.3109,"cc":"CAD","exchangedate":"11.01.2021"
     }
    ,{ 
    "r030":156,"txt":"Юань Женьміньбі","rate":4.3822,"cc":"CNY","exchangedate":"11.01.2021"
     }
    ,{ 
    "r030":191,"txt":"Куна","rate":4.6181,"cc":"HRK","exchangedate":"11.01.2021"
     }
    ,{ 
    "r030":203,"txt":"Чеська крона","rate":1.3348,"cc":"CZK","exchangedate":"11.01.2021"
     }
    ,{ 
    "r030":208,"txt":"Данська крона","rate":4.6927,"cc":"DKK","exchangedate":"11.01.2021"
     }
    ,{ 
    "r030":344,"txt":"Гонконгівський долар","rate":3.6481,"cc":"HKD","exchangedate":"11.01.2021"
     }
    ,{ 
    "r030":348,"txt":"Форинт","rate":0.097453,"cc":"HUF","exchangedate":"11.01.2021"
     }
    ,{ 
    "r030":356,"txt":"Індійська рупія","rate":0.38687,"cc":"INR","exchangedate":"11.01.2021"
     }
    ,{ 
    "r030":360,"txt":"Рупія","rate":0.0020349,"cc":"IDR","exchangedate":"11.01.2021"
     }
    ,{ 
    "r030":376,"txt":"Новий ізраїльський шекель","rate":8.8862,"cc":"ILS","exchangedate":"11.01.2021"
     }
    ,{ 
    "r030":392,"txt":"Єна","rate":0.27484,"cc":"JPY","exchangedate":"11.01.2021"
     }
    ]
  return(
    <>
      <TabsContainer>
          <Tabs/>
        </TabsContainer>
      <ConverterContainer>
        <p>Changing:</p>
        <ConverterInputGroup
          currencyArr={testArr}
          defaultCurrency={testArr[0].cc}
        />
        <p>Getting:</p>
        <ConverterInputGroup
          currencyArr={testArr}
          defaultCurrency={testArr[1].cc}
        />
      </ConverterContainer>
    </>
  )
}

export default CurrencyConverter;