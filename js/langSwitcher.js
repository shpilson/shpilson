lang('lang', 'data-lang', 'body');

function setLang(setLang) {
    $('body').data('lang-active', setLang);
    lang('lang', 'data-lang', 'body');
}