import { html } from 'lit';
//import { styleMap } from 'lit/directives/style-map.js';
export type ElementSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
export const ElementSizes: Record<string, ElementSize> = {
    xxs: 'xxs',
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
    xxl: 'xxl',
};

export type ButtonStatics = 'white' | 'black';
export type ButtonVariants =
    | 'accent'
    | 'primary'
    | 'secondary'
    | 'negative'
    | ButtonStatics
export const VALID_VARIANTS = [
    'accent',
    'primary',
    'secondary',
    'negative',
    'white',
    'black',
];

/**
 * Primary UI component for user interaction
 */
export const Button = () => {

  return html`
    <button
      type="button"
    >
      hello world
    </button>
  `;
};
