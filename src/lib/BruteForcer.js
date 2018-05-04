var BruteForcer = function () {
    this.charType = {
        normal: 'azertyuiopqsdfghjklmwxcvbn',
        uppercase: 'AZERTYUIOPQSDFGHJKLMWXCVBN',
        numeric : '0123456789'
    };

    this.nbChar = 0;
    this.currentChar = 0;
    this.charList = '';
    this.currentPassword = [];
    this.currentPaddwordString = '';

    this.charTypeActived = ['normal'];
    this.domContainer = '';
    this.start = false;
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

BruteForcer.prototype.ready = function () {
    this.start = true;
    this.addChar();
    this.loop();
}

BruteForcer.prototype.addChar = function () {
    this.currentPassword.push(this.newChar());
}

BruteForcer.prototype.convertPassword = function () {
    var self = this;
    this.currentPaddwordString = '';
    this.currentPassword.forEach(function(currentChar){
        this.currentPaddwordString += this.charList[currentChar.position]
    });
    console.log(this.currentPaddwordString);
    this.domContainer.innerHtml += this.currentPaddwordString;
}

BruteForcer.prototype.loop = function () {
    var finish = false;
    while (!finish && this.start) {
        this.convertPassword();
        if (this.currentPassword[this.currentChar].position < this.nbChar) {
            this.currentPassword[this.currentChar].position++;
        }
    }
}

export default BruteForcer