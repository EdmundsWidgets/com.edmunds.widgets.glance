/**
 * Created by Pavel_Karpovich on 06/11/2014.
 */
define(function() {
    return Slider = function () {
        "use strict";
        var controlsContainer,
            slider,
            sliderList,
            currentActive,
            mainSlider,
            firstSlider,
            lastSlider,
            containerWidth,
            containerHeight,
            stepWidth,
            stepHeight,
            counter = 0,
            counterSlider = 0;

        function init() {
            controlsContainer = document.querySelector('.slider-controls');
            slider = controlsContainer.querySelector('ul');
            sliderList = slider.querySelectorAll('li');
            currentActive = sliderList[0];
            firstSlider = sliderList[0];
            lastSlider = sliderList[2];
            mainSlider = document.querySelector('.slider-viewport');
            containerWidth = controlsContainer.offsetWidth;
            containerHeight = controlsContainer.offsetHeight;
            stepWidth = containerWidth / 3;
            stepHeight = containerHeight / 3;
            currentActive.classList.add('active');
            firstSlider.classList.add('first-element');
            lastSlider.classList.add('last-element');
            showMainSlider();
        }

        function switchActive() {
            currentActive.classList.remove('active');
            sliderList[counter].classList.add('active');
            currentActive = sliderList[counter];
            showMainSlider();
        }

        function showMainSlider() {
            mainSlider.innerHTML = currentActive.innerHTML;
        }

        function Slider() {
            init();
        }

        Slider.prototype = {
            constructor: Slider,
            moveLeft: function () {
                if (counter > 0 && currentActive.classList.contains('first-element')) {
                    counter--;
                    counterSlider--;
                    slider.style.left = -stepWidth * counterSlider - 5 * counterSlider + 'px';
                    currentActive.classList.remove('first-element');
                    sliderList[counter].classList.add('first-element');
                    currentActive.classList.remove('first-element');
                    sliderList[counter].classList.add('first-element');
                    sliderList[counter + 3].classList.remove('last-element');
                    sliderList[counter + 2].classList.add('last-element');
                    switchActive();
                } else if (counter > 0 && !currentActive.classList.contains('first-element')) {
                    counter--;
                    switchActive();
                }
            },
            moveRight: function () {
                if (counter < sliderList.length - 4 && currentActive.classList.contains('last-element')) {
                    counter++;
                    counterSlider++;
                    slider.style.left = -stepWidth * counterSlider - 5 * counterSlider + 'px';
                    currentActive.classList.remove('last-element');
                    sliderList[counter].classList.add('last-element');
                    sliderList[counter - 3].classList.remove('first-element');
                    sliderList[counter - 2].classList.add('first-element');
                    switchActive();
                } else if (counter < sliderList.length - 4 && !currentActive.classList.contains('last-element')) {
                    counter++;
                    switchActive();
                }
            },
            moveUp: function() {
                if (counter < sliderList.length - 4 && currentActive.classList.contains('last-element')) {
                    counter++;
                    counterSlider++;
                    slider.style.top = -stepHeight * counterSlider - 5 * counterSlider + 'px';
                    currentActive.classList.remove('last-element');
                    sliderList[counter].classList.add('last-element');
                    sliderList[counter-3].classList.remove('first-element');
                    sliderList[counter-2].classList.add('first-element');
                    switchActive();
                } else if (counter < sliderList.length - 4 && !currentActive.classList.contains('last-element')) {
                    counter++;
                    switchActive();
                }
            },
            moveDown: function() {
                if (counter > 0 && currentActive.classList.contains('first-element')) {
                    counter--;
                    counterSlider--;
                    slider.style.top = -stepHeight * counterSlider - 5 * counterSlider + 'px';
                    currentActive.classList.remove('first-element');
                    sliderList[counter].classList.add('first-element');
                    currentActive.classList.remove('first-element');
                    sliderList[counter].classList.add('first-element');
                    sliderList[counter+3].classList.remove('last-element');
                    sliderList[counter+2].classList.add('last-element');
                    switchActive();
                } else if (counter > 0 && !currentActive.classList.contains('first-element')) {
                    counter--;
                    switchActive();
                }
            },
            onClickChange: function(e) {
                var target = e.currentTarget;
                if (currentActive.classList.contains('last-element') && target.classList.contains('first-element')) {
                    counter -= 2;
                } else if (currentActive.classList.contains('first-element') && target.classList.contains('last-element')) {
                    counter += 2;
                } else if (target.classList.contains('last-element') && target.previousSibling.classList.contains('active') || currentActive.classList.contains('first-element') && !target.classList.contains('active')) {
                    counter++;
                } else if (target.classList.contains('first-element') && target.nextSibling.classList.contains('active') || currentActive.classList.contains('last-element') && !target.classList.contains('active')) {
                    counter--;
                }
                console.log(counter);
                switchActive();
            },
            resetSlider: function() {
                controlsContainer = document.querySelector('.slider-controls');
                slider = controlsContainer.querySelector('ul');
                sliderList = slider.querySelectorAll('li');
                currentActive = sliderList[0];
                firstSlider = sliderList[0];
                lastSlider = sliderList[2];
                counter = 0;
                counterSlider = 0;
                currentActive.classList.add('active');
                firstSlider.classList.add('first-element');
                lastSlider.classList.add('last-element');
                showMainSlider();
            }
        };
        return new Slider();
    };
});