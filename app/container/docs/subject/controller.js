define(['adminApp'], function (adminApp) {
  adminApp.controller('DocsSubjectController', [
    '$state', 'breadcrumb', 'api', function($state, breadcrumb, api){
      breadcrumb('Document Subject', [{
        name: 'Document',
        link: 'main.docs.suject'
      }, {
        name: 'Subject',
        link: 'main.docs.suject'
      }]);

      var self = this;
      self.newDocSubject = false;
      self.newDocSubjectName = '';
      self.docSubjects = [];

      api.doc.getSubject(function(res) {
        if (res && res.code === 200 && res.data) {
          self.docSubjects.length = 0;
          angular.forEach(res.data, function(subject) {
            this.push(subject);
          }, self.docSubjects);
        }
      });

      self.innerToSubject = function(subject) {
        $state.go('main.docs.wiki', {id: subject.id});
      };

      // To cancel new document subject function. hide field. clear newDocSubjectName.
      self.cancelNewDocSubject = function() {
        self.newDocSubject = false;
        self.newDocSubjectName = '';
      };

      // To Create New Document Subject function.
      self.toCreateNewDocSubject = function() {
        console.log(self.newDocSubjectName);
        if (self.newDocSubjectName) {
          api.doc.postSubject({name: self.newDocSubjectName}, function(res) {
            console.log(res);
            if (res && res.code === 200 && res.data) {
              self.cancelNewDocSubject();
              self.docSubjects.push(res.data);
            }
          });
        }
      };

      self.toDeleteDocSubject = function(subject) {
        api.doc.deleteSubject(subject.id, function() {
          removeValueFromArray(self.docSubjects, subject);
        });
      };

      function removeValueFromArray(arr, value) {
        for (var i = arr.length - 1; i >= 0; i --) {
          if (arr[i].id === value.id) {
            arr.splice(i, 1);
          }
        }
      }
    }
  ]);
});
