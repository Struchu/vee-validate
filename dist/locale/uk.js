!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n.__vee_validate_locale__uk=n.__vee_validate_locale__uk||{},n.__vee_validate_locale__uk.js=e())}(this,function(){"use strict";var n=function(n){var e=["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"],t=0===(n=1024*Number(n))?0:Math.floor(Math.log(n)/Math.log(1024));return 1*(n/Math.pow(1024,t)).toFixed(2)+" "+e[t]},e={name:"uk",messages:{after:function(n,e){return"В полі "+n+" повинна бути дата після "+e[0]+"."},alpha_dash:function(n){return"Поле "+n+" може містити буквено-цифрові символи, а також тире та підкреслення."},alpha_num:function(n){return"Поле "+n+" може містити тільки літери та цифри."},alpha_spaces:function(n){return"Поле "+n+" може містити тільки літери та пробіли."},alpha:function(n){return"Поле "+n+" може містити тільки літери."},before:function(n,e){return"В полі "+n+" повинна бути дата до "+e[0]+"."},between:function(n,e){return"Поле "+n+" повинно бути між "+e[0]+" та "+e[1]+"."},confirmed:function(n){return"Поле "+n+" не співпадає з підтвердженням."},credit_card:function(n){return"Поле "+n+" не вірне."},date_between:function(n,e){return"В полі "+n+" повинна бути дата між "+e[0]+" та "+e[1]+"."},date_format:function(n,e){return"В полі "+n+" повинна бути дата в форматі "+e[0]+"."},decimal:function(n,e){void 0===e&&(e=[]);var t=e[0];return void 0===t&&(t="*"),"Поле "+n+" повинно бути числовим та може містити "+("*"===t?"знакі":t+" знаків")+" після коми."},digits:function(n,e){return"Поле "+n+" повинно бути числовим та точно містити "+e[0]+" цифри."},dimensions:function(n,e){return"Поле "+n+" повинно бути "+e[0]+" пікселів на "+e[1]+" пікселів."},email:function(n){return"В полі "+n+" повинна бути адреса електронної пошти."},ext:function(n){return"Поле "+n+" повинно бути дійсним файлом."},image:function(n){return"В полі "+n+" має бути зображення."},in:function(n){return"Поле "+n+" повинно бути допустимим значенням."},ip:function(n){return"Поле "+n+" повинно бути IP адресою."},max:function(n,e){return"Поле "+n+" не може бути більше, ніж "+e[0]+" символів."},max_value:function(n,e){return"Поле "+n+" повинно бути "+e[0]+" або менше."},mimes:function(n){return"Поле "+n+" повиннно мати дійсний тип файлу."},min:function(n,e){return"Поле "+n+" має бути принаймні "+e[0]+" символів."},min_value:function(n,e){return"Поле "+n+" повинно бути "+e[0]+" або більше."},not_in:function(n){return"Поле "+n+" повинно мати допустиме значення."},numeric:function(n){return"Поле "+n+" може містить лише цифри."},regex:function(n){return"Поле "+n+" має невірний формат."},required:function(n){return"Поле "+n+" повинно мати значення."},size:function(e,t){var r=t[0];return"Поле "+e+" повинно бути менше "+n(r)+"."},url:function(n){return"В полі "+n+" повиннен бути URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.addLocale(e),e});