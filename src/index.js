import keyboardOnlyOutlines from 'keyboard-only-outlines';
import * as utils from 'utils';
import * as svgs from './svgs';

keyboardOnlyOutlines();

export { svgs, utils };

// Constants
export { ButtonVariants } from './components/button/constants';

// Components
export { Address } from './components/address';
export { LabeledCheckbox } from './components/labeled-checkbox';
export { AreaChart } from './components/area-chart';
export { Button } from './components/button';
export { cellFormatters } from './components/cell-formatters';
export {
  Chart,
  useComponentSize,
} from './components/chart';
export { CircularAddButton } from './components/circular-add-button';
export { DeterministicPassPhrase } from './components/deterministic-pass-phrase';
export { FlashAlert } from './components/flash-alert';
export { Header } from './components/header';
export { Contact } from './components/contact';
export { Carousel } from './components/carousel';
export { List } from './components/list';
export { QRCode } from './components/qr-code';
export { HeaderButton } from './components/header-button';
export { IconButton, IconVariants } from './components/icon-button';
export { Logo } from './components/logo';
export { MediaContext, MediaProvider } from './components/media-provider';
export { MobileContactList } from './components/mobile-contact-list';
export { MobilePage } from './components/mobile-page';
export { MobileWalletList } from './components/mobile-wallet-list';
export { Modal, setAppElement } from './components/modal';
export { NavBar } from './components/nav-bar';
export { OverflowContainer } from './components/overflow-container';
export { Overlay } from './components/overlay';
export { PageFooter } from './components/page-footer';
export { PageHeader } from './components/page-header';
export { ReceiptContainer } from './components/receipt-container';
export { Search } from './components/search';
export { Select } from './components/select';
export { TextArea } from './components/text-area';
export { TextInput } from './components/text-input';
export { ToggleSwitch } from './components/toggle-switch';
export { CurrencyAmount, TransferAmount } from './components/transfer-amount';
export { Wallet } from './components/wallet';
export {
  ThemeContext,
  ThemeProvider,
  THEME_KEYS,
  themes,
  useTheme,
  withTheme,
} from './components/theme-provider';
export { Tooltip } from './components/tooltip';

export { useMedia } from './hooks/use-media';
