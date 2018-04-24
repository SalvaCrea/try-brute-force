var BruteForcer = function () {
    this.nbChar = 0;
    this.maxChar = 0;
    this.charCurrent = 0;
    this.charCanbe = '';
    this.charType = {
        normal: 'abcdefghijkmnopqrstxyzw',
        uppercase: 'ABCDEFGHIJKMNOPQRSTXYZW',
        numeric : '0123456789'
    },
    this.charTypeActived = ['normal'];
    this.domContainer = '';
}

BruteForcer.prototype.newChar = function () {
    return {
        position: 0
    }
};

BruteForcer.prototype.setCharTypeActived = function (charTypeActived = ['normal']) {
    this.charTypeActived = charTypeActived;
    return this;
};

BruteForcer.prototype.setDomContainer = function (domElement = '#dom-container') {
    this.domContainer = domElement;
    return this;
};

BruteForcer.prototype.getCharMinified = function () {
    var charMinified = '';
    for (var keyCharType in this.charTypeActived) {
        var string = this.charType[this.charTypeActived[keyCharType]];
        if (string) {
            charMinified += string;
        }
    }
    this.charCanbe = charMinified;
    return charMinified;
};

BruteForcer.prototype.findPossibly = function () {
    var probality = 0;
    for (var i = 1; i <= this.nbChar; i++) {
        probality += Math.pow(this.charCanbe.length, i);
    }
    return probality;
}

export default BruteForcer