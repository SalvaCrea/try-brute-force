import BruteForcer from './lib/bruteforcer'
import _ from '/node_modules/lodash/lodash.min.js'

var app = {
    el: '#app',
    data: {
        nbChar: 1,
        charType: {
            normal: true,
            uppercase: false,
            numeric: false
        },
        bruteForcer: {},
        possibly: 0
    },
    methods: {
        start: function() {
            let self = this;
            this.bruteForcer.setDomContainer('#password-finded');
        },
        getCharMinified: function () {
            return this.bruteForcer.getCharMinified();
        },
        change: function () {
            var self = this;
            var charType = [];
            _.forEach(this.charType, function(value, key) {
                if (self.charType[key] === true) charType.push(key);
            });
            this.bruteForcer.nbChar = this.nbChar;
            this.bruteForcer.setCharTypeActived(charType);
            this.possibly = this.bruteForcer.findPossibly();
        }
    },
    mounted: function() {
        this.bruteForcer = new BruteForcer();
    }
}

export default app