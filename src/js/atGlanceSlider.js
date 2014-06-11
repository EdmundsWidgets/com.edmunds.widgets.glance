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
            containerWidth,
            containerHeight,
            stepWidth,
            stepHeight,
            counter = 0;

        function init() {
            controlsContainer = document.querySelector('.slider-controls');
            slider = controlsContainer.querySelector('ul');
            sliderList = slider.querySelectorAll('li');
            currentActive = sliderList[0];
            mainSlider = document.querySelector('.slider-viewport');
            containerWidth = controlsContainer.offsetWidth;
            containerHeight = controlsContainer.offsetHeight;
            stepWidth = containerWidth / 3;
            stepHeight = containerHeight / 3;
            currentActive.classList.add('active');
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
                if (counter < sliderList.length - 4) {
                    counter++;
                    slider.style.left = -stepWidth * counter - 5 * counter + 'px';
                    switchActive();
                }
            },
            moveRight: function () {
                if (counter > 0) {
                    counter--;
                    slider.style.left = -stepWidth * counter - 5 * counter + 'px';
                    switchActive();
                }
            },
            moveUp: function() {
                if (counter < sliderList.length - 4) {
                    counter++;
                    slider.style.top = -stepHeight * counter - 5 * counter + 'px';
                    switchActive();
                }
            },
            moveDown: function() {
                if (counter > 0) {
                    counter--;
                    slider.style.top = -stepHeight * counter - 5 * counter + 'px';
                    switchActive();
                }
            }
        };
        return new Slider();
    };
});