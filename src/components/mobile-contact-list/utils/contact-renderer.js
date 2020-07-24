/**
 * @fileoverview Contact renderer for MobileContactList
 * @author Gabriel Womble
 */
import React from 'react';
import {
  cellFormatters,
  svgs,
  useTheme,
} from 'src';
import { cloud, coolGreyDark } from 'src/styles/colors.scss';

const { SvgContact } = svgs.icons;
const { TitleWithSubtitle } = cellFormatters;

const iconTheme = {
  dark: coolGreyDark,
  light: cloud,
};

const iconHeight = 50;
const iconWidth = 42;

function ContactRenderer(titleKey, subtitleKey) {
  const ContactInfo = TitleWithSubtitle(titleKey, subtitleKey);

  return (props) => {
    const themeName = useTheme('name');

    return (
      <div className="contact-renderer">
        <div>
          <SvgContact
            fill={iconTheme[themeName]}
            height={iconHeight}
            width={iconWidth}
          />
        </div>
        <ContactInfo {...props} />
        <style jsx>
          {`
            @import 'styles/layout';

            .contact-renderer {
              align-items: center;
              display: flex;
              width: 100%;

              div {
                height: ${iconHeight}px;
                margin-right: $spacing-s;
              }
            }
          `}
        </style>
      </div>
    );
  };
}

export { ContactRenderer };
