define(function(require, exports, module) {
    var Display = require('js/app/Display');
    let d = new Display();
    console.log('class:', Display);
    console.log('instance:', d);
    d.print()
});
