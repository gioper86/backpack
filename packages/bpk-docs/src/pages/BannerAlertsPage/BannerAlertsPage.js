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
import React, { Component } from 'react';
import BpkButton from 'bpk-component-button';
import BpkBannerAlert, { ALERT_TYPES } from 'bpk-component-banner-alert';
import { spacingLg } from 'bpk-tokens/tokens/base.es6';

import bannerAlertReadme from 'bpk-component-banner-alert/readme.md';

import DocsPageBuilder from './../../components/DocsPageBuilder';
import Paragraph from './../../components/Paragraph';

const longMessage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sagittis purus, id
blandit ipsum. Pellentesque nec diam nec erat condimentum dapibus. Nunc diam augue, egestas id egestas ut, facilisis
nec mi. Donec et congue odio, nec laoreet est. Integer rhoncus varius arcu, a fringilla libero laoreet at. Mauris
porta varius ullamcorper. Sed laoreet libero mauris, non pretium lectus accumsan et. Suspendisse vehicula ullamcorper
sapien, et dapibus mi aliquet non. Pellentesque auctor sagittis lectus vitae rhoncus. Fusce id enim porttitor, mattis
ante in, vestibulum nulla.`;
const richMessage = <span style={{ fontWeight: 700 }}>Successful alert with custom rendered message</span>;

const topBannerAlertStyle = {};
const bannerAlertStyle = { marginTop: spacingLg };

class BpkBannerAlertFadeDemo extends Component {
  constructor() {
    super();

    this.addBannerAlert = this.addBannerAlert.bind(this);

    this.state = {
      bannerAlertCount: 0,
    };
  }

  addBannerAlert() {
    this.setState({
      bannerAlertCount: this.state.bannerAlertCount + 1,
    });
  }

  render() {
    return (
      <div>
        <BpkButton onClick={this.addBannerAlert} >
            Add banner alert!
        </BpkButton>
        <div>
          {[...Array(this.state.bannerAlertCount)].map((e, i) => (
            <BpkBannerAlert
              key={i.toString()}
              style={this.props.style}
              message={this.props.message}
              type={this.props.type}
              fadeIn
              dismissable
              dismissButtonLabel="Dismiss"
            />
        ))}
        </div>
      </div>
    );
  }
}

BpkBannerAlertFadeDemo.propTypes = {
  style: PropTypes.style,
  message: PropTypes.string,
  type: PropTypes.string,
};

BpkBannerAlertFadeDemo.defaultProps = {
  style: null,
  message: null,
  type: null,
};

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>
        Banner alerts come in four styles to indicate success, warning or error, or some neutral information.
      </Paragraph>,
    ],
    examples: [
      <BpkBannerAlert
        style={topBannerAlertStyle}
        message="Neutral alert."
        type={ALERT_TYPES.NEUTRAL}
      />,
      <BpkBannerAlert
        style={bannerAlertStyle}
        message="Successful alert."
        type={ALERT_TYPES.SUCCESS}
      />,
      <BpkBannerAlert
        style={bannerAlertStyle}
        message={richMessage}
        type={ALERT_TYPES.SUCCESS}
      />,
      <BpkBannerAlert
        style={bannerAlertStyle}
        message="Warn alert."
        type={ALERT_TYPES.WARN}
      />,
      <BpkBannerAlert
        style={bannerAlertStyle}
        message="Error alert."
        type={ALERT_TYPES.ERROR}
      />,
    ],
  },
  {
    id: 'expandable',
    title: 'Expandable',
    blurb: [
      <Paragraph>
        They can be configured to display further information to the
        user in the form of an expandable panel.
      </Paragraph>,
    ],
    examples: [
      <BpkBannerAlert
        style={topBannerAlertStyle}
        message="Neutral alert with more information."
        type={ALERT_TYPES.NEUTRAL}
        toggleButtonLabel="See more"
      >
        {longMessage}
      </BpkBannerAlert>,
      <BpkBannerAlert
        style={bannerAlertStyle}
        message="Successful alert with more information."
        type={ALERT_TYPES.SUCCESS}
        toggleButtonLabel="See more"
      >
        {longMessage}
      </BpkBannerAlert>,
      <BpkBannerAlert
        style={bannerAlertStyle}
        message="Warn alert with more information."
        type={ALERT_TYPES.WARN}
        toggleButtonLabel="See more"
      >
        {longMessage}
      </BpkBannerAlert>,
      <BpkBannerAlert
        style={bannerAlertStyle}
        message="Error alert with more information."
        type={ALERT_TYPES.ERROR}
        toggleButtonLabel="See more"
      >
        {longMessage}
      </BpkBannerAlert>,
    ],
  },
  {
    id: 'dismissable',
    title: 'Dismissable',
    blurb: [
      <Paragraph>
        Banner alerts can be configured to include a close icon so that the user can dismiss them.
      </Paragraph>,
    ],
    examples: [
      <BpkBannerAlert
        style={topBannerAlertStyle}
        message="Neutral alert with dismiss option."
        type={ALERT_TYPES.NEUTRAL}
        dismissable
        dismissButtonLabel="Dismiss"
      />,
      <BpkBannerAlert
        style={bannerAlertStyle}
        message="Successful alert with dismiss option."
        type={ALERT_TYPES.SUCCESS}
        dismissable
        dismissButtonLabel="Dismiss"
      />,
      <BpkBannerAlert
        style={bannerAlertStyle}
        message="Warn alert with dismiss option."
        type={ALERT_TYPES.WARN}
        dismissable
        dismissButtonLabel="Dismiss"
      />,
      <BpkBannerAlert
        style={bannerAlertStyle}
        message="Error alert with dismiss option."
        type={ALERT_TYPES.ERROR}
        dismissable
        dismissButtonLabel="Dismiss"
      />,
    ],
  },
  {
    id: 'fadeIn',
    title: 'Fade In',
    blurb: [
      <Paragraph>
        Banner alerts can be configured to animate in (fade) which is
        useful for when they need to be added to an existing screen.
      </Paragraph>,
    ],
    examples: [
      <BpkBannerAlertFadeDemo
        style={bannerAlertStyle}
        message="Successful alert which fades in."
        type={ALERT_TYPES.SUCCESS}
      />,
    ],
  },
];

const BannerAlertsPage = () => (<DocsPageBuilder
  title="Banner alerts"
  blurb={[
    <Paragraph>
      Banner alerts provide feedback to the user when an action has been performed.
    </Paragraph>,
  ]}
  components={components}
  sassdocId="notifications"
  readme={bannerAlertReadme}
/>);

export default BannerAlertsPage;
