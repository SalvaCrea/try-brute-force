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
    console.log(charTypeActived);
    this.charTypeActived = charTypeActived;
    return this;
};

BruteForcer.prototype.setDomContainer = function (domElement = '#dom-container') {
    this.domContainer = domElement;
    return this;
};

BruteForcer.prototype.getCharMinified = function () {
    var charMinified;
    for (var keyCharType in this.charTypeActived) {
        charMinified += this.charType[this.charTypeActived[keyCharType]];
    }
    return charMinified;
};

export default BruteForcer