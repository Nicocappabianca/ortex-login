import { createMedia } from '@artsy/fresnel';
import { CookieSerializeOptions } from 'cookie';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

const dev = process.env.NODE_ENV !== 'production';
/**
 *  Returns rem value for passed px number
 * @param value : px value
 */
export const pxToRem = (value: number): string => `${value / 16}rem`;

/**
 * Media Instance
 */
const AppMedia = createMedia({
  breakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 },
  interactions: {
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)'
  }
});

export const mediaStyles = AppMedia.createMediaStyle();
export const { Media: RenderMedia, MediaContextProvider } = AppMedia;

/**
 * copyTextToClipboard
 */
const fallbackCopyTextToClipboard = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    const msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
};

export const copyTextToClipboard = (text: string): void => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log('Async: Copying to clipboard was successful!');
    },
    function (err) {
      console.error('Async: Could not copy text: ', err);
    }
  );
};

/**
 * Get item saved in session storage api.
 */
export const storageGetItem = (key: string): Record<string, unknown> => {
  return JSON.parse(window.localStorage.getItem(key) || '{}');
};

/**
 * Save a item in session storage api.
 */
export const storageSaveItem = (key: string, data: any): void => {
  return window.localStorage.setItem(key, JSON.stringify(data));
};

/**
 * Trims string and adds '...' at end if it overflows.
 * @param  stringToTrim: String to remove chars from
 * @param limit: Limit of characters
 */
export const trimName = (stringToTrim: string, limit: number): string => {
  return `${stringToTrim.substring(0, limit)}${stringToTrim.length > limit ? '...' : ''}`;
};

/**
 * Log Analytic event
 */
type LogEventType = {
  eventName: string;
  eventValue?: string;
};

export const logEvent = ({ eventName, eventValue = undefined }: LogEventType): void => {
  const GAEvent = {
    event: eventName,
    action: eventName,
    value: eventValue
  };

  if (!dev) {
    const isBrowser = typeof window !== 'undefined';

    if (isBrowser) {
      if (window.dataLayer) {
        window.dataLayer.push(GAEvent);
      }
    }
  }
  console.log(`DEBUG-GAEvent: ${JSON.stringify(GAEvent)}`);
};

export const handleCookie = (
  cookieName: string
): { set: (cookieValue: string) => void; destroy: () => void; get: () => string } => {
  return {
    set: (cookieValue: string, options?: CookieSerializeOptions) => {
      setCookie(
        null,
        cookieName,
        cookieValue,
        options
          ? options
          : {
              maxAge: 30 * 24 * 60 * 60,
              path: '/'
            }
      );
    },
    destroy: () => {
      destroyCookie(null, cookieName);
    },
    get: () => {
      const cookies = parseCookies(null);
      if (dev) {
        console.log(cookies);
      }
      return cookies[cookieName];
    }
  };
};

export const setAttributes = (el: HTMLElement, attrs: { [key: string]: string }): void => {
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};
