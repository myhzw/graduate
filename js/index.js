window.addEventListener('DOMContentLoaded',function () {
    var app = new Vue({
        el:'#root',
        data: {
            learndata,
            inx: 0,
            timer: null,
            settime: null,
            choiceinx: 0,
            courinx: 0
        },
        methods: {
            //banner.js
            stoptimer: function () {
                clearInterval(this.timer);
            },
            starttimer: function () {
                this.timer = setInterval(() => {
                    this.inx = this.inx === 4 ? 0 : ++this.inx;
                }, 6000);
            },
            banners: function() {
                this.timer = setInterval(() => {
                    this.inx = this.inx === 4 ? 0 : ++this.inx;
                }, 6000);
            },
            btnLeft: function() {
                clearTimeout(this.settime);
                this.settime = setTimeout(() => {
                    this.inx = this.inx === 0 ? 4 : --this.inx;
                }, 300);
            },
            btnRight: function() {
                clearTimeout(this.settime);
                this.settime = setTimeout(() => {
                    this.inx = this.inx === 4 ? 0 : ++this.inx;
                }, 300);
            },
            switcsh: function(index) {
                this.inx = index;
            },
            //choice
            slide: function(index) {
                this.courinx = index;
                this.choiceinx = index;
            }
        },
        mounted() {
            this.banners();
        }
    })
})