import type { XSound } from 'xsound';

declare global {
  interface Window {
    X?: typeof XSound;
  }
}
