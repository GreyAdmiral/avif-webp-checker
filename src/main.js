// @ts-check

/**
 * @typedef {Object} ImageFormatOptions
 * @property {"avif" | "webp" | "all"} mode"
 * @property {string} avifClass
 * @property {string} webpClass
 * @property {boolean} onlyClass
 * @property {number} [modeFlag]
 * @property {number} [onlyFlag]
 */

/**
 * @param {object} [opt]
 * @param {"avif" | "webp" | "all"} [opt.mode]
 * @param {string} [opt.avifClass]
 * @param {string} [opt.webpClass]
 * @param {boolean} [opt.onlyClass]
 * @description Проверка поддержки форматов avif и webp, добавление класса avif и/или webp для HTML
 */
export default function isAvifWebp(opt) {
   /** @type {ImageFormatOptions} */
   const options = {
         mode: 'all',
         avifClass: 'avif',
         webpClass: 'webp',
         onlyClass: true,
      },
      customOptions = opt || {};

   // Добавка указанных в атрибуте опций
   Object.assign(options, customOptions);
   // Включение флага проверки обоих форматов
   options.modeFlag = 3;

   // Коррекция флагов согласно указанной настройке
   if (options.mode == 'avif') {
      options.modeFlag = options.modeFlag & (1 << 1);
   } else if (options.mode == 'webp') {
      options.modeFlag = options.modeFlag & (1 << 0);
   }

   // Добавление класса avif для HTML
   if ((options.modeFlag & (1 << 1)) != 0) {
      testAvif(
         /** @param {boolean} supp */ function (supp) {
            const className = supp === true ? options.avifClass : null;

            if (className) {
               document.documentElement.classList.add(className);

               if (options.onlyClass) {
                  options.onlyFlag = 1;
               }
            }
         },
      );
   }

   // Добавление класса webp для HTML
   if ((options.modeFlag & (1 << 0)) != 0) {
      testWebP(
         /** @param {boolean} supp */ function (supp) {
            const className = supp === true ? options.webpClass : null;

            if (className) {
               if (!options.onlyClass || (options.onlyClass && !options.onlyFlag)) {
                  document.documentElement.classList.add(className);
               }
            }
         },
      );
   }

   /**
    * @param {function} cb
    * @description Проверка поддержки avif
    * */
   function testAvif(cb) {
      const aviF = new Image();

      aviF.onload = aviF.onerror = function () {
         cb(aviF.height == 2);
      };

      aviF.src =
         'data:image/avif;base64,AAAAHGZ0eXBtaWYxAAAAAG1pZjFhdmlmbWlhZgAAAOxtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAABEAAAQABAAAAAAEQAAEAAAAcAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUltYWdlAAAAAGtpcHJwAAAATGlwY28AAAAUaXNwZQAAAAAAAAACAAAAAgAAABBwYXNwAAAAAQAAAAEAAAASYXYxQ4EAHAAKBBgANpUAAAAOcGl4aQAAAAABCAAAABdpcG1hAAAAAAAAAAEAAQQBAoOEAAAAJG1kYXQKBBgANpUyFBZAAAElwATsB8r2tLEuqGulG3GS';
   }

   /**
    * @param {function} cb
    * @description Проверка поддержки webp
    * */
   function testWebP(cb) {
      const webP = new Image();

      webP.onload = webP.onerror = function () {
         cb(webP.height == 2);
      };

      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
   }
}
