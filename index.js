import Vue from '/node_modules/vue/dist/vue.min.js'

import app from './src/app'

Vue.config.devtools = true;

var vmApp = new Vue(app);

