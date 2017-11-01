!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n.__vee_validate_locale__el=n.__vee_validate_locale__el||{},n.__vee_validate_locale__el.js=e())}(this,function(){"use strict";var n=function(n){var e=["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"],t=0===(n=1024*Number(n))?0:Math.floor(Math.log(n)/Math.log(1024));return 1*(n/Math.pow(1024,t)).toFixed(2)+" "+e[t]},e={name:"el",messages:{after:function(n,e){return n+" πρέπει να είναι μετά "+e[0]+"."},alpha_dash:function(n){return n+" μπορεί να περιέχει αλφαριθμητικούς χαρακτήρες, παύλες και κάτω παύλες."},alpha_num:function(n){return n+" πρέπει να περιέχει μόνο αλφαριθμητικούς χαρακτήρες."},alpha_spaces:function(n){return n+" μπορεί να περιέχει μόνο αλφαβητικούς χαρακτήρες και κενά."},alpha:function(n){return n+" πρέπει να περιέχει μόνο αλφαβητικούς χαρακτήρες."},before:function(n,e){return n+" πρέπει να είναι πρίν "+e[0]+"."},between:function(n,e){return n+" πρέπει να είναι μεταξύ "+e[0]+" καί "+e[1]+"."},confirmed:function(n,e){return n+" δεν ταιριάζει με "+e[0]+"."},credit_card:function(n){return n+" πρέπει να είναι έγκυρη πιστωτική κάρτα."},date_between:function(n,e){return n+" πρέπει να είναι μεταξύ "+e[0]+" καί "+e[1]+"."},date_format:function(n,e){return n+" πρέπει να είναι σε μορφή "+e[0]+"."},decimal:function(n,e){void 0===e&&(e=[]);var t=e[0];return void 0===t&&(t="*"),n+" πρέπει να είναι αριθμός και να περιέχει "+("*"===t?"":t)+" δεκαδικά ψηφία."},digits:function(n,e){return n+" πρέπει να είναι αριθμός και να περιέχει "+e[0]+" ψηφία."},dimensions:function(n,e){return n+" πρέπει να είναι "+e[0]+" pixels επί "+e[1]+" pixels."},email:function(n){return n+" πρέπει να είναι έγκυρο email."},ext:function(n){return n+" πρέπει να είναι έγκυρο αρχείο."},image:function(n){return n+" πρέπει να είναι εικόνα."},in:function(n){return n+" πρέπει να είναι έγκυρη τιμή."},ip:function(n){return n+" πρέπει να είναι έγκυρη διεύθυνση IP."},max:function(n,e){return n+" δεν πρέπει να υπερβαίνει τους "+e[0]+" χαρακτήρες."},max_value:function(n,e){return n+" πρέπει να είναι "+e[0]+" ή λιγότερο."},mimes:function(n){return n+" πρέπει να είναι έγκυρο αρχείο ΜΙΜΕ."},min:function(n,e){return n+" πρέπει να είναι τουλάχιστον "+e[0]+" χαρακτήρες."},min_value:function(n,e){return n+" πρέπει να είναι "+e[0]+" ή περισσότερο."},not_in:function(n){return n+" πρέπει να είναι έγκυρη τιμή."},numeric:function(n){return n+" πρέπει να περιέχει μόνο αριθμούς."},regex:function(n){return n+" δεν είναι έγκυρο."},required:function(n){return n+" δεν έχει συμπληρωθεί."},size:function(e,t){var r=t[0];return e+" πρέπει να μην υπερβαίνει τα "+n(r)+"."},url:function(n){return n+" πρέπει να είναι έγκυρη διεύθυνση URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.addLocale(e),e});