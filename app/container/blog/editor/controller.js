define(['adminApp', 'ui-codemirror'], function (adminApp) {

  adminApp.controller('EditorController',[
    '$scope', '$http', '$state', '$stateParams', '$mdToast', 'breadcrumb', 'adminHttp',
    function ($scope, $http, $state, $stateParams, $mdToast, breadcrumb, adminHttp){

      var self = this;

      self.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'markdown'
      };
      var blogObjectList = ['id', 'title', 'type', 'content', 'currentDate'];
      self.blog = {
        title: '',
        type: '',
        content: ''
      };

      self.isUpdateModel = false;

      function initEditorController () {
        var $_id = $stateParams.id;
        if ($_id) {
          adminHttp({method: 'GET', url: '/blog/info?id=' + $_id})
            .success(function(data){
              if(data){
                self.isUpdateModel = true;
                objectCopy(blogObjectList, data, self.blog);
              } else {
                self.isUpdateModel = false;
              }
            })
            .error(function () {
              self.isUpdateModel = false;
            });
        }
      }

      function objectCopy (objectList, from, to) {
        if (typeof(objectList) === 'object'){
          for(var obj in objectList){
            to[objectList[obj]] = from[objectList[obj]];
          }
        }
      }

      function getToastPosition() {
        var toastPosition = {
          bottom: false,
          top: true,
          center: true,
          left: false,
          right: false
        };
        return Object.keys(toastPosition)
          .filter(function(pos) { return toastPosition[pos]; })
          .join(' ');
      }

      function showEditorToast () {
        var message = self.isUpdateModel ? 'Editor Success' : 'Create Success' ;
        $mdToast.show(
          $mdToast.simple()
            .action('OK')
            .textContent(message)
            .position(getToastPosition())
            .hideDelay(3000)
        );
      }

      self.submitBlog = function () {
        if(self.blog === undefined || self.blog.title === undefined
          || self.blog.title === ''){
          return ;
        }

        if(self.isUpdateModel){
          self.blog.isUpdate = true;
        }

        var method = self.isUpdateModel ? 'PUT' : 'POST';
        // var method = 'POST';
        delete self.blog.lastUpdateDate;
        delete self.blog.currentDate;
        console.log(self.blog);
        adminHttp({url: '/blog', data: self.blog, method: method})
        .success(function() {
          showEditorToast();
          $state.go('main.blog.list');
        });

      };

      self.cancel = function () {
        if ( self.isUpdateModel && self.blog.id) {
          $state.go('main.blog.info', {id: self.blog.id});
        } else {
          $state.go('main.blog.list');
        }
      };

      initEditorController();
    }
  ]);
});
