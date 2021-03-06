/**
 * @fileoverview Helper to determine rowStyles from props
 * @author Gabriel Womble
 */

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const SELECTED = 'selected';

export function getRowStyles({
  index,
  isSelected,
  isStriped,
  theme,
}) {
  let rowStyles = PRIMARY;

  if (isStriped) {
    rowStyles = (index % 2) ? SECONDARY : PRIMARY;
  }

  if (isSelected) {
    rowStyles = SELECTED;
  }

  return theme[rowStyles];
}
