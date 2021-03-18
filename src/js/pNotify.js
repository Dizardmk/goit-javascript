import { notice, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

export default {
  emptyResult() {
    notice({
      text: 'Вы ничего не ввели 🤔\n Попробуйте еще раз',
      delay: 3000,
      maxTextHeight: null,
    });
  },
  failureResult() {
    error({
      text: 'Ой, мы ничего не нашли 😥\n Попробуйте еще раз',
      delay: 3000,
      maxTextHeight: null,
    });
  },
  errorResult() {
    error({
      text: 'Ой, что-то пошло не так 🤕\n Попробуйте еще раз',
      delay: 3000,
      maxTextHeight: null,
    });
  },
};
