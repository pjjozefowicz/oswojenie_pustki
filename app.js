new Vue({
    el: '#app',
    data: {
        input: '',
        showMenu: true,
        error: false,
        showGif: true,
        timeout: null,
        pathToImg: 'images/',
        gifPath: 'images/loading.gif',
    },
    methods: {
        validateInput: function (e) {
          if (e.keyCode === 13) {
            this.error = false;
            this.fileName = '';
            switch(this.input) {
              case '12':
              case '21':
                this.fileName = '12.jpg';
                break;
              case '13':
              case '31':
                this.fileName = '13.jpg';
                break;
              case '14':
              case '41':
                this.fileName = '14.jpg';
                break;
              case '15':
              case '51':
                this.fileName = '15.jpg';
                break;
              case '23':
              case '32':
                this.fileName = '23.jpg';
                break;
              case '24':
              case '42':
                this.fileName = '24.jpg';
                break;
              case '25':
              case '52':
                this.fileName = '25.jpg';
                break;
              case '34':
              case '43':
                this.fileName = '34.jpg';
                break;
              case '35':
              case '53':
                this.fileName = '35.jpg';
                break;
              case '45':
              case '54':
                this.fileName = '45.jpg';
                break;
              default:
                this.error = true;
                this.input = '';
            }
            if (!this.error) {
              this.pathToImg += this.fileName;
              this.showMenu = false;
              this.input = '';
              this.refreshImage();
              this.timeout = setTimeout(function() { 
                this.showGif = false;
              }.bind(this), 4000);
            }
          }
        },
        reset: function (e) {
          if (e.keyCode === 13) {
            this.showMenu = true; 
            this.input = '';
            this.pathToImg = 'images/';
            this.error = false;
            this.showGif = true;
            clearTimeout(this.timeout);
          }
        },
        refreshImage () {
          this.gifPath += ('?t=' + new Date().getTime());
        }
    }
});
