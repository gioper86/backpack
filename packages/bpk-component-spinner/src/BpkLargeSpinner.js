/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { cssModules } from 'bpk-react-utils';
import LgSpinner from 'bpk-svgs/dist/js/spinners/lg';

import STYLES from './bpk-spinner.scss';

const getClassName = cssModules(STYLES);

const BpkLargeSpinner = (props) => {
  const classNames = ['bpk-spinner', 'bpk-spinner--large'].map(getClassName);
  const { className, alignToButton, ...rest } = props;

  if (alignToButton) { classNames.push(getClassName('bpk-spinner--align-to-large-button')); }
  if (className) { classNames.push(className); }

  return <LgSpinner className={classNames.join(' ')} {...rest} />;
};

BpkLargeSpinner.propTypes = {
  className: PropTypes.string,
  alignToButton: PropTypes.bool,
};

BpkLargeSpinner.defaultProps = {
  className: null,
  alignToButton: false,
};

export default BpkLargeSpinner;
