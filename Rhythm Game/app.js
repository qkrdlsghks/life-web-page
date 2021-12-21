// Object.keys(data).length

window.onload = function() {
    const log = console.log
    //요소 가져오기
    let effect1 = document.querySelector("#effect1");
    let effect2 = document.querySelector("#effect2");
    let effect3 = document.querySelector("#effect3");
    let effect4 = document.querySelector("#effect4");
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let line3 = document.getElementById("line3");
    let line4 = document.getElementById("line4");
    let score = document.querySelector(".score");
    let starting = false;
        
    fetch("./sheetMusic.json")
        .then(res => res.json())
        .then(data => init(data));
        
    function init(data) {
        document.addEventListener("keydown", keypressdown, false)
        // document.addEventListener("keypress", keypress, false)
        document.addEventListener("keyup", keypressup, false)

        function keypressdown(kevent) {

            //눌린 키 확인 이벤트
            // console.log(kevent.keyCode)


            //d버튼을 눌렀을때 이벤트
            if(kevent.keyCode == 68) {
                // console.log("d눌렸음");

                
                effect1.style.height = "100px";
            }

            //f버튼을 눌렀을때 이벤트
            if(kevent.keyCode == 70) {
                // console.log("f눌렸음");

                effect2.style.height = "100px";
            }

            //j버튼을 눌렀을때 이벤트
            if(kevent.keyCode == 74 ) {
                // console.log("j눌렸음");

                effect3.style.height = "100px";
            }

            //k버튼을 눌렀을때 이벤트
            if(kevent.keyCode == 75) {
                // console.log("k눌렸음");

                effect4.style.height = "100px";
            }

            if(starting == false) {
                if(kevent.keyCode == 32) {
                    // 스페이스를 눌러서 시작 모듈
                    starting = true;
                    start();
                }
            }
        }
        function keypressup(kevent) {

            // 올라온 키 확인 이벤트
            // console.log(kevent.keyCode);


            //d버튼을 눌렀을때 이벤트
            if(kevent.keyCode == 68) {
                // console.log("d올라왔음");

                effect1.style.height = 0;
            }

            //f버튼을 눌렀을때 이벤트
            if(kevent.keyCode == 70) {
                // console.log("f올라왔음");

                effect2.style.height = 0;
            }

            //j버튼을 눌렀을때 이벤트
            if(kevent.keyCode == 74 ) {
                // console.log("j올라왔음");

                effect3.style.height = 0;
            }

            //k버튼을 눌렀을때 이벤트
            if(kevent.keyCode == 75) {
                // console.log("k올라왔음");

                effect4.style.height = 0;
            }
        }

        // function start() {
        //     console.log("게임이 시작됐습니다")
        //     let number = 0;
        //     let time = setInterval(function() {
        //         data.forEach(function(music) {
        //             if(number == music) {
        //                 console.log("이것은 리듬게임 타일입니다")
        //                 let ran = Math.floor(Math.random()*4);
        //                 let box = document.createElement("div");
        //                 box.classList.add("box");
        //                 // console.log(box)
        //                 if(ran == 0) {
        //                     line1.prepend(box);
        //                 }else if(ran == 1) {
        //                     line2.prepend(box);
        //                 }else if(ran == 2) {
        //                     line3.prepend(box);
        //                 }else if(ran == 3) {
        //                     line4.prepend(box);
        //                 }

        //                 let num = 0;
        //                 note_down(num,box,ran);
        //                 // let tile = setInterval(function() {
        //                 //     box.style.top = num + "px";
        //                 //     num += 1;
        //                 //     if(590 < num && num < 630) {
                                
        //                 //     }
        //                 //     if(699 < num){
        //                 //         box.remove()
        //                 //         console.log("박스 삭제")
        //                 //         clearInterval(tile)
        //                 //     }
        //                 // }, 3)
        //             }
        //         })
        //         number += 1;
        //         if(56 < number){
        //             clearInterval(time)
        //         }
        //     }, 250);
        // }

        let sum = true;
        var audio = new Audio('./music/SoIstEsImmer.mp3');

        function start() {
            setTimeout(function() {
                draw();
            },0);
            // 21150
            setTimeout(function() {
                audio.play();
            }, 400)
        }
        
        function note_down(num,box,line, ssum) {
            box.style.top = num + "px";
            if(ssum == true) {
                num += 10;
            };
            if(580 <= num && 660 >= num) {
                document.addEventListener("keydown", keypressdown, false)
                function keypressdown(kevent) {
                    //d버튼을 눌렀을때 이벤트
                    if(kevent.keyCode == 68) {
                        if(line == 0) {
                                box.remove()
                                ssum = false;
                                num = 0;
                                return;
                        }
                    }

                    //f버튼을 눌렀을때 이벤트
                    if(kevent.keyCode == 70) {
                        if(line == 1) {    
                                box.remove()
                                ssum = false;
                                num = 0;
                                return;
                        }
                    }
        
                    //j버튼을 눌렀을때 이벤트
                    if(kevent.keyCode == 74 ) {
                        if(line == 2) {
                                box.remove()
                                ssum = false;
                                num = 0;
                                return;
                        }
                    }
        
                    //k버튼을 눌렀을때 이벤트
                    if(kevent.keyCode == 75) {
                        if(line == 3) {
                                box.remove()
                                ssum = false;
                                num = 0;
                                return;
                        }
                    }
                }
            }
            if(799 <= num){
                sum = false;
                box.remove()
                // console.log(sum);
                return;
            }else {
                window.requestAnimationFrame(() => note_down(num,box,line, ssum));
            }
        }


        function draw() {
            let number = 0;
                let time = setInterval(function() {
                    data.forEach(function(music) {
                        if(number == music.beat) {
                            let ssum = true;
                            // if(1 < music.length) {

                            // }else {

                            // }
                            let box = document.createElement("div");
                            box.classList.add("box");
                            // console.log(box)
                            if(music.line == 0) {
                                line1.prepend(box);
                            }else if(music.line == 1) {
                                line2.prepend(box);
                            }else if(music.line == 2) {
                                line3.prepend(box);
                            }else if(music.line == 3) {
                                line4.prepend(box);
                            }
                            let num = 0;
                            note_down(num,box,music.line, ssum);
                        }
                    })
                    score.innerHTML=Math.floor((number / 412) * 100) + "%";
                    if(sum == false) {
                        number = 0;
                        score.innerHTML="클리어 실패!";
                        audio.pause();
                        clearInterval(time);
                    }
                    // console.log(sum);
                    number += 1;
                    if(412 < number){
                        number = 0;
                        score.innerHTML="클리어하셨습니다!";
                        audio.pause();
                        clearInterval(time);
                    }
                }, 249);
        }
        
    }
    

    
    
};