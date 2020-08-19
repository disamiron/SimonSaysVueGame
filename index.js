var app = new Vue({
    el: "#app",
    data: {
        sequence: "",
        answer: "",
        count: 1,
        complexity: 15,
        j: 0,
        list:[
            {color:"blue", color2: "dark-blue", hover:false, id: "1"},
            {color:"red", color2: "dark-red", hover:false, id: "2"},
            {color:"yellow", color2: "dark-yellow", hover:false, id: "3"},
            {color:"green", color2: "dark-green", hover:false, id: "4"}
        ]
    },
    methods: {
        startGame: function() {
            app.answer="";
            document.querySelector("#app > div:nth-child(3) > button").disabled="true";
            document.querySelector("#\\31 ").disabled="true";
            document.querySelector("#\\32 ").disabled="true";
            document.querySelector("#\\33 ").disabled="true";
            document.querySelector("#\\34 ").disabled="true";
            document.querySelector("#app > div:nth-child(3) > input[type=radio]:nth-child(6)").disabled="true";
            document.querySelector("#app > div:nth-child(3) > input[type=radio]:nth-child(8)").disabled="true";
            document.querySelector("#app > div:nth-child(3) > input[type=radio]:nth-child(10)").disabled="true";
            var random = function() {
                let rand = 1 + Math.random() * (4);
                return Math.floor(rand)
            };
            var seq = "";
            for (let i = 1; i <= this.count; i++) {
                seq += random();
            }
            console.log(seq);
            setTimeout(signalF,0);
            function signalF () {
                setTimeout(signalOn,33*app.complexity)
                setTimeout(signalOff,66*app.complexity)
                function signalOn () {
                    var color = ["dark-blue", "dark-red", "dark-yellow", "dark-green"];
                    document.querySelector("div.buttons").children[seq[app.j]-1].className=color[seq[app.j]-1];
                }
                function signalOff () {
                    var color2 = ["blue", "red", "yellow", "green"];
                    document.querySelector("div.buttons").children[seq[app.j]-1].className=color2[seq[app.j]-1];
                    app.j++;
                } 
                
                if (app.j < seq.length-1) {
                    setTimeout(signalF,100*app.complexity);
                } else {
                    document.querySelector("#\\31 ").disabled="";
                    document.querySelector("#\\32 ").disabled="";
                    document.querySelector("#\\33 ").disabled="";
                    document.querySelector("#\\34 ").disabled="";
                    setTimeout(checkFunction, 100*app.complexity*app.count);
                    
                    function checkFunction () {
                        if (app.answer===seq) {
                            app.j = 0;
                            app.count++;
                            app.answer="";
                            app.startGame();
                        } else {
                            document.querySelector("#app > div:nth-child(3) > button").disabled="";
                            document.querySelector("#app > div:nth-child(3) > input[type=radio]:nth-child(6)").disabled="";
                            document.querySelector("#app > div:nth-child(3) > input[type=radio]:nth-child(8)").disabled="";
                            document.querySelector("#app > div:nth-child(3) > input[type=radio]:nth-child(10)").disabled="";
                            alert("Game Over");
                            app.answer="";
                            app.j = 0;
                            app.count=1;
                        }
                    } 
                }
            }
            this.sequence="";
        },
        checkNum: function(e) {
            app.answer +=e.path[0].id;
            console.log(app.answer);
        },
        easyGame: function() {
            app.complexity= 15;
        },
        mediumGame: function() {
            app.complexity= 10;
        },
        hardGame: function() {
            app.complexity= 5;
        }
    }
})