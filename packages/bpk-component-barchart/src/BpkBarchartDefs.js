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

import React from 'react';
import PropTypes from 'prop-types';

const GRADIENT_ATTRIBUTES = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 1,
};

const GRADIENT_ATTRIBUTES_NEGATIVE = {
  x1: 0,
  y1: 1,
  x2: 0,
  y2: 0,
};

const BkpChartLinearGradientMask = ({ gradientAttributes, id, height }) => (
  <defs>
    <linearGradient
      id={`${id}-gradient`}
      {...gradientAttributes}
    >
      <stop offset="0" stopColor="white" stopOpacity="0" />
      <stop offset="10%" stopColor="white" stopOpacity="1" />
    </linearGradient>
    <mask
      id={`${id}-mask`}
    >
      <rect x="0" y="0" width="100%" height={height} fill={`url(#${id}-gradient)`} />
    </mask>
  </defs>
);

BkpChartLinearGradientMask.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  gradientAttributes: PropTypes.shape({
    x1: PropTypes.number,
    y1: PropTypes.number,
    x2: PropTypes.number,
    y2: PropTypes.number,
  }).isRequired,
};


const BpkBarchartDefs = ({ southernHemisphereHeight, northernHemisphereHeight }) => (
  <defs>
    <BkpChartLinearGradientMask
      gradientAttributes={GRADIENT_ATTRIBUTES}
      height={`${northernHemisphereHeight}px`}
      id="bpk-barchart__def-north"
    />
    <BkpChartLinearGradientMask
      gradientAttributes={GRADIENT_ATTRIBUTES_NEGATIVE}
      height={`${southernHemisphereHeight}px`}
      id="bpk-barchart__def-south"
    />
  </defs>
);


BpkBarchartDefs.propTypes = {
  northernHemisphereHeight: PropTypes.number.isRequired,
  southernHemisphereHeight: PropTypes.number.isRequired,
};

export default BpkBarchartDefs;
