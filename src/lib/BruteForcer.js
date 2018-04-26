var BruteForcer = function () {
    this.charType = {
        normal: 'abcdefghijkmnopqrstxyzw',
        uppercase: 'ABCDEFGHIJKMNOPQRSTXYZW',
        numeric : '0123456789'
    };

    this.nbChar = 0;
    this.charList = '';

    this.charTypeActived = ['normal'];
    this.domContainer = '';
    this.start = false;
    this.currentPassword = [];
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
    this.charList = charMinified;
    return charMinified;
};

BruteForcer.prototype.findPossibly = function () {
    var probality = 0;
    for (var i = 1; i <= this.nbChar; i++) {
        probality += Math.pow(this.charList.length, i);
    }
    return probality;
}

BruteForcer.prototype.start = function () {
    this.start = true;
}

BruteForcer.prototype.loop = function () {
    var finish = false;
    while (!finish && start) {

    }
}

export default BruteForcer