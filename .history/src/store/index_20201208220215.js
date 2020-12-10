import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuid_v4 } from 'uuid'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
      medicinesList:[
          {
              id:1,
              name:'Но-шпа',
              price:60.48,
              requirements:"Спазми гладкої мускулатури, пов'язані з захворюваннями біліарного тракту: холецистолітіаз, холангіолітіаз, холецистит, перихолецистит, холангіт, папіліт. Спазми гладкої мускулатури при захворюваннях сечового тракту: нефролітіаз, уретролітіаз, пієліт, цистит, тенезми сечового міхура.",
              maker:"Chinoin (Угорщина)"

          },
          {
            id:2,
            name:"Діазолін",
            price:19.19,
            requirements:"Профілактика і лікування сезонного та алергічного риніту, полінозу, кропив'янки, харчової та медикаментозної алергії, дерматозів, що супроводжуються свербежем шкіри (екзема, нейродерміт).",
            maker:"Фармак ОАО (Україна, Київ)"

        },
        {
            id:3,
            name:"Амоксил",
            price:81.77,
            requirements:"Інфекції органів дихання, сечостатевої системи, травного тракту (у тому числі у комбінації з метронідазолом або кларитроміцином застосовують для лікування захворювань, асоційованих із Helicobacter pylori), шкіри та м’яких тканин, спричинені чутливими до лікарського засобу мікроорганізмами.",
            maker:"Киевмедпрепарат ОАО (Україна, Київ)"

        }
      ]
    },
    mutations:{

    },
    actions:{

    },
    getters:{
        getMedicines:(state)=> state.medicinesList,
    },
    modules:{

    }
})

export default store