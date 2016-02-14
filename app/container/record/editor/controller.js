define(['adminApp', 'ui-codemirror'], function (adminApp) {

  adminApp.controller('EditorController', function ($scope, $http, breadcrumb, adminhttp){

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
      type: '',
      content: ''
    };

    self.submitBlog = function () {
      if(self.blog === undefined || self.blog.title === undefined
        || self.blog.title === ''){
        return ;
      }

      // Send a post record to web server.
      adminhttp.POST({
        url: '/blog',
        data: self.blog
      });


    };
  });

});
