let tagInput = ()=> 
  ({
    scope: {
      tags: '='
    },
    template: `
      <div class="tagInput">
       <div ng-repeat="tag in $ctrl.tags track by $index" class="input-tag">
        {{::tag}}
        <div class="delete-tag" ng-click="$ctrl.deleteTag(tag)">&times;</div>
       </div>
        <input type="text" ng-model="$ctrl.tagText"
               onkeypress="this.style.width = ((this.value.length + 1) * 8) + 'px';"
               ng-keydown="$ctrl.keydown($event)"
               ng-keyup="$ctrl.keyup($event)"/>

      </div>
    `,
    bindToController: true,
    controllerAs: '$ctrl',
    controller: [function(){
      let vm = this;

      vm.tagText = '';
      
      vm.deleteTag = (key)=>{
        if(vm.tags.length > 0 && vm.tagText.length === 0 && key === undefined){
          vm.tags.pop();
        }else if(key !== undefined){
          vm.tags.splice(key,1);
        }
      }

      vm.keydown = (e)=>{
        if(e.which == 9){
          e.preventDefault();
        }

        if(e.which == 8){
          vm.deleteTag();
          // e.preventDefault();
        }
      }

      vm.keyup = (e)=>{
        let key = e.which;
        if(key == 9 || key == 13){
          e.preventDefault();
          if(vm.tagText.length === 0){
            return
          }else{
            vm.tags.push(vm.tagText);
            vm.tagText = '';
          }
        }
      }
    }]
  })

export default tagInput;