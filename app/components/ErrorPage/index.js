/**
 *
 * ErrorPage
 *
 */

import React from "react";
import { BackDrop } from "../UserInputs/styles";
import { ErrorMessage } from "./styles";

function ErrorPage() {
  return (
    <BackDrop>
      <ErrorMessage>Something went wrong!</ErrorMessage>
    </BackDrop>
  );
}

ErrorPage.propTypes = {};

export default ErrorPage;
