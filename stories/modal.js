import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Modal, setAppElement } from 'components/modal';
import readme from 'components/modal/README.md';
import { svgs } from '../src';
import {
  authBackground,
  lightBackground,
  darkBackground,
} from './constants';

const { SvgLogoMark } = svgs.icons;

function ModalContent({ color }) {
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
            color: ${color};
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

const ModalDemo = () => {
  const show = boolean('show', false);
  const [showValue, setShowValue] = useState(show);
  setAppElement(document.querySelector('div.page'));

  useEffect(() => {
    setShowValue(show);
  }, [show]);

  function onClose() {
    setShowValue(false);
  }

  return (
    <div className="page">
      <Modal
        customStyles={{
          bottom: '10%',
          top: '10%',
          width: '50%',
        }}
        Icon={SvgLogoMark}
        onClose={onClose}
        show={showValue}
        subTitle="Long, but important"
        title="Terms of Service"
        useAltTheme
      >
        <ModalContent />
      </Modal>
      <style jsx>
        {`
          :global(.sb-show-main) {
            margin: 0 !important;
          }

          .page {
            height: 100vh;
            width: 100vw;
          }
        `}
      </style>
    </div>
  );
};

storiesOf('Modal', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Modal', () => (
    <ModalDemo />
  ), {
    backgrounds: [{ ...authBackground, default: true }, lightBackground, darkBackground],
  });
