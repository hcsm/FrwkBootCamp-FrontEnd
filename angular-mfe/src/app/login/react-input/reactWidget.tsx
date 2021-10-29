import * as React from "react";
import * as ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { InputEmail } from '../../../../../react-single/src/components/InputEmail';


const ReactWidget = (props:any) => {
  return (
    <>
      <InputEmail {...props}/>
    </>
  );
};

export const config = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ReactWidget,
});
