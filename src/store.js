/*jshint esversion: 6 */

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    // Initial state
    state: {
        projects: [
          {
            "id":12,
            "name":"Create task manager tool",
          },
          {
            "id":3,
            "name":"Westmon RFC site",
          }
        ],
        tasks: [
          {
            "project_id":12,
            "name":"Set up store and actions file with dummy data",
            "complete":false
          }
        ]
    },

});
