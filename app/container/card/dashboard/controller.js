define(['adminApp'], function (adminApp) {

  adminApp.controller('CardDashboardController', ['breadcrumb',
    function (breadcrumb){
      breadcrumb();
      var self = this;
      self.pics = [];
      for(var i = 0; i < 4; i ++) {
        self.pics.push('http://imga1.pic21.com/bizhi/140222/07781/s01.jpg');
        self.pics.push('http://img1.ali213.net/picfile/News/2014/12/04/584_20141204101001101.jpg');
        self.pics.push('http://imgs.gamersky.com/ku/2014/ku_bayonetta_b.jpg');
      }
      console.log(self.pics);
    }]
  );
});
