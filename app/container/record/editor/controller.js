define(['adminApp', 'ui-codemirror'], function (adminApp) {

  adminApp.controller('EditorController', function ($scope, $http, breadcrumb){

    var self = this;

    self.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'javascript',
      foldGutter: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    };

    self.blog = {
      title: '',
      content: ''
    };

    self.message = 'var i = 10;';

  });

});
