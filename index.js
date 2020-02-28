document.addEventListener("DOMContentLoaded", function () {
    var btnRight = document.querySelector(".btns b.right");
    btnLeft = document.querySelector(".btns b.left");
    btnSelect = document.querySelector(".fa.fa-angle-down");
    contentTitle = document.querySelector(".title span");
    console.log(contentTitle);
    contentSelect = document.querySelector(".content");
    Alloption = document.querySelectorAll(".option");

    //this code get key of button
    var ThisButton = "none";
    for (let i = 0; i < Alloption.length; i++) {
        Alloption[i].addEventListener("click", function () {
            ThisButton = Alloption[i].getAttribute("data-key");
            contentSelect.classList.remove("Active");
            contentTitle.innerHTML = Alloption[i].innerHTML;

        })
    }

    var slides = document.querySelectorAll(".slides ul li");
    isAction = false;
    let n_CurSldie = 0;

    //Select
    btnSelect.addEventListener('click', function () {
        contentSelect.classList.toggle("Active");
    })
    var getSlides = function (stt) {
        if (isAction)
            return false;

        isAction = true;
        var curSlide = slides[n_CurSldie];

        if (stt == "right") {
            n_CurSldie++;
            n_CurSldie %= slides.length;
        }
        else if (stt == "left") {
            n_CurSldie = (n_CurSldie > 0) ? (n_CurSldie - 1) : slides.length - 1;
        }

        var nextSlide = slides[n_CurSldie];
        let count = 0;


        //________________Scale animation_____________________________
        /*
        Sau khi chuyển động xong cần reset mọi thứ lại như cũ(tránh add class lung tung)
        */

        if (ThisButton == "scale") {
            curSlide.classList.add("Remove_Scale");
            nextSlide.classList.add("Action_Scale");

            curSlide.addEventListener("webkitAnimationEnd", function () {
                curSlide.classList.remove("Active");
                curSlide.classList.remove("Remove_Scale");
                count++;
                if (count == 2)
                    isAction = false;
            })

            nextSlide.addEventListener("webkitAnimationEnd", function () {
                nextSlide.classList.add("Active");
                nextSlide.classList.remove("Action_Scale");
                count++;
                if (count == 2)
                    isAction = false;
            })
        }


        //_____________Swipe Animation_________________________

        if (ThisButton == "swipe") {
            if (stt == "right") {
                curSlide.classList.add("SwipeLeft_Right");
                nextSlide.classList.add("FollowLeft_Right");
            }
            else if (stt == "left") {
                curSlide.classList.add("SwipeRight_Left");
                nextSlide.classList.add("FollowRight_Left");
            }

            curSlide.addEventListener("webkitAnimationEnd", function () {
                curSlide.classList.remove("Active");

                if (stt == "right")
                    curSlide.classList.remove("SwipeLeft_Right");
                else if (stt == "left")
                    curSlide.classList.remove("SwipeRight_Left");
                count++;
                if (count == 2)
                    isAction = false;
            })

            nextSlide.addEventListener("webkitAnimationEnd", function () {
                nextSlide.classList.add("Active");

                if (stt == "right")
                    nextSlide.classList.remove("FollowLeft_Right");
                else if (stt == "left")
                    nextSlide.classList.remove("FollowRight_Left");

                count++;
                if (count == 2)
                    isAction = false;
            })
        }


        // //_____________Swipe 2.0 Animation________________________

        if (ThisButton == "swipe2") {
            if (stt == "right") {
                curSlide.classList.add("SwingLeft_Right");
                nextSlide.classList.add("FollowSWingLeft_Right");
            }
            else if (stt == "left") {
                curSlide.classList.add("SwingRight_Left");
                nextSlide.classList.add("FollowSwingRight_Left");
            }

            curSlide.addEventListener("webkitAnimationEnd", function () {
                curSlide.classList.remove("Active");

                if (stt == "right")
                    curSlide.classList.remove("SwingLeft_Right");
                else if (stt == "left")
                    curSlide.classList.remove("SwingRight_Left");
                count++;
                if (count == 2)
                    isAction = false;
            })

            nextSlide.addEventListener("webkitAnimationEnd", function () {
                nextSlide.classList.add("Active");

                if (stt == "right")
                    nextSlide.classList.remove("FollowSWingLeft_Right");
                else if (stt == "left")
                    nextSlide.classList.remove("FollowSwingRight_Left");

                count++;
                if (count == 2)
                    isAction = false;
            })
        }


        //____________________3D SWING Animation_______________________
        if (ThisButton == "effect3D") {
            if (stt == "right") {
                curSlide.classList.add("_3DSwipe_L_R");
                nextSlide.classList.add("Follow3DSwipe_L_R");
            }
            else if (stt == "left") {
                curSlide.classList.add("_3DSwipe_R_L");
                nextSlide.classList.add("Follow3DSwipe_R_L");
            }

            curSlide.addEventListener("webkitAnimationEnd", function () {
                curSlide.classList.remove("Active");

                if (stt == "right")
                    curSlide.classList.remove("_3DSwipe_L_R");
                else if (stt == "left")
                    curSlide.classList.remove("_3DSwipe_R_L");
                count++;
                if (count == 2)
                    isAction = false;
            })

            nextSlide.addEventListener("webkitAnimationEnd", function () {
                nextSlide.classList.add("Active");

                if (stt == "right")
                    nextSlide.classList.remove("Follow3DSwipe_L_R");
                else if (stt == "left")
                    nextSlide.classList.remove("Follow3DSwipe_R_L");

                count++;
                if (count == 2)
                    isAction = false;
            })



        }

        //________________UP DOWN animation____________________
        /*
        Sau khi chuyển động xong cần reset mọi thứ lại như cũ(tránh add class lung tung)
        */
        if (ThisButton == "updown") {
            if (stt == "right")
                curSlide.classList.add("upEffect");
            else
                nextSlide.classList.add("downEffect");

            nextSlide.classList.add("Active");

            curSlide.addEventListener("webkitAnimationEnd", function () {
                curSlide.classList.remove("Active");
                curSlide.classList.remove("upEffect");
                count++;
                if (count == 1)
                    isAction = false;
            })
            nextSlide.addEventListener("webkitAnimationEnd", function () {
                nextSlide.classList.remove("downEffect");
                curSlide.classList.remove("Active");
                nextSlide.classList.add("Active");

                count++;
                if (count == 1)
                    isAction = false;
            })
        }



        /* ________________________STICK IT ______________________ */

        if (ThisButton == "stickit") {
            if (stt == "right") {
                curSlide.classList.add("_3DSwipe_B_T");
                nextSlide.classList.add("Follow3DSwipe_B_T");
            }
            else if (stt == "left") {
                curSlide.classList.add("_3DSwipe_T_B");
                nextSlide.classList.add("Follow3DSwipe_T_B");
            }

            curSlide.addEventListener("webkitAnimationEnd", function () {
                curSlide.classList.remove("Active");

                if (stt == "right")
                    curSlide.classList.remove("_3DSwipe_B_T");
                else if (stt == "left")
                    curSlide.classList.remove("_3DSwipe_T_B");
                count++;
                if (count == 2)
                    isAction = false;
            })

            nextSlide.addEventListener("webkitAnimationEnd", function () {
                nextSlide.classList.add("Active");

                if (stt == "right")
                    nextSlide.classList.remove("Follow3DSwipe_B_T");
                else if (stt == "left")
                    nextSlide.classList.remove("Follow3DSwipe_T_B");

                count++;
                if (count == 2)
                    isAction = false;
            })

        }

    }

    btnRight.addEventListener('click', function () {
        getSlides("right");
    });
    btnLeft.addEventListener('click', function () {
        getSlides("left");
    });

})