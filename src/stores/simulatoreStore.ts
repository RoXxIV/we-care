import { defineStore } from 'pinia'

export const useSimulatorStore = defineStore({
  id: 'simulatorStore',
  state: () => ({
   simulatorObj: {
     habitationType: '',
     personalStatus: '',
     homeType: ''
   }
  }),
  actions:{
    addHabitationType(item: string){
      if (!item) return;
      this.simulatorObj.habitationType = item
    },
    addPersonalStatus(item: string){
      if (!item) return;
      this.simulatorObj.personalStatus = item
    },
    addHomeType(item: string){
      if (!item) return;
      this.simulatorObj.homeType = item
    }
  }
})
