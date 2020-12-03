cc.Class({
    extends: cc.Component,

    properties: {
        playBtn: {
            default:null,
            type: cc.Node
        },
        menu: {
            default:null,
            type: cc.Node
        },
        backBtn: {
            default:null,
            type: cc.Node
        },
        bgMusic: {
            default:null,
            type: cc.AudioSource
        },
        meow: {
            default:null,
            type: cc.AudioSource
        }
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function () {
        var self = this;
        cc.log("GameManager ==> onLoad() ==> starts");
        try {
        self.playBtn.on('touchstart' , function(event) {
            if(self.menu.x == 2000) {
                self.meow.play();
                self.menu.x = 0;
            }
        });
    } catch (err) {
        cc.log(">Play Button Is Not Working<");
    }
    
    try {
        self.backBtn.on('touchstart' , function(event) {
            if(self.menu.x == 0) {
                self.meow.play();
                self.menu.x = 2000;
            }
        });
    } catch (err) {
        cc.log(">Back Button Is Not Working<");
    }
        cc.log("GameManager ==> onLoad() ==> ends");
    },

    start: function () {
        //
    },

    update: function (dt) {
        //
    }

});
