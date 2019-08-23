import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { Overlay, svgs } from '../src';
import readme from '../src/components/overlay/README.md';
import { lightBackground, darkBackground } from './constants';
import { ThemeWrapper } from './utils';

const { SvgLogoMark } = svgs.icons;

function OverlayContent() {
  return (
    <div className="content-container">
      <p>
        { /* eslint-disable-next-line max-len */ }
        {'Lorem ipsum dolor amet subway tile everyday carry chambray freegan put a bird on it man braid edison bulb vegan sriracha bicycle rights affogato vape. Tote bag palo santo echo park fixie kale chips, offal DIY ugh. Yr gentrify thundercats ugh migas edison bulb seitan vape food truck XOXO. Prism before they sold out pitchfork, squid forage XOXO kitsch irony 90\'s. Tacos deep v humblebrag hexagon adaptogen intelligentsia, venmo PBR&B locavore knausgaard craft beer occupy sriracha microdosing prism. Readymade brooklyn godard vexillologist austin raclette polaroid narwhal retro selvage gochujang VHS cloud bread tumeric. Tote bag cred tacos meh.'}
      </p>
      <hr />
      <p>
        { /* eslint-disable-next-line max-len */ }
        {'IPhone waistcoat poke kale chips fam, single-origin coffee la croix. Semiotics schlitz man braid keffiyeh taxidermy franzen. Normcore migas bespoke waistcoat kinfolk +1 heirloom distillery chambray blue bottle umami. Pop-up vape ramps PBR&B prism brunch mumblecore mlkshk meh hella pabst locavore actually. Poke man braid semiotics, edison bulb brooklyn narwhal cred flexitarian hexagon kombucha tote bag everyday carry post-ironic gluten-free vegan. Sriracha hashtag 90\'s, jianbing selfies hexagon occupy gastropub la croix hoodie humblebrag forage tattooed mixtape adaptogen.'}
      </p>
      <style jsx>
        {`
          .content-container {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 25px;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

const OverlayDemo = ({
  defaultToDark,
}) => {
  const isOpen = boolean('isOpen', true);
  const [isOpenValue, setIsOpenValue] = useState(isOpen);
  const type = select('type', { sidepanel: 'sidepanel', overlay: 'overlay' }, 'sidepanel');
  const color = defaultToDark ? 'white' : 'black';

  useEffect(() => {
    setIsOpenValue(isOpen);
  }, [isOpen]);

  function onClose() {
    action('closed');

    setIsOpenValue(false);
  }

  return (
    <ThemeWrapper
      defaultToDark={defaultToDark}
      content={
        <div className="page">
          <Overlay
            onClose={onClose}
            onClick={action('clicked')}
            isOpen={isOpenValue}
            hasCancelButton={false}
            type={type}
            title="Wallet disclaimer"
            subTitle="Very important stuff!"
            Icon={SvgLogoMark}
          >
            <OverlayContent />
          </Overlay>
          <style jsx>
            {`
              :global(.sb-show-main) {
                margin: 0 !important;
              }

              .page {
                border: 15px solid ${color};
                height: 100vh;
                width: 100vw;
              }

              p {
                color: ${color};
              }
            `}
          </style>
        </div>
      }
    />
  );
};

storiesOf('Overlay', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light', () => (
    <OverlayDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }, darkBackground],
  })
  .add('Dark', () => (
    <OverlayDemo
      defaultToDark
    />
  ), {
    backgrounds: [{ ...darkBackground, default: true }, lightBackground],
  });
