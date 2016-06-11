define(['adminApp'], function (adminApp) {
  adminApp.controller('LtaaaListController', [
    '$scope', '$state', '$anchorScroll', '$location', 'breadcrumb', 'adminHttp',
    function ($scope, $state, $anchorScroll, $location, breadcrumb, adminHttp){
      // breadcrumb.list = [{sref: 'main.record.list', title: "Blog List"}];
      $anchorScroll.yOffset = 100;   // 总是滚动额外的100像素
      var self = this;
      self.ltaaaTitleList = [];

      self.newStyle = false;

      self.pager = {
        total: 0,
        page: 0,
        size: 20
      };

      self.toPage = function (pageNumber) {
        self.pager.page = pageNumber - 1;
        findLtaaaTitle();
      }

      self.prevPage = function() {
        self.pager.page = self.pager.page - 1;
        self.pager.page = self.pager.page < 0 ? 0 : self.pager.page;
        findLtaaaTitle();
      }

      self.nextPage = function() {
        self.pager.page = self.pager.page + 1;
        findLtaaaTitle();
      }

      function toTop() {
        // 将location.hash的值设置为
        // 你想要滚动到的元素的id
        $location.hash('ltaaa-content');
        // 调用 $anchorScroll()
        $anchorScroll();
      }

      function findLtaaaTitle() {
        var url = '/ltaaa?size=' + self.pager.size + '&' + 'page=' + self.pager.page;
        adminHttp({method: 'GET', url: url})
          .success(function (res){
            self.ltaaaTitleList.length = 0;
            if (res.data) {
              angular.forEach(res.data, function(value, index){
                this.push(value);
              }, self.ltaaaTitleList);
            }
            if (res.pager) {
              var pager = res.pager;
              self.pager.page = pager.page;
              self.pager.total = pager.total;
              self.pager.size = pager.size;
            }
            toTop();
          }).error(function (err){
          });
      }
      findLtaaaTitle();
    }
  ]);
});
