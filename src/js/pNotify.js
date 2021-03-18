import { notice, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

export default {
  manyResults() {
    notice({
      text: 'Найдено слишком много стран, пожалуйста, уточните Ваш запрос',
      delay: 3000,
      maxTextHeight: null,
    });
  },
  emptyResult() {
    notice({
      text: 'Вы ничего не ввели',
      delay: 3000,
      maxTextHeight: null,
    });
  },
  failureResult() {
    error({
      text: 'Мы не нашли страны, подходящие под Ваш запрос 🙁',
      delay: 3000,
      maxTextHeight: null,
    });
  },
  errorResult() {
    error({
      text: 'Ой, что-то пошло не так, пожалуйста, повторите Ваш запрос',
      delay: 3000,
      maxTextHeight: null,
    });
  },
};
