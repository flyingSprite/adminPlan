define(['adminApp', 'moment', 'ap-charts'], function (adminApp, moment) {
  adminApp.controller('MissionListController', ['api', 'messageBox', function(api, messageBox) {
    var self = this;
    self.moment = moment;
    self.selectMission;
    self.mission = { show: false };

    self.newMission = {};
    // Whether show create form.
    self.showCreate = false;
    // Whether show delete button.
    self.showAction = false;
    // The mission List which show in left side.
    self.missionList = [];

    // The create mission action.
    self.toCreateMission = function() {
      self.showCreate = true;
    };

    self.toDeleteMission = function() {
      var id = self.selectMission.id;
      api.missionDelete(id, function(res) {
        if (res.code == 200) {
          clearMission();
          for (var i = self.missionList.length - 1; i >= 0; i --) {
            var mission = self.missionList[i];
            if (mission.id == id) {
              self.missionList.splice(i, 1);
            }
          }
          messageBox('success', 'Delete Mission Successful!');
        } else {
          messageBox('error', 'Delete Mission Failure!');
        }
      });
    };

    api.missionList(function(missions) {
      angular.forEach(missions, function(mission) {
        this.push(mission);
      }, self.missionList);
    });

    // Submit the new create mission.
    self.submitNewMission = function() {
      var currntDate = parseInt(moment().format('x'));
      self.newMission.createDate = currntDate;
      var startDate = parseInt(moment(self.newMission.startDate).format('x'));
      var endDate = parseInt(moment(self.newMission.endDate).format('x'));
      self.newMission.startDate = startDate ? startDate : currntDate;
      self.newMission.endDate = endDate ? endDate : currntDate;

      var newMission = {};
      copyMission(self.newMission, newMission);
      newMission.type = 'mission';
      newMission.author = 'Quesle';

      api.missionAdd(newMission, function(mission) {
        self.missionList.unshift(mission);
        self.cancelNewMission();
        messageBox('success', 'Create Mission Successful!');
      });
    };

    // Cancel to create mission.
    self.cancelNewMission = function() {
      self.newMission = {};
      self.showCreate = false;
    };

    // Show one mission detail info.
    self.showMissionItem = function(mission) {
      clearMission();
      self.selectMission = mission;
      copyMission(mission, self.mission);
      self.mission.show = true;
    };

    self.complateMission = function() {
      // api.missionUpdate
      var mission = {};
      copyMission(self.selectMission, mission);
      mission.status = 'complate';
      api.missionUpdate(mission, function(){
        self.selectMission.status = 'complate';
        self.mission.status = 'complate';
        messageBox('success', 'Complate Mission Successful!');
      });
    };

    function copyMission(from, to) {
      to.id = from.id;
      to.title = from.title;
      to.content = from.content;
      to.createDate = from.createDate;
      to.startDate = from.startDate;
      to.endDate = from.endDate;
      to.status = from.status;
      to.author = from.author;
      to.type = from.type;
      to.reaper = from.reaper;
    }

    function clearMission() {
      self.selectMission = undefined;
      self.showAction = false;
      self.mission = {};
    }
  }]);
});