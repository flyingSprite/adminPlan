define(['adminApp', 'ui-codemirror'], function (adminApp) {

  adminApp.controller('EditorController', function ($scope, $http, breadcrumb, adminHttp){

    var self = this;

    self.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'markdown'
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
      adminHttp({url: '/blog', data: self.blog, method: 'POST'})
      .success(function (response){
        console.log("success");
      });

    };
  });

});
