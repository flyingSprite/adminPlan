define(['adminApp'], function (adminApp) {
  adminApp.controller('TaskMediaTypeController', [
    'breadcrumb', 'api', function(breadcrumb, api){
      breadcrumb('Media Type', [{
        name: 'Task',
        link: 'main.task.detail'
      }, {
        name: 'Media Type',
        link: 'main.task.type'
      }]);

      var cates = {
        Category1: ['Label1', 'Label2', 'Label3', 'Label4'],
        Category2: ['bel1', 'bel2', 'bel3', 'bel4']
      };
      var self = this;
      self.select = 'Category';
      self.isCreate = false;

      // Category List
      self.categories = [];
      // Label List by one category
      self.categoryLabels = [];
      // Create new Category value
      self.newCategory = '';
      // Create new label value
      self.newLabel = '';
      // The category id object when select
      self.selectCategoryIdForLabel = '';
      self.selectCategoryForLabel = {};

      self.selectCategory = function() {
        self.select = 'Category';
        self.isCreate = false;
        clearCreateFields();
      };
      self.selectLabel = function() {
        self.select = 'Label';
        self.isCreate = false;
        if (!self.selectCategoryIdForLabel && self.categories.length > 0) {
          self.selectCategoryForLabel = self.categories[0];
          self.selectCategoryIdForLabel = self.selectCategoryForLabel.id;
          self.changeCategoryForLabel();
        }
        clearCreateFields();
      };
      self.createNewCategory = function() {
        self.isCreate = true;
      };
      self.createNewLabel = function() {
        self.isCreate = true;
      };
      self.cancelCreateCategory = function() {
        self.isCreate = false;
      };
      self.cancelCreateLabel = function() {
        self.isCreate = false;
      };
      self.toCreateNewCategory = function() {
        var index = self.categories.indexOf(self.newCategory);
        if (self.newCategory !== '' && index === -1) {
          api.category.post({value: self.newCategory}, function(res) {
            self.categories.push(res.data);
          });
        }
        clearCreateFields();
        self.isCreate = false;
      };
      self.toCreateNewLabel = function() {
        if (self.selectCategoryIdForLabel && self.newLabel) {
          if (!self.getLabelByValue(self.newLabel)) {
            api.label.post({
              categoryId: self.selectCategoryForLabel.id,
              category: self.selectCategoryForLabel.value,
              value: self.newLabel
            }, function() {
              self.categoryLabels.push(self.newLabel);
              self.changeCategoryForLabel();
              clearCreateFields();
              self.isCreate = false;
            });
          }
        }
      };

      self.changeCategoryForLabel = function() {
        if (self.selectCategoryIdForLabel) {
          self.selectCategoryForLabel = self.getCagetoryById(self.selectCategoryIdForLabel);
          api.label.get(self.selectCategoryForLabel.id, function(res) {
            self.categoryLabels.length = 0;
            angular.forEach(res.data, function(label) {
              this.push(label);
            }, self.categoryLabels);
          });
        }
      };

      self.deleteCategory = function(category) {
        delete cates[category];
        api.category.delete(category.id, function(res) {
          if (res && res.code === 200) {
            if (category.id === self.selectCategoryIdForLabel) {
              self.categoryLabels.length = 0;
              self.selectCategoryIdForLabel = '';
            }
            removeValueFromArray(self.categories, category);
          }
        });
      };

      self.deleteLabelForCategory = function(label) {
        api.label.delete(label.id, function(res){
          if (res && res.code === 200) {
            removeValueFromArray(self.categoryLabels, label);
          }
        });
        self.changeCategoryForLabel();
      };

      self.getCagetoryById = function(categoryId) {
        for (var i in self.categories) {
          var category = self.categories[i];
          if (category.id === categoryId) {
            return category;
          }
        }
      };

      self.getLabelByValue = function(value) {
        for (var i in self.categoryLabels) {
          var label = self.categoryLabels[i];
          if (label.value === value) {
            return label;
          }
        }
      };

      function init() {
        api.category.get(function(res) {
          if (res && res.data) {
            self.categories.length = 0;
            angular.forEach(res.data, function(category) {
              this.push(category);
            }, self.categories);
          }
        });
      }

      function removeValueFromArray(arr, value) {
        for (var i = arr.length - 1; i >= 0; i --) {
          if (arr[i].id === value.id) {
            arr.splice(i, 1);
          }
        }
      }

      function clearCreateFields() {
        self.newLabel = '';
        self.newCategory = '';
      }
      init();
    }
  ]);
});
