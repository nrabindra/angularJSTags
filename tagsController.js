var tags = angular.module('tags',[]);

tags.controller('tagsController', function($scope){
  
  $scope.tagValue ='';
  $scope.tagList = [];
  $scope.tagFlag =[];
  
  $scope.addTag = function(tag){
    //Handle when no value has been entered.
    if(tag==null||tag==='')
    {
      return;
    }
    //Handle if tab value exists already.
    if($scope.tagList.indexOf(tag)>=0)
    {
      $scope.tagValue = '';
      return;
    }

    $scope.tagList.push(tag);  
    $scope.tagFlag.push(true);
    $scope.tagValue = '';
    
     };
  
  $scope.removeTag = function(index){


  $scope.tagFlag[index] = false;
  var newList =[];
  for(var i = 0; i< $scope.tagList.length; i++)
  {
    if($scope.tagFlag[i])
    {
      newList.push($scope.tagList[i]);
    }
  }
  $scope.tagList = newList;
  $scope.tagFlag = [];
   
  for(var i = 0; i< $scope.tagList.length; i++)
  {
    $scope.tagFlag[i] = true;
  }

};
});
