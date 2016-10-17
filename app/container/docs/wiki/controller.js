define(['adminApp', 'pnotify'], function (adminApp) {
  adminApp.controller('DocsWikiController', [
    '$state', '$stateParams', 'breadcrumb', 'api', 'copyArray', 'removeArrayById',
    function($ocLazyLoad, $state, $stateParams, breadcrumb, api, copyArray, removeArrayById){
      breadcrumb('Wiki', [{
        name: 'Document',
        link: 'main.docs.subject'
      }, {
        name: 'Subject',
        link: 'main.docs.subject'
      }, {
        name: 'Wiki',
        link: 'main.docs.wiki'
      }]);
      var self = this;
      self.titles = [];
      self.selectTitle = {};
      self.docContent = {};
      self.hasDocContent = false;
      self.isEditDocContent = false;

      self.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'markdown'
      };

      self.toCreateNewTitle = function() {
        if (self.newTitle && self.id) {
          api.doc.postTitle({
            subjectId: self.id,
            title: self.newTitle,
            author: 'Quesle'
          }, function(res) {
            if (res && res.code === 200 && res.data) {
              self.newTitle = '';
              self.titles.push(res.data);
            }
          });
        }
      };

      self.initFirstLoad = function() {
        if (self.titles.length > 0) {
          var firstTitle = self.titles[0];
          self.showDocContent(firstTitle);
        }
      };

      self.deleteTitle = function(docTitle) {
        api.doc.deleteTitle(docTitle.id, function(res) {
          if (res && res.code === 200) {
            removeArrayById(self.titles, docTitle);
          }
        });
      };

      self.showDocContent = function(docTitle) {
        self.selectTitle = docTitle;
        self.isEditDocContent = false;
        api.doc.getContent(self.selectTitle.id, function(res) {
          if (res && res.code === 200 && res.data) {
            self.docContent = res.data;
            self.hasDocContent = true;
          } else {
            self.docContent = {};
            self.hasDocContent = false;
          }
        });
      };

      self.toEditDocContent = function() {
        self.isEditDocContent = true;
        if (self.hasDocContent) {
          self.editContent = self.docContent.content;
        }
      };

      self.cancelEditDocContent = function() {
        self.isEditDocContent = false;
        self.editContent = '';
      };

      self.editDocContent = function() {
        self.docContent.content = self.editContent;
        if (self.editContent) {
          var method;
          var options = {
            subjectId: self.id,
            titleId: self.selectTitle.id,
            content: self.editContent,
            title: self.selectTitle.title,
            author: 'Quesle'
          };
          if (self.hasDocContent) {
            options.id = self.docContent.id;
            method = api.doc.putContent;
          } else {
            method = api.doc.postContent;
          }
          method(options, function(res) {
            if (res && res.code === 200 && res.data){
              self.docContent = res.data;
              self.isEditDocContent = false;
            }
          });
        }
      };

      function init() {
        self.id = $stateParams.id;
        api.doc.getSubjectById(self.id, function(res) {
          if (res && res.code === 200 && res.data) {
            self.docSubject = res.data;
          }
        });

        api.doc.getTitle(self.id, function(res) {
          if (res && res.code === 200 && res.data) {
            self.titles.length = 0;
            copyArray(self.titles, res.data);
            self.initFirstLoad();
          }
        });
      }
      init();
    }
  ]);
});
