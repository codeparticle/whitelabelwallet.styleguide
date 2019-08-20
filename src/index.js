import keyboardOnlyOutlines from 'keyboard-only-outlines';
import * as utils from 'utils';

keyboardOnlyOutlines();

// Utils
export { utils };

// Constants
export { ButtonVariants } from './components/button/constants';

// Components
export { Address } from './components/address';
export { AuthCheckbox } from './components/auth-checkbox';
export { AreaChart } from './components/area-chart';
export { Button } from './components/button';
export {
  Chart,
  useComponentSize,
} from './components/chart';
export { DeterministicPassPhrase } from './components/deterministic-pass-phrase';
export { FlashAlert } from './components/flash-alert';
export { Header } from './components/header';
export { Contact } from './components/contact';
export { cellFormatters, List } from './components/list';
export { QRCode } from './components/qr-code';
export { Icon } from './components/icon';
export { Logo } from './components/logo';
export { MediaContext, MediaProvider } from './components/media-provider';
export { Modal, setAppElement } from './components/modal';
export { NavBar } from './components/nav-bar';
export { OverflowContainer } from './components/overflow-container';
export { Overlay } from './components/overlay';
export { Search } from './components/search';
export { Select } from './components/select';
export { TextArea } from './components/text-area';
export { TextInput } from './components/text-input';
export { ToggleSwitch } from './components/toggle-switch';
export { TransferAmount } from './components/transfer-amount';
export { Wallet } from './components/wallet';
export {
  ThemeContext,
  useTheme,
  withTheme,
} from './components/theme-provider';
export { Tooltip } from './components/tooltip';

export { useMedia } from './hooks/use-media';

export * as svgs from './svgs';
