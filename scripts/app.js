window.onload=function(){

    console.log('Page loaded');


};

$(document).ready(function () {

    //buttons above text
    var B1 = $('#B1');
    var B2 = $('#B2');
    var B3 = $('#B3');
    var identify = $('#identify');
    var order = $('#order');
    var profile = $('#profile');
    var t1 = $('#screen1_text');
    var t2 = $('#screen2_text');
    var t3 = $('#screen3_text');

    //screens to change
    var screen1 = $('#screen_1');
    var screen2 = $('#screen_2');
    var screen3 = $('#screen_3');

    //screen 1 elements
    var blue = $('#blue');
    var grey = $('#grey');
    var button = $('.button');
    var c1 = $('#c1')
    var c2 = $('#c2')
    var c3 = $('#c3')
    var c4 = $('#c4')
    var c5 = $('#c5')
    var c6 = $('#c6')

    var uberx = $('#uberx');
    var taxi = $('#taxi');
    var black = $('#black');
    var uberxl = $('#uberXL');
    var suv = $('#SUV');


    //screen 2 elements
    var top2 = $('#top2');
    var call = $('#call');
    var driver = $('#driver_info');
    var search = $('#searching');
    var purple = $('#search_bg');
    var state = 0;

    //screen 3 elements
    var options = $('#options');
    var history = $('#history_scroll_container');
    var stats = $('#prof_info');


    
    //SET

    //buttons off at start

    TweenLite.set(B2, {
      autoAlpha: 0
    });

    TweenLite.set(B3, {
      autoAlpha: 0
    });

    //text off at start

    TweenLite.set(t2, {
      autoAlpha: 0
    });

    TweenLite.set(t3, {
      autoAlpha: 0
    });

    //screens off at start

    TweenLite.set(screen3, {
      autoAlpha: 0
    });

    TweenLite.set(screen2, {
      autoAlpha: 0
    });

    TweenLite.set(history, {
      y:275
    })

    TweenLite.set(blue, {
      autoAlpha:0
    })

    TweenLite.set([c2,c3,c4,c5,c6], {
      autoAlpha:0
    })

    TweenLite.set([taxi,black,suv,uberxl], {
      autoAlpha:0
    })

    $('#order').click(function() {
      //turn off/on other buttons and text from ORDER tab
      TweenLite.to(t1, 0.3, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(t3, 0.3, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(t2, 0.3, {autoAlpha:1, ease: "easeInQuart"});
      TweenLite.to(B2, 0, {autoAlpha:1});
      TweenLite.to(B1,.2, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(B3,.2, {autoAlpha:0, ease: "easeOutQuart"});
      //turn off/on other screens
      TweenLite.to(screen2, .4, {autoAlpha:1});
      TweenLite.to(screen1,.4, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(screen3,.4, {autoAlpha:0, ease: "easeOutQuart"}); 
      //turn off other elements on screen 2
      TweenLite.from(call,1, {delay:5, y:200, ease: "easeInQuart"});
      TweenLite.from(driver,1, {delay:5, y:200, ease: "easeInQuart"});
      //search throb
      TweenMax.to(search, 1, {alpha:0, repeat:3, yoyo:true, repeatDelay:.2}, 2.5);
      TweenLite.to([search,purple],0, {autoAlpha:1}); 
      TweenLite.to([search,purple],1, {autoAlpha:0, delay:5, ease: "easeOutQuart"}); 

    });

    $('#profile').click(function() {
      //turn off/on other buttons and text from PROFILE tab
      TweenLite.to(t2, 0.3, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(t1, 0.3, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(t3, 0.3, {autoAlpha:1, ease: "easeInQuart"});
      TweenLite.to(B3, 0, {autoAlpha:1});
      TweenLite.to(B1,.2, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(B2,.2, {autoAlpha:0, ease: "easeOutQuart"});
      //turn off/on other screens
      TweenLite.to(screen3, .4, {autoAlpha:1});
      TweenLite.to(screen2,.4, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(screen1,.4, {autoAlpha:0, ease: "easeOutQuart"});
    });

    $('#identify').click(function() {
      //turn off/on other buttons and text from IDENTIFY tab
      TweenLite.to(t2, 0.3, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(t3, 0.3, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(t1, 0.3, {autoAlpha:1, ease: "easeInQuart"});
      TweenLite.to(B1, 0, {autoAlpha:1});
      TweenLite.to(B3,.2, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(B2,.2, {autoAlpha:0, ease: "easeOutQuart"});
      //turn off/on other screens
      TweenLite.to(screen1, .4, {autoAlpha:1});
      TweenLite.to(screen2,.4, {autoAlpha:0, ease: "easeOutQuart"});
      TweenLite.to(screen3,.4, {autoAlpha:0, ease: "easeOutQuart"});
    });

  // screen 1 nav bar clicks chage cars
    $('#choose_taxi').click(function(e) {
      TweenLite.to(button, 0.3, {x:132});
      TweenLite.to([c1,c2,c4,c5,c6], 0.3, {autoAlpha:0});
      TweenLite.to(c3, 0.3, {autoAlpha:1});
      TweenLite.to(taxi, 0.3, {autoAlpha:1});
      TweenLite.to([uberx,uberxl,suv,black], 0.3, {autoAlpha:0});
      TweenLite.to(blue, 0, {autoAlpha:0}); 
      TweenLite.to(grey, 0.3, {autoAlpha:1});
      });

    $('#choose_black').click(function(e) {
      TweenLite.to(button, 0.3, {x:257});
      TweenLite.to([c1,c2,c3,c4,c6], 0.3, {autoAlpha:0});
      TweenLite.to(c5, 0.3, {autoAlpha:1});
      TweenLite.to(black, 0.3, {autoAlpha:1});
      TweenLite.to([uberx,uberxl,suv,taxi], 0.3, {autoAlpha:0});
      TweenLite.to(blue, 0, {autoAlpha:0}); 
      TweenLite.to(grey, 0.3, {autoAlpha:1});
      });

    $('#choose_x').click(function(e) {
      TweenLite.to(button, 0.3, {x:0});
      TweenLite.to([c2,c3,c4,c5,c6], 0.3, {autoAlpha:0});
      TweenLite.to(c1, 0.3, {autoAlpha:1});  
      TweenLite.to(uberx, 0.3, {autoAlpha:1});
      TweenLite.to([taxi,uberxl,suv,black], 0.3, {autoAlpha:0});  
      TweenLite.to(blue, 0, {autoAlpha:0}); 
      TweenLite.to(grey, 0.3, {autoAlpha:1});  
      });

    // supersize cars

    $('#c1').click(function(e) {
      TweenLite.to([c1,c3,c4,c5,c6], 0.3, {autoAlpha:0});
      TweenLite.to(c2, 0.1, {autoAlpha:1}); 
      TweenLite.to(c2, 0.1, {scale:1.2});
      TweenLite.to(grey, 0, {autoAlpha:0});
      TweenLite.to(blue, 0, {autoAlpha:1});
      TweenLite.to(uberxl, 0.3, {autoAlpha:1});
      TweenLite.to([uberx,taxi,suv,black], 0.3, {autoAlpha:0});
      });

    $('#c3').click(function(e) {
      TweenLite.to([c1,c2,c3,c5,c6], 0.3, {autoAlpha:0});
      TweenLite.to(c4, 0.1, {autoAlpha:1}); 
      TweenLite.to(c4, 0.1, {scale:1.2});
      TweenLite.to(grey, 0, {autoAlpha:0});
      TweenLite.to(blue, 0, {autoAlpha:1});  
      TweenLite.to([uberx,uberxl,suv,black,taxi], 0.3, {autoAlpha:0}); 
      });

    $('#c5').click(function(e) {
      TweenLite.to([c1,c2,c3,c4,c5], 0.3, {autoAlpha:0});
      TweenLite.to(c6, 0.1, {autoAlpha:1}); 
      TweenLite.to(c6, 0.1, {scale:1.2});
      TweenLite.to(grey, 0, {autoAlpha:0});
      TweenLite.to(blue, 0, {autoAlpha:1});  
      TweenLite.to(suv, 0.3, {autoAlpha:1});
      TweenLite.to([uberx,uberxl,taxi,black], 0.3, {autoAlpha:0}); 
      });

    // unsupersize cars
    $('#c2').click(function(e) {
      TweenLite.to([c2,c3,c4,c5,c6], 0.3, {autoAlpha:0});
      TweenLite.to(c1, 0.1, {autoAlpha:1}); 
      TweenLite.to(c2, 0.1, {scale:1}); 
      TweenLite.to(grey, 0, {autoAlpha:1});
      TweenLite.to(blue, 0, {autoAlpha:0});
      TweenLite.to(uberx, 0.3, {autoAlpha:1});
      TweenLite.to([uberxl,suv,black,taxi], 0.3, {autoAlpha:0});  
      });

    $('#c4').click(function(e) {
      TweenLite.to([c1,c2,c4,c5,c6], 0.3, {autoAlpha:0});
      TweenLite.to(c3, 0.1, {autoAlpha:1}); 
      TweenLite.to(c4, 0.1, {scale:1});
      TweenLite.to(grey, 0, {autoAlpha:1});
      TweenLite.to(blue, 0, {autoAlpha:0});  
      TweenLite.to(taxi, 0.3, {autoAlpha:1});
      TweenLite.to([uberx,uberxl,suv,black], 0.3, {autoAlpha:0});  
      });

    $('#c6').click(function(e) {
      TweenLite.to([c1,c2,c3,c4,c6], 0.3, {autoAlpha:0});
      TweenLite.to(c5, 0.1, {autoAlpha:1}); 
      TweenLite.to(c6, 0.1, {scale:1});
      TweenLite.to(grey, 0, {autoAlpha:1});
      TweenLite.to(blue, 0, {autoAlpha:0}); 
      TweenLite.to(black, 0.3, {autoAlpha:1});
      TweenLite.to([uberx,uberxl,suv,taxi], 0.3, {autoAlpha:0});   
      });


  // screen 1 highlighting cab button
    $('#grey').click(function(e) {
      //turn off/on other buttons and text
      TweenLite.to(blue, 0.1, {autoAlpha:1, ease: "easeOutQuart"});
      TweenLite.to(grey, 0.1, {autoAlpha:0, ease: "easeOutQuart"});
});

  // screen 2 clicks 
    $('#driver_info').click(function(e) {
      if (state < 5) {
        TweenLite.to(driver, 0.5, {y:-222});
        state = 5;
      } else if(state === 5){
        TweenLite.to(driver, 0.5, {y:0});
        state = 0;
      }
      });

   // screen 3 history click
    $('#history_scroll_container').click(function(e) {
      if (state < 3) {
        TweenLite.to(history, 0.5, {y:0});
        TweenLite.to(options,0.5, {y:0});
        state = 3;
      } else if(state === 3){
        TweenLite.to(history, 0.5, {y:275});
        state = 0;
      }
      });

   // screen 3 option click
    $('#options').click(function(e) {
      if (state === 0) {
        TweenLite.to(options, 0.5, {y:268});
        state = 2;
      } else if(state === 2){
        TweenLite.to(options, 0.5, {y:0});
        state = 0;
      } else if (state === 3){
        TweenLite.to(options, 0.5, {y:268});
        TweenLite.to(history, 0.5, {y:275});
        state = 2;
      }
      });

   // screen 3 profile and stats
    $('#prof').click(function(e) {
        TweenLite.to(options, 0.5, {y:268});
        TweenLite.to(history, 0.5, {y:275});
        state = 3;
        });
});




