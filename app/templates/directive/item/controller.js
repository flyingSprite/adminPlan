'use strict';
apDirective.directive('apItemArticle', function () {
  return {
    restrict: 'E',
    scope: {
      title: '@',
      url: '@',
      content: '@',
      img: '@',
      author: '@',
      date: '@',
      comment: '@',
      authorUrl: '@'
    },
    templateUrl: '/templates/directive/item/index.html',
    // template: `
    //   <article class="item-article">
    //     <div class="item-article-content">
    //       <div class="item-article-link">
    //         <img style="-webkit-user-select: none; cursor: zoom-in;" src="{{ img }}">
    //       </div>
    //       <div class="item-article-info">
    //         <h2 class="item-article-info-title">
    //           <a href="{{ url }}" target="_black" class="anim-link">{{ title }}</a>
    //         </h2>
    //         <div class="item-article-info-content">{{ content }}</div>
    //         <div class="item-article-pub-info">
    //           <div class="item-article-pub-info-author">
    //             <i class="fa fa-user"></i>
    //             <a href="{{ authorUrl }}" target="_black">{{ author }}</a>
    //             <span class="item-article-pub-info-separator">•</span>
    //           </div>
    //           <div class="item-article-pub-info-date">
    //             <i class="fa fa-clock-o"></i>
    //             <span>{{ date }}</span>
    //             <span class="item-article-pub-info-separator">•</span>
    //           </div>
    //           <div class="item-article-pub-info-comment">
    //             <i class="fa fa-commenting-o"></i>
    //             <span>{{ comment }}</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </article>
    // `,
    controller: ['$scope', function ($scope) {
      console.log('test => ', $scope.img);
    }]
  };
});
