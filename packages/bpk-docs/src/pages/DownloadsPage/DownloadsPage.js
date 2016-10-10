import React from 'react'
import Helmet from 'react-helmet'

import BpkLink from 'bpk-component-link'
import BpkHeading from 'bpk-component-heading'
import BpkParagraph from 'bpk-component-paragraph'
import { BpkList, BpkListItem } from 'bpk-component-list'
import BpkContentContainer from 'bpk-component-content-container'
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid'

const smallIconsZip = require('!!file?name=[name].[hash].zip!zip-it!./../../../../bpk-svgs/src/icons/sm/icons-sm')
const largeIconsZip = require('!!file?name=[name].[hash].zip!zip-it!./../../../../bpk-svgs/src/icons/lg/icons-lg')

const DownloadsPage = () => (
  <BpkGridContainer>
    <Helmet title='Downloads' />
    <BpkGridRow>
      <BpkGridColumn width={12}>
        <BpkContentContainer>
          <BpkHeading level='h1'>Downloads</BpkHeading>
          <BpkParagraph>Here you can find a variety of resources to help you design Skyscanner products:</BpkParagraph>
          <BpkHeading level='h2'>Color palettes</BpkHeading>
          <BpkHeading level='h3'>Core</BpkHeading>
          <BpkList>
            <BpkListItem>
              <BpkLink href='https://www.dropbox.com/s/oea9wmk3l757c81/product_rgb.ase?dl=0' blank>
                Adobe Swatch Exchange
              </BpkLink>
            </BpkListItem>
            <BpkListItem>
              <BpkLink href='https://www.dropbox.com/s/gerab8vjv92141g/product_rgb.clr?dl=0' blank>
                Mac
              </BpkLink>
            </BpkListItem>
          </BpkList>
          <BpkHeading level='h3'>Extended (for illustration only)</BpkHeading>
          <BpkList>
            <BpkListItem><em>Coming soon</em></BpkListItem>
          </BpkList>
          <BpkHeading level='h2'>Icons</BpkHeading>
          <BpkList>
            <BpkListItem>
              <BpkLink href={`/${smallIconsZip}`}>Small icons</BpkLink>
            </BpkListItem>
            <BpkListItem>
              <BpkLink href={`/${largeIconsZip}`}>Large icons</BpkLink>
            </BpkListItem>
          </BpkList>
          <BpkHeading level='h2'>Logos</BpkHeading>
          <BpkList>
            <BpkListItem>
              <BpkLink href='https://www.dropbox.com/sh/spolkpatjaua6xi/AADon-XjEae9pRmLazfo3-R7a?dl=0' blank>
                App icons
              </BpkLink>
            </BpkListItem>
            <BpkListItem>
              <BpkLink href='https://www.dropbox.com/sh/yvj8s9m030t0fur/AABDX6BTDsuxSdyqe2_twW-Ra?dl=0' blank>
                Logos
              </BpkLink>
            </BpkListItem>
          </BpkList>
          <BpkHeading level='h2'>Sketch</BpkHeading>
          <BpkList>
            <BpkListItem>
              <BpkLink href='https://www.dropbox.com/s/3acziruyha8zqdc/Responsive-grids.sketch?dl=0' blank>
                Responsive grids
              </BpkLink>
            </BpkListItem>
            <BpkListItem>
              <BpkLink href='https://www.dropbox.com/s/hxyv9jckjmln29i/Icon%20template.sketch?dl=0' blank>
                Icon grids
              </BpkLink>
            </BpkListItem>
            <BpkListItem>
              <BpkLink href='https://www.dropbox.com/sh/aodde0j6gmgllgw/AABrmRTv6j1-VqUKuSdWDxqla?dl=0' blank>
                Craft Library
              </BpkLink>
            </BpkListItem>
          </BpkList>
        </BpkContentContainer>
      </BpkGridColumn>
    </BpkGridRow>
  </BpkGridContainer>
)

export default DownloadsPage
