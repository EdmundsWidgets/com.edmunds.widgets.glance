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
            console.log(stepHeight)
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
                if (counter < sliderList.length - 4 && currentActive.classList.contains('last-element')) {
                    counter++;
                    counterSlider++;
                    slider.style.left = -stepWidth * counterSlider - 5 * counterSlider + 'px';
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
            moveRight: function () {
                if (counter > 0 && currentActive.classList.contains('first-element')) {
                    counter--;
                    counterSlider--;
                    slider.style.left = -stepWidth * counterSlider - 5 * counterSlider + 'px';
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
            }
        };
        return new Slider();
    };
});