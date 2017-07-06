﻿
 <style type="text/css">
 .modal-body {
    position: relative;
    padding: 0px;
}
/*.wrap {
     width: 100%;
}

.wrap table {
    width: 100%;
	
    table-layout: fixed;
}

table tr td {

    border: 1px solid #eee;
    width: 100px;
   
}

table.head tr td {
    background: #eee;
}*/


#overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    filter:alpha(opacity=50);
    -moz-opacity:0.5;
    -khtml-opacity: 0.5;
    opacity: 0.8;
    z-index: 900;
}
body
{
background-color:#FFFFFF;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.popups-cont {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: -10;
  position: fixed;
  left: 0;
  right:-10px;
  top: 0;
  width: 120%;
  height: 100vh;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  pointer-events: none;
  -webkit-transition: z-index 0s 0.8s;
  transition: z-index 0s 0.8s;
  margin-left:-30px;
}

.popups-cont.s--popup-active {
  z-index: 1000;
  pointer-events: auto;
  -webkit-transition: z-index 0s 0s;
  transition: z-index 0s 0s;
}

.popups-cont__overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}

.popups-cont.s--popup-active .popups-cont__overlay {
  opacity: 1;
  -webkit-transition: opacity 0.35s 0.35s;
  transition: opacity 0.35s 0.35s;
}

.popup {
  z-index: 1000;
  position: relative;
  width: 70%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
    overflow-x: hidden;
	  overflow-y: scroll;
  
}
.popup .popup__piece:nth-child(1) {
  height: 20.66667%;
  width: 18.66667%;
}

.popup .popup__piece:nth-child(1) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(22vw, 13vh, -496px) rotateX(472deg) rotateY(388deg);
  transform: translate3d(22vw, 13vh, -496px) rotateX(472deg) rotateY(388deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 56% 100%);
  clip-path: polygon(0 0, 0 100%, 56% 100%);
}

.popup .popup__piece:nth-child(1) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-20vw, -10vh, -245px) rotateX(204deg) rotateY(458deg);
  transform: translate3d(-20vw, -10vh, -245px) rotateX(204deg) rotateY(458deg);
  -webkit-clip-path: polygon(0 0, 56% 100%, 100% 0);
  clip-path: polygon(0 0, 56% 100%, 100% 0);
}

.popup .popup__piece:nth-child(1) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(26vw, -41vh, -775px) rotateX(220deg) rotateY(175deg);
  transform: translate3d(26vw, -41vh, -775px) rotateX(220deg) rotateY(175deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 56% 100%);
  clip-path: polygon(100% 0, 100% 100%, 56% 100%);
}

.popup.s--closed .popup__piece:nth-child(1) {
  -webkit-transform: translate3d(0, 134vh, 0);
  transform: translate3d(0, 134vh, 0);
}

.popup.s--closed .popup__piece:nth-child(1) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(63vw, 0, 0) rotateX(435deg) rotateY(267deg);
  transform: translate3d(63vw, 0, 0) rotateX(435deg) rotateY(267deg);
}

.popup.s--closed .popup__piece:nth-child(1) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-74vw, 0, 0) rotateX(466deg) rotateY(380deg);
  transform: translate3d(-74vw, 0, 0) rotateX(466deg) rotateY(380deg);
}

.popup.s--closed .popup__piece:nth-child(1) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-45vw, 0, 0) rotateX(301deg) rotateY(124deg);
  transform: translate3d(-45vw, 0, 0) rotateX(301deg) rotateY(124deg);
}

.popup .popup__piece:nth-child(2) {
  height: 20.66667%;
  width: 19.66667%;
}

.popup .popup__piece:nth-child(2) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(27vw, -23vh, -348px) rotateX(324deg) rotateY(215deg);
  transform: translate3d(27vw, -23vh, -348px) rotateX(324deg) rotateY(215deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 48% 100%);
  clip-path: polygon(0 0, 0 100%, 48% 100%);
}

.popup .popup__piece:nth-child(2) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(3vw, 18vh, -755px) rotateX(280deg) rotateY(403deg);
  transform: translate3d(3vw, 18vh, -755px) rotateX(280deg) rotateY(403deg);
  -webkit-clip-path: polygon(0 0, 48% 100%, 100% 0);
  clip-path: polygon(0 0, 48% 100%, 100% 0);
}

.popup .popup__piece:nth-child(2) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(54vw, -25vh, 241px) rotateX(331deg) rotateY(422deg);
  transform: translate3d(54vw, -25vh, 241px) rotateX(331deg) rotateY(422deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 48% 100%);
  clip-path: polygon(100% 0, 100% 100%, 48% 100%);
}

.popup.s--closed .popup__piece:nth-child(2) {
  -webkit-transform: translate3d(0, 145vh, 0);
  transform: translate3d(0, 145vh, 0);
}

.popup.s--closed .popup__piece:nth-child(2) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-55vw, 0, 0) rotateX(155deg) rotateY(331deg);
  transform: translate3d(-55vw, 0, 0) rotateX(155deg) rotateY(331deg);
}

.popup.s--closed .popup__piece:nth-child(2) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-41vw, 0, 0) rotateX(400deg) rotateY(478deg);
  transform: translate3d(-41vw, 0, 0) rotateX(400deg) rotateY(478deg);
}

.popup.s--closed .popup__piece:nth-child(2) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(70vw, 0, 0) rotateX(472deg) rotateY(415deg);
  transform: translate3d(70vw, 0, 0) rotateX(472deg) rotateY(415deg);
}

.popup .popup__piece:nth-child(3) {
  height: 20.66667%;
  width: 14.66667%;
}

.popup .popup__piece:nth-child(3) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-53vw, -14vh, 328px) rotateX(211deg) rotateY(169deg);
  transform: translate3d(-53vw, -14vh, 328px) rotateX(211deg) rotateY(169deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 37% 100%);
  clip-path: polygon(0 0, 0 100%, 37% 100%);
}

.popup .popup__piece:nth-child(3) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-39vw, 24vh, -580px) rotateX(126deg) rotateY(262deg);
  transform: translate3d(-39vw, 24vh, -580px) rotateX(126deg) rotateY(262deg);
  -webkit-clip-path: polygon(0 0, 37% 100%, 100% 0);
  clip-path: polygon(0 0, 37% 100%, 100% 0);
}

.popup .popup__piece:nth-child(3) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-26vw, 53vh, 198px) rotateX(473deg) rotateY(292deg);
  transform: translate3d(-26vw, 53vh, 198px) rotateX(473deg) rotateY(292deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 37% 100%);
  clip-path: polygon(100% 0, 100% 100%, 37% 100%);
}

.popup.s--closed .popup__piece:nth-child(3) {
  -webkit-transform: translate3d(0, 103vh, 0);
  transform: translate3d(0, 103vh, 0);
}

.popup.s--closed .popup__piece:nth-child(3) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-49vw, 0, 0) rotateX(340deg) rotateY(283deg);
  transform: translate3d(-49vw, 0, 0) rotateX(340deg) rotateY(283deg);
}

.popup.s--closed .popup__piece:nth-child(3) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(74vw, 0, 0) rotateX(436deg) rotateY(208deg);
  transform: translate3d(74vw, 0, 0) rotateX(436deg) rotateY(208deg);
}

.popup.s--closed .popup__piece:nth-child(3) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-34vw, 0, 0) rotateX(317deg) rotateY(308deg);
  transform: translate3d(-34vw, 0, 0) rotateX(317deg) rotateY(308deg);
}

.popup .popup__piece:nth-child(4) {
  height: 20.66667%;
  width: 20.66667%;
}

.popup .popup__piece:nth-child(4) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(14vw, -42vh, 601px) rotateX(151deg) rotateY(186deg);
  transform: translate3d(14vw, -42vh, 601px) rotateX(151deg) rotateY(186deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 34% 100%);
  clip-path: polygon(0 0, 0 100%, 34% 100%);
}

.popup .popup__piece:nth-child(4) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-11vw, -37vh, -899px) rotateX(169deg) rotateY(300deg);
  transform: translate3d(-11vw, -37vh, -899px) rotateX(169deg) rotateY(300deg);
  -webkit-clip-path: polygon(0 0, 34% 100%, 100% 0);
  clip-path: polygon(0 0, 34% 100%, 100% 0);
}

.popup .popup__piece:nth-child(4) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-50vw, 19vh, 438px) rotateX(431deg) rotateY(283deg);
  transform: translate3d(-50vw, 19vh, 438px) rotateX(431deg) rotateY(283deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 34% 100%);
  clip-path: polygon(100% 0, 100% 100%, 34% 100%);
}

.popup.s--closed .popup__piece:nth-child(4) {
  -webkit-transform: translate3d(0, 111vh, 0);
  transform: translate3d(0, 111vh, 0);
}

.popup.s--closed .popup__piece:nth-child(4) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-48vw, 0, 0) rotateX(335deg) rotateY(441deg);
  transform: translate3d(-48vw, 0, 0) rotateX(335deg) rotateY(441deg);
}

.popup.s--closed .popup__piece:nth-child(4) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(48vw, 0, 0) rotateX(450deg) rotateY(368deg);
  transform: translate3d(48vw, 0, 0) rotateX(450deg) rotateY(368deg);
}

.popup.s--closed .popup__piece:nth-child(4) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(44vw, 0, 0) rotateX(203deg) rotateY(152deg);
  transform: translate3d(44vw, 0, 0) rotateX(203deg) rotateY(152deg);
}

.popup .popup__piece:nth-child(5) {
  height: 20.66667%;
  width: 6.66667%;
}

.popup .popup__piece:nth-child(5) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-9vw, 17vh, -886px) rotateX(138deg) rotateY(396deg);
  transform: translate3d(-9vw, 17vh, -886px) rotateX(138deg) rotateY(396deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 31% 100%);
  clip-path: polygon(0 0, 0 100%, 31% 100%);
}

.popup .popup__piece:nth-child(5) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(9vw, -15vh, -820px) rotateX(338deg) rotateY(300deg);
  transform: translate3d(9vw, -15vh, -820px) rotateX(338deg) rotateY(300deg);
  -webkit-clip-path: polygon(0 0, 31% 100%, 100% 0);
  clip-path: polygon(0 0, 31% 100%, 100% 0);
}

.popup .popup__piece:nth-child(5) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-7vw, 29vh, -578px) rotateX(314deg) rotateY(149deg);
  transform: translate3d(-7vw, 29vh, -578px) rotateX(314deg) rotateY(149deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 31% 100%);
  clip-path: polygon(100% 0, 100% 100%, 31% 100%);
}

.popup.s--closed .popup__piece:nth-child(5) {
  -webkit-transform: translate3d(0, 114vh, 0);
  transform: translate3d(0, 114vh, 0);
}

.popup.s--closed .popup__piece:nth-child(5) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-63vw, 0, 0) rotateX(275deg) rotateY(321deg);
  transform: translate3d(-63vw, 0, 0) rotateX(275deg) rotateY(321deg);
}

.popup.s--closed .popup__piece:nth-child(5) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(58vw, 0, 0) rotateX(228deg) rotateY(459deg);
  transform: translate3d(58vw, 0, 0) rotateX(228deg) rotateY(459deg);
}

.popup.s--closed .popup__piece:nth-child(5) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-27vw, 0, 0) rotateX(367deg) rotateY(258deg);
  transform: translate3d(-27vw, 0, 0) rotateX(367deg) rotateY(258deg);
}

.popup .popup__piece:nth-child(6) {
  height: 20.66667%;
  width: 19.66667%;
}

.popup .popup__piece:nth-child(6) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-27vw, -23vh, 493px) rotateX(294deg) rotateY(415deg);
  transform: translate3d(-27vw, -23vh, 493px) rotateX(294deg) rotateY(415deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 62% 100%);
  clip-path: polygon(0 0, 0 100%, 62% 100%);
}

.popup .popup__piece:nth-child(6) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(55vw, -17vh, -327px) rotateX(330deg) rotateY(452deg);
  transform: translate3d(55vw, -17vh, -327px) rotateX(330deg) rotateY(452deg);
  -webkit-clip-path: polygon(0 0, 62% 100%, 100% 0);
  clip-path: polygon(0 0, 62% 100%, 100% 0);
}

.popup .popup__piece:nth-child(6) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(36vw, 7vh, 625px) rotateX(256deg) rotateY(428deg);
  transform: translate3d(36vw, 7vh, 625px) rotateX(256deg) rotateY(428deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 62% 100%);
  clip-path: polygon(100% 0, 100% 100%, 62% 100%);
}

.popup.s--closed .popup__piece:nth-child(6) {
  -webkit-transform: translate3d(0, 135vh, 0);
  transform: translate3d(0, 135vh, 0);
}

.popup.s--closed .popup__piece:nth-child(6) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-66vw, 0, 0) rotateX(318deg) rotateY(459deg);
  transform: translate3d(-66vw, 0, 0) rotateX(318deg) rotateY(459deg);
}

.popup.s--closed .popup__piece:nth-child(6) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-51vw, 0, 0) rotateX(407deg) rotateY(293deg);
  transform: translate3d(-51vw, 0, 0) rotateX(407deg) rotateY(293deg);
}

.popup.s--closed .popup__piece:nth-child(6) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-19vw, 0, 0) rotateX(179deg) rotateY(206deg);
  transform: translate3d(-19vw, 0, 0) rotateX(179deg) rotateY(206deg);
}

.popup .popup__piece:nth-child(7) {
  height: 14.66667%;
  width: 20.66667%;
}

.popup .popup__piece:nth-child(7) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-39vw, 27vh, -627px) rotateX(147deg) rotateY(281deg);
  transform: translate3d(-39vw, 27vh, -627px) rotateX(147deg) rotateY(281deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 38% 100%);
  clip-path: polygon(0 0, 0 100%, 38% 100%);
}

.popup .popup__piece:nth-child(7) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-15vw, 36vh, -262px) rotateX(422deg) rotateY(182deg);
  transform: translate3d(-15vw, 36vh, -262px) rotateX(422deg) rotateY(182deg);
  -webkit-clip-path: polygon(0 0, 38% 100%, 100% 0);
  clip-path: polygon(0 0, 38% 100%, 100% 0);
}

.popup .popup__piece:nth-child(7) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(38vw, 16vh, 464px) rotateX(435deg) rotateY(191deg);
  transform: translate3d(38vw, 16vh, 464px) rotateX(435deg) rotateY(191deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 38% 100%);
  clip-path: polygon(100% 0, 100% 100%, 38% 100%);
}

.popup.s--closed .popup__piece:nth-child(7) {
  -webkit-transform: translate3d(0, 142vh, 0);
  transform: translate3d(0, 142vh, 0);
}

.popup.s--closed .popup__piece:nth-child(7) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(49vw, 0, 0) rotateX(441deg) rotateY(131deg);
  transform: translate3d(49vw, 0, 0) rotateX(441deg) rotateY(131deg);
}

.popup.s--closed .popup__piece:nth-child(7) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-52vw, 0, 0) rotateX(314deg) rotateY(344deg);
  transform: translate3d(-52vw, 0, 0) rotateX(314deg) rotateY(344deg);
}

.popup.s--closed .popup__piece:nth-child(7) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-33vw, 0, 0) rotateX(277deg) rotateY(190deg);
  transform: translate3d(-33vw, 0, 0) rotateX(277deg) rotateY(190deg);
}

.popup .popup__piece:nth-child(8) {
  height: 14.66667%;
  width: 13.66667%;
}

.popup .popup__piece:nth-child(8) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-58vw, 6vh, 720px) rotateX(348deg) rotateY(376deg);
  transform: translate3d(-58vw, 6vh, 720px) rotateX(348deg) rotateY(376deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 39% 100%);
  clip-path: polygon(0 0, 0 100%, 39% 100%);
}

.popup .popup__piece:nth-child(8) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-7vw, 55vh, 264px) rotateX(171deg) rotateY(399deg);
  transform: translate3d(-7vw, 55vh, 264px) rotateX(171deg) rotateY(399deg);
  -webkit-clip-path: polygon(0 0, 39% 100%, 100% 0);
  clip-path: polygon(0 0, 39% 100%, 100% 0);
}

.popup .popup__piece:nth-child(8) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-7vw, -57vh, -512px) rotateX(262deg) rotateY(214deg);
  transform: translate3d(-7vw, -57vh, -512px) rotateX(262deg) rotateY(214deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 39% 100%);
  clip-path: polygon(100% 0, 100% 100%, 39% 100%);
}

.popup.s--closed .popup__piece:nth-child(8) {
  -webkit-transform: translate3d(0, 146vh, 0);
  transform: translate3d(0, 146vh, 0);
}

.popup.s--closed .popup__piece:nth-child(8) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-38vw, 0, 0) rotateX(468deg) rotateY(190deg);
  transform: translate3d(-38vw, 0, 0) rotateX(468deg) rotateY(190deg);
}

.popup.s--closed .popup__piece:nth-child(8) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(0vw, 0, 0) rotateX(224deg) rotateY(308deg);
  transform: translate3d(0vw, 0, 0) rotateX(224deg) rotateY(308deg);
}

.popup.s--closed .popup__piece:nth-child(8) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(63vw, 0, 0) rotateX(319deg) rotateY(318deg);
  transform: translate3d(63vw, 0, 0) rotateX(319deg) rotateY(318deg);
}

.popup .popup__piece:nth-child(9) {
  height: 14.66667%;
  width: 12.66667%;
}

.popup .popup__piece:nth-child(9) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-23vw, -22vh, 97px) rotateX(208deg) rotateY(122deg);
  transform: translate3d(-23vw, -22vh, 97px) rotateX(208deg) rotateY(122deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 54% 100%);
  clip-path: polygon(0 0, 0 100%, 54% 100%);
}

.popup .popup__piece:nth-child(9) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(45vw, 41vh, 54px) rotateX(358deg) rotateY(414deg);
  transform: translate3d(45vw, 41vh, 54px) rotateX(358deg) rotateY(414deg);
  -webkit-clip-path: polygon(0 0, 54% 100%, 100% 0);
  clip-path: polygon(0 0, 54% 100%, 100% 0);
}

.popup .popup__piece:nth-child(9) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-15vw, 53vh, -473px) rotateX(180deg) rotateY(379deg);
  transform: translate3d(-15vw, 53vh, -473px) rotateX(180deg) rotateY(379deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 54% 100%);
  clip-path: polygon(100% 0, 100% 100%, 54% 100%);
}

.popup.s--closed .popup__piece:nth-child(9) {
  -webkit-transform: translate3d(0, 129vh, 0);
  transform: translate3d(0, 129vh, 0);
}

.popup.s--closed .popup__piece:nth-child(9) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(59vw, 0, 0) rotateX(477deg) rotateY(133deg);
  transform: translate3d(59vw, 0, 0) rotateX(477deg) rotateY(133deg);
}

.popup.s--closed .popup__piece:nth-child(9) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-57vw, 0, 0) rotateX(451deg) rotateY(201deg);
  transform: translate3d(-57vw, 0, 0) rotateX(451deg) rotateY(201deg);
}

.popup.s--closed .popup__piece:nth-child(9) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(32vw, 0, 0) rotateX(243deg) rotateY(196deg);
  transform: translate3d(32vw, 0, 0) rotateX(243deg) rotateY(196deg);
}

.popup .popup__piece:nth-child(10) {
  height: 14.66667%;
  width: 18.66667%;
}

.popup .popup__piece:nth-child(10) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(56vw, 49vh, 308px) rotateX(190deg) rotateY(408deg);
  transform: translate3d(56vw, 49vh, 308px) rotateX(190deg) rotateY(408deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 51% 100%);
  clip-path: polygon(0 0, 0 100%, 51% 100%);
}

.popup .popup__piece:nth-child(10) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-4vw, 53vh, 757px) rotateX(407deg) rotateY(272deg);
  transform: translate3d(-4vw, 53vh, 757px) rotateX(407deg) rotateY(272deg);
  -webkit-clip-path: polygon(0 0, 51% 100%, 100% 0);
  clip-path: polygon(0 0, 51% 100%, 100% 0);
}

.popup .popup__piece:nth-child(10) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(37vw, -21vh, -407px) rotateX(262deg) rotateY(429deg);
  transform: translate3d(37vw, -21vh, -407px) rotateX(262deg) rotateY(429deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 51% 100%);
  clip-path: polygon(100% 0, 100% 100%, 51% 100%);
}

.popup.s--closed .popup__piece:nth-child(10) {
  -webkit-transform: translate3d(0, 140vh, 0);
  transform: translate3d(0, 140vh, 0);
}

.popup.s--closed .popup__piece:nth-child(10) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(29vw, 0, 0) rotateX(439deg) rotateY(197deg);
  transform: translate3d(29vw, 0, 0) rotateX(439deg) rotateY(197deg);
}

.popup.s--closed .popup__piece:nth-child(10) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-67vw, 0, 0) rotateX(339deg) rotateY(280deg);
  transform: translate3d(-67vw, 0, 0) rotateX(339deg) rotateY(280deg);
}

.popup.s--closed .popup__piece:nth-child(10) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(53vw, 0, 0) rotateX(356deg) rotateY(187deg);
  transform: translate3d(53vw, 0, 0) rotateX(356deg) rotateY(187deg);
}

.popup .popup__piece:nth-child(11) {
  height: 14.66667%;
  width: 17.66667%;
}

.popup .popup__piece:nth-child(11) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(40vw, 2vh, -608px) rotateX(305deg) rotateY(316deg);
  transform: translate3d(40vw, 2vh, -608px) rotateX(305deg) rotateY(316deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 49% 100%);
  clip-path: polygon(0 0, 0 100%, 49% 100%);
}

.popup .popup__piece:nth-child(11) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-12vw, 11vh, 517px) rotateX(150deg) rotateY(200deg);
  transform: translate3d(-12vw, 11vh, 517px) rotateX(150deg) rotateY(200deg);
  -webkit-clip-path: polygon(0 0, 49% 100%, 100% 0);
  clip-path: polygon(0 0, 49% 100%, 100% 0);
}

.popup .popup__piece:nth-child(11) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-22vw, 31vh, 794px) rotateX(276deg) rotateY(382deg);
  transform: translate3d(-22vw, 31vh, 794px) rotateX(276deg) rotateY(382deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 49% 100%);
  clip-path: polygon(100% 0, 100% 100%, 49% 100%);
}

.popup.s--closed .popup__piece:nth-child(11) {
  -webkit-transform: translate3d(0, 145vh, 0);
  transform: translate3d(0, 145vh, 0);
}

.popup.s--closed .popup__piece:nth-child(11) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-37vw, 0, 0) rotateX(457deg) rotateY(409deg);
  transform: translate3d(-37vw, 0, 0) rotateX(457deg) rotateY(409deg);
}

.popup.s--closed .popup__piece:nth-child(11) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-23vw, 0, 0) rotateX(435deg) rotateY(366deg);
  transform: translate3d(-23vw, 0, 0) rotateX(435deg) rotateY(366deg);
}

.popup.s--closed .popup__piece:nth-child(11) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(9vw, 0, 0) rotateX(224deg) rotateY(331deg);
  transform: translate3d(9vw, 0, 0) rotateX(224deg) rotateY(331deg);
}

.popup .popup__piece:nth-child(12) {
  height: 14.66667%;
  width: 16.66667%;
}

.popup .popup__piece:nth-child(12) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(58vw, 38vh, 274px) rotateX(313deg) rotateY(162deg);
  transform: translate3d(58vw, 38vh, 274px) rotateX(313deg) rotateY(162deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 33% 100%);
  clip-path: polygon(0 0, 0 100%, 33% 100%);
}

.popup .popup__piece:nth-child(12) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-18vw, 42vh, 704px) rotateX(454deg) rotateY(176deg);
  transform: translate3d(-18vw, 42vh, 704px) rotateX(454deg) rotateY(176deg);
  -webkit-clip-path: polygon(0 0, 33% 100%, 100% 0);
  clip-path: polygon(0 0, 33% 100%, 100% 0);
}

.popup .popup__piece:nth-child(12) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(46vw, 54vh, 459px) rotateX(433deg) rotateY(383deg);
  transform: translate3d(46vw, 54vh, 459px) rotateX(433deg) rotateY(383deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 33% 100%);
  clip-path: polygon(100% 0, 100% 100%, 33% 100%);
}

.popup.s--closed .popup__piece:nth-child(12) {
  -webkit-transform: translate3d(0, 149vh, 0);
  transform: translate3d(0, 149vh, 0);
}

.popup.s--closed .popup__piece:nth-child(12) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-19vw, 0, 0) rotateX(381deg) rotateY(156deg);
  transform: translate3d(-19vw, 0, 0) rotateX(381deg) rotateY(156deg);
}

.popup.s--closed .popup__piece:nth-child(12) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(16vw, 0, 0) rotateX(370deg) rotateY(225deg);
  transform: translate3d(16vw, 0, 0) rotateX(370deg) rotateY(225deg);
}

.popup.s--closed .popup__piece:nth-child(12) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(20vw, 0, 0) rotateX(250deg) rotateY(282deg);
  transform: translate3d(20vw, 0, 0) rotateX(250deg) rotateY(282deg);
}

.popup .popup__piece:nth-child(13) {
  height: 16.66667%;
  width: 12.66667%;
}

.popup .popup__piece:nth-child(13) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-19vw, 28vh, 872px) rotateX(318deg) rotateY(430deg);
  transform: translate3d(-19vw, 28vh, 872px) rotateX(318deg) rotateY(430deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 41% 100%);
  clip-path: polygon(0 0, 0 100%, 41% 100%);
}

.popup .popup__piece:nth-child(13) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-33vw, -3vh, 45px) rotateX(356deg) rotateY(168deg);
  transform: translate3d(-33vw, -3vh, 45px) rotateX(356deg) rotateY(168deg);
  -webkit-clip-path: polygon(0 0, 41% 100%, 100% 0);
  clip-path: polygon(0 0, 41% 100%, 100% 0);
}

.popup .popup__piece:nth-child(13) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(46vw, 10vh, -34px) rotateX(241deg) rotateY(189deg);
  transform: translate3d(46vw, 10vh, -34px) rotateX(241deg) rotateY(189deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 41% 100%);
  clip-path: polygon(100% 0, 100% 100%, 41% 100%);
}

.popup.s--closed .popup__piece:nth-child(13) {
  -webkit-transform: translate3d(0, 125vh, 0);
  transform: translate3d(0, 125vh, 0);
}

.popup.s--closed .popup__piece:nth-child(13) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-55vw, 0, 0) rotateX(323deg) rotateY(227deg);
  transform: translate3d(-55vw, 0, 0) rotateX(323deg) rotateY(227deg);
}

.popup.s--closed .popup__piece:nth-child(13) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(29vw, 0, 0) rotateX(316deg) rotateY(436deg);
  transform: translate3d(29vw, 0, 0) rotateX(316deg) rotateY(436deg);
}

.popup.s--closed .popup__piece:nth-child(13) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-29vw, 0, 0) rotateX(334deg) rotateY(233deg);
  transform: translate3d(-29vw, 0, 0) rotateX(334deg) rotateY(233deg);
}

.popup .popup__piece:nth-child(14) {
  height: 16.66667%;
  width: 18.66667%;
}

.popup .popup__piece:nth-child(14) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-7vw, -56vh, -46px) rotateX(465deg) rotateY(302deg);
  transform: translate3d(-7vw, -56vh, -46px) rotateX(465deg) rotateY(302deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 60% 100%);
  clip-path: polygon(0 0, 0 100%, 60% 100%);
}

.popup .popup__piece:nth-child(14) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(33vw, -25vh, -323px) rotateX(395deg) rotateY(479deg);
  transform: translate3d(33vw, -25vh, -323px) rotateX(395deg) rotateY(479deg);
  -webkit-clip-path: polygon(0 0, 60% 100%, 100% 0);
  clip-path: polygon(0 0, 60% 100%, 100% 0);
}

.popup .popup__piece:nth-child(14) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(13vw, -16vh, 733px) rotateX(386deg) rotateY(166deg);
  transform: translate3d(13vw, -16vh, 733px) rotateX(386deg) rotateY(166deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 60% 100%);
  clip-path: polygon(100% 0, 100% 100%, 60% 100%);
}

.popup.s--closed .popup__piece:nth-child(14) {
  -webkit-transform: translate3d(0, 110vh, 0);
  transform: translate3d(0, 110vh, 0);
}

.popup.s--closed .popup__piece:nth-child(14) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(11vw, 0, 0) rotateX(422deg) rotateY(338deg);
  transform: translate3d(11vw, 0, 0) rotateX(422deg) rotateY(338deg);
}

.popup.s--closed .popup__piece:nth-child(14) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(69vw, 0, 0) rotateX(394deg) rotateY(450deg);
  transform: translate3d(69vw, 0, 0) rotateX(394deg) rotateY(450deg);
}

.popup.s--closed .popup__piece:nth-child(14) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-1vw, 0, 0) rotateX(324deg) rotateY(129deg);
  transform: translate3d(-1vw, 0, 0) rotateX(324deg) rotateY(129deg);
}

.popup .popup__piece:nth-child(15) {
  height: 16.66667%;
  width: 17.66667%;
}

.popup .popup__piece:nth-child(15) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-10vw, 45vh, -545px) rotateX(185deg) rotateY(345deg);
  transform: translate3d(-10vw, 45vh, -545px) rotateX(185deg) rotateY(345deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 46% 100%);
  clip-path: polygon(0 0, 0 100%, 46% 100%);
}

.popup .popup__piece:nth-child(15) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-51vw, -32vh, -603px) rotateX(297deg) rotateY(167deg);
  transform: translate3d(-51vw, -32vh, -603px) rotateX(297deg) rotateY(167deg);
  -webkit-clip-path: polygon(0 0, 46% 100%, 100% 0);
  clip-path: polygon(0 0, 46% 100%, 100% 0);
}

.popup .popup__piece:nth-child(15) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(32vw, 32vh, -624px) rotateX(272deg) rotateY(313deg);
  transform: translate3d(32vw, 32vh, -624px) rotateX(272deg) rotateY(313deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 46% 100%);
  clip-path: polygon(100% 0, 100% 100%, 46% 100%);
}

.popup.s--closed .popup__piece:nth-child(15) {
  -webkit-transform: translate3d(0, 146vh, 0);
  transform: translate3d(0, 146vh, 0);
}

.popup.s--closed .popup__piece:nth-child(15) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(34vw, 0, 0) rotateX(154deg) rotateY(329deg);
  transform: translate3d(34vw, 0, 0) rotateX(154deg) rotateY(329deg);
}

.popup.s--closed .popup__piece:nth-child(15) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(45vw, 0, 0) rotateX(136deg) rotateY(142deg);
  transform: translate3d(45vw, 0, 0) rotateX(136deg) rotateY(142deg);
}

.popup.s--closed .popup__piece:nth-child(15) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-58vw, 0, 0) rotateX(415deg) rotateY(323deg);
  transform: translate3d(-58vw, 0, 0) rotateX(415deg) rotateY(323deg);
}

.popup .popup__piece:nth-child(16) {
  height: 16.66667%;
  width: 20.66667%;
}

.popup .popup__piece:nth-child(16) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-26vw, 17vh, 439px) rotateX(345deg) rotateY(450deg);
  transform: translate3d(-26vw, 17vh, 439px) rotateX(345deg) rotateY(450deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 47% 100%);
  clip-path: polygon(0 0, 0 100%, 47% 100%);
}

.popup .popup__piece:nth-child(16) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(33vw, -14vh, 728px) rotateX(285deg) rotateY(164deg);
  transform: translate3d(33vw, -14vh, 728px) rotateX(285deg) rotateY(164deg);
  -webkit-clip-path: polygon(0 0, 47% 100%, 100% 0);
  clip-path: polygon(0 0, 47% 100%, 100% 0);
}

.popup .popup__piece:nth-child(16) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-58vw, -29vh, 401px) rotateX(175deg) rotateY(205deg);
  transform: translate3d(-58vw, -29vh, 401px) rotateX(175deg) rotateY(205deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 47% 100%);
  clip-path: polygon(100% 0, 100% 100%, 47% 100%);
}

.popup.s--closed .popup__piece:nth-child(16) {
  -webkit-transform: translate3d(0, 130vh, 0);
  transform: translate3d(0, 130vh, 0);
}

.popup.s--closed .popup__piece:nth-child(16) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(24vw, 0, 0) rotateX(148deg) rotateY(220deg);
  transform: translate3d(24vw, 0, 0) rotateX(148deg) rotateY(220deg);
}

.popup.s--closed .popup__piece:nth-child(16) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(34vw, 0, 0) rotateX(414deg) rotateY(289deg);
  transform: translate3d(34vw, 0, 0) rotateX(414deg) rotateY(289deg);
}

.popup.s--closed .popup__piece:nth-child(16) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(31vw, 0, 0) rotateX(351deg) rotateY(152deg);
  transform: translate3d(31vw, 0, 0) rotateX(351deg) rotateY(152deg);
}

.popup .popup__piece:nth-child(17) {
  height: 16.66667%;
  width: 15.66667%;
}

.popup .popup__piece:nth-child(17) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-29vw, -46vh, 597px) rotateX(434deg) rotateY(330deg);
  transform: translate3d(-29vw, -46vh, 597px) rotateX(434deg) rotateY(330deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 43% 100%);
  clip-path: polygon(0 0, 0 100%, 43% 100%);
}

.popup .popup__piece:nth-child(17) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-57vw, 58vh, 172px) rotateX(280deg) rotateY(230deg);
  transform: translate3d(-57vw, 58vh, 172px) rotateX(280deg) rotateY(230deg);
  -webkit-clip-path: polygon(0 0, 43% 100%, 100% 0);
  clip-path: polygon(0 0, 43% 100%, 100% 0);
}

.popup .popup__piece:nth-child(17) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(53vw, -4vh, -844px) rotateX(226deg) rotateY(257deg);
  transform: translate3d(53vw, -4vh, -844px) rotateX(226deg) rotateY(257deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 43% 100%);
  clip-path: polygon(100% 0, 100% 100%, 43% 100%);
}

.popup.s--closed .popup__piece:nth-child(17) {
  -webkit-transform: translate3d(0, 137vh, 0);
  transform: translate3d(0, 137vh, 0);
}

.popup.s--closed .popup__piece:nth-child(17) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(45vw, 0, 0) rotateX(231deg) rotateY(297deg);
  transform: translate3d(45vw, 0, 0) rotateX(231deg) rotateY(297deg);
}

.popup.s--closed .popup__piece:nth-child(17) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-20vw, 0, 0) rotateX(449deg) rotateY(380deg);
  transform: translate3d(-20vw, 0, 0) rotateX(449deg) rotateY(380deg);
}

.popup.s--closed .popup__piece:nth-child(17) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(45vw, 0, 0) rotateX(424deg) rotateY(372deg);
  transform: translate3d(45vw, 0, 0) rotateX(424deg) rotateY(372deg);
}

.popup .popup__piece:nth-child(18) {
  height: 16.66667%;
  width: 14.66667%;
}

.popup .popup__piece:nth-child(18) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(39vw, 38vh, 425px) rotateX(244deg) rotateY(336deg);
  transform: translate3d(39vw, 38vh, 425px) rotateX(244deg) rotateY(336deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 52% 100%);
  clip-path: polygon(0 0, 0 100%, 52% 100%);
}

.popup .popup__piece:nth-child(18) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-13vw, 18vh, -777px) rotateX(121deg) rotateY(374deg);
  transform: translate3d(-13vw, 18vh, -777px) rotateX(121deg) rotateY(374deg);
  -webkit-clip-path: polygon(0 0, 52% 100%, 100% 0);
  clip-path: polygon(0 0, 52% 100%, 100% 0);
}

.popup .popup__piece:nth-child(18) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(4vw, 53vh, 468px) rotateX(355deg) rotateY(355deg);
  transform: translate3d(4vw, 53vh, 468px) rotateX(355deg) rotateY(355deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 52% 100%);
  clip-path: polygon(100% 0, 100% 100%, 52% 100%);
}

.popup.s--closed .popup__piece:nth-child(18) {
  -webkit-transform: translate3d(0, 137vh, 0);
  transform: translate3d(0, 137vh, 0);
}

.popup.s--closed .popup__piece:nth-child(18) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(48vw, 0, 0) rotateX(294deg) rotateY(340deg);
  transform: translate3d(48vw, 0, 0) rotateX(294deg) rotateY(340deg);
}

.popup.s--closed .popup__piece:nth-child(18) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-56vw, 0, 0) rotateX(383deg) rotateY(266deg);
  transform: translate3d(-56vw, 0, 0) rotateX(383deg) rotateY(266deg);
}

.popup.s--closed .popup__piece:nth-child(18) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(77vw, 0, 0) rotateX(298deg) rotateY(297deg);
  transform: translate3d(77vw, 0, 0) rotateX(298deg) rotateY(297deg);
}

.popup .popup__piece:nth-child(19) {
  height: 20.66667%;
  width: 13.66667%;
}

.popup .popup__piece:nth-child(19) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-52vw, 60vh, 320px) rotateX(454deg) rotateY(165deg);
  transform: translate3d(-52vw, 60vh, 320px) rotateX(454deg) rotateY(165deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 70% 100%);
  clip-path: polygon(0 0, 0 100%, 70% 100%);
}

.popup .popup__piece:nth-child(19) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-41vw, 12vh, 235px) rotateX(462deg) rotateY(279deg);
  transform: translate3d(-41vw, 12vh, 235px) rotateX(462deg) rotateY(279deg);
  -webkit-clip-path: polygon(0 0, 70% 100%, 100% 0);
  clip-path: polygon(0 0, 70% 100%, 100% 0);
}

.popup .popup__piece:nth-child(19) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-36vw, -49vh, -361px) rotateX(386deg) rotateY(416deg);
  transform: translate3d(-36vw, -49vh, -361px) rotateX(386deg) rotateY(416deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 70% 100%);
  clip-path: polygon(100% 0, 100% 100%, 70% 100%);
}

.popup.s--closed .popup__piece:nth-child(19) {
  -webkit-transform: translate3d(0, 140vh, 0);
  transform: translate3d(0, 140vh, 0);
}

.popup.s--closed .popup__piece:nth-child(19) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(68vw, 0, 0) rotateX(122deg) rotateY(344deg);
  transform: translate3d(68vw, 0, 0) rotateX(122deg) rotateY(344deg);
}

.popup.s--closed .popup__piece:nth-child(19) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-17vw, 0, 0) rotateX(242deg) rotateY(246deg);
  transform: translate3d(-17vw, 0, 0) rotateX(242deg) rotateY(246deg);
}

.popup.s--closed .popup__piece:nth-child(19) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(11vw, 0, 0) rotateX(201deg) rotateY(324deg);
  transform: translate3d(11vw, 0, 0) rotateX(201deg) rotateY(324deg);
}

.popup .popup__piece:nth-child(20) {
  height: 20.66667%;
  width: 12.66667%;
}

.popup .popup__piece:nth-child(20) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-23vw, -43vh, 667px) rotateX(473deg) rotateY(226deg);
  transform: translate3d(-23vw, -43vh, 667px) rotateX(473deg) rotateY(226deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 37% 100%);
  clip-path: polygon(0 0, 0 100%, 37% 100%);
}

.popup .popup__piece:nth-child(20) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(50vw, 54vh, -19px) rotateX(418deg) rotateY(376deg);
  transform: translate3d(50vw, 54vh, -19px) rotateX(418deg) rotateY(376deg);
  -webkit-clip-path: polygon(0 0, 37% 100%, 100% 0);
  clip-path: polygon(0 0, 37% 100%, 100% 0);
}

.popup .popup__piece:nth-child(20) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-57vw, -12vh, 239px) rotateX(210deg) rotateY(269deg);
  transform: translate3d(-57vw, -12vh, 239px) rotateX(210deg) rotateY(269deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 37% 100%);
  clip-path: polygon(100% 0, 100% 100%, 37% 100%);
}

.popup.s--closed .popup__piece:nth-child(20) {
  -webkit-transform: translate3d(0, 138vh, 0);
  transform: translate3d(0, 138vh, 0);
}

.popup.s--closed .popup__piece:nth-child(20) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-7vw, 0, 0) rotateX(264deg) rotateY(437deg);
  transform: translate3d(-7vw, 0, 0) rotateX(264deg) rotateY(437deg);
}

.popup.s--closed .popup__piece:nth-child(20) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(1vw, 0, 0) rotateX(242deg) rotateY(331deg);
  transform: translate3d(1vw, 0, 0) rotateX(242deg) rotateY(331deg);
}

.popup.s--closed .popup__piece:nth-child(20) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(25vw, 0, 0) rotateX(347deg) rotateY(153deg);
  transform: translate3d(25vw, 0, 0) rotateX(347deg) rotateY(153deg);
}

.popup .popup__piece:nth-child(21) {
  height: 20.66667%;
  width: 12.66667%;
}

.popup .popup__piece:nth-child(21) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(33vw, -11vh, 419px) rotateX(169deg) rotateY(203deg);
  transform: translate3d(33vw, -11vh, 419px) rotateX(169deg) rotateY(203deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 68% 100%);
  clip-path: polygon(0 0, 0 100%, 68% 100%);
}

.popup .popup__piece:nth-child(21) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-4vw, -22vh, -783px) rotateX(228deg) rotateY(364deg);
  transform: translate3d(-4vw, -22vh, -783px) rotateX(228deg) rotateY(364deg);
  -webkit-clip-path: polygon(0 0, 68% 100%, 100% 0);
  clip-path: polygon(0 0, 68% 100%, 100% 0);
}

.popup .popup__piece:nth-child(21) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(59vw, -55vh, 154px) rotateX(364deg) rotateY(276deg);
  transform: translate3d(59vw, -55vh, 154px) rotateX(364deg) rotateY(276deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 68% 100%);
  clip-path: polygon(100% 0, 100% 100%, 68% 100%);
}

.popup.s--closed .popup__piece:nth-child(21) {
  -webkit-transform: translate3d(0, 128vh, 0);
  transform: translate3d(0, 128vh, 0);
}

.popup.s--closed .popup__piece:nth-child(21) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-29vw, 0, 0) rotateX(265deg) rotateY(198deg);
  transform: translate3d(-29vw, 0, 0) rotateX(265deg) rotateY(198deg);
}

.popup.s--closed .popup__piece:nth-child(21) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-36vw, 0, 0) rotateX(178deg) rotateY(146deg);
  transform: translate3d(-36vw, 0, 0) rotateX(178deg) rotateY(146deg);
}

.popup.s--closed .popup__piece:nth-child(21) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(23vw, 0, 0) rotateX(189deg) rotateY(341deg);
  transform: translate3d(23vw, 0, 0) rotateX(189deg) rotateY(341deg);
}

.popup .popup__piece:nth-child(22) {
  height: 20.66667%;
  width: 15.66667%;
}

.popup .popup__piece:nth-child(22) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-47vw, -1vh, -27px) rotateX(388deg) rotateY(393deg);
  transform: translate3d(-47vw, -1vh, -27px) rotateX(388deg) rotateY(393deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 48% 100%);
  clip-path: polygon(0 0, 0 100%, 48% 100%);
}

.popup .popup__piece:nth-child(22) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(29vw, -24vh, -804px) rotateX(417deg) rotateY(226deg);
  transform: translate3d(29vw, -24vh, -804px) rotateX(417deg) rotateY(226deg);
  -webkit-clip-path: polygon(0 0, 48% 100%, 100% 0);
  clip-path: polygon(0 0, 48% 100%, 100% 0);
}

.popup .popup__piece:nth-child(22) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(16vw, 56vh, -312px) rotateX(466deg) rotateY(431deg);
  transform: translate3d(16vw, 56vh, -312px) rotateX(466deg) rotateY(431deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 48% 100%);
  clip-path: polygon(100% 0, 100% 100%, 48% 100%);
}

.popup.s--closed .popup__piece:nth-child(22) {
  -webkit-transform: translate3d(0, 109vh, 0);
  transform: translate3d(0, 109vh, 0);
}

.popup.s--closed .popup__piece:nth-child(22) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(38vw, 0, 0) rotateX(420deg) rotateY(421deg);
  transform: translate3d(38vw, 0, 0) rotateX(420deg) rotateY(421deg);
}

.popup.s--closed .popup__piece:nth-child(22) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-79vw, 0, 0) rotateX(376deg) rotateY(388deg);
  transform: translate3d(-79vw, 0, 0) rotateX(376deg) rotateY(388deg);
}

.popup.s--closed .popup__piece:nth-child(22) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-57vw, 0, 0) rotateX(200deg) rotateY(312deg);
  transform: translate3d(-57vw, 0, 0) rotateX(200deg) rotateY(312deg);
}

.popup .popup__piece:nth-child(23) {
  height: 20.66667%;
  width: 31.66667%;
}

.popup .popup__piece:nth-child(23) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-37vw, -46vh, 167px) rotateX(258deg) rotateY(167deg);
  transform: translate3d(-37vw, -46vh, 167px) rotateX(258deg) rotateY(167deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 36% 100%);
  clip-path: polygon(0 0, 0 100%, 36% 100%);
}

.popup .popup__piece:nth-child(23) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(26vw, 31vh, -617px) rotateX(321deg) rotateY(141deg);
  transform: translate3d(26vw, 31vh, -617px) rotateX(321deg) rotateY(141deg);
  -webkit-clip-path: polygon(0 0, 36% 100%, 100% 0);
  clip-path: polygon(0 0, 36% 100%, 100% 0);
}

.popup .popup__piece:nth-child(23) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-4vw, 0vh, 664px) rotateX(205deg) rotateY(326deg);
  transform: translate3d(-4vw, 0vh, 664px) rotateX(205deg) rotateY(326deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 36% 100%);
  clip-path: polygon(100% 0, 100% 100%, 36% 100%);
}

.popup.s--closed .popup__piece:nth-child(23) {
  -webkit-transform: translate3d(0, 142vh, 0);
  transform: translate3d(0, 142vh, 0);
}

.popup.s--closed .popup__piece:nth-child(23) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-5vw, 0, 0) rotateX(447deg) rotateY(436deg);
  transform: translate3d(-5vw, 0, 0) rotateX(447deg) rotateY(436deg);
}

.popup.s--closed .popup__piece:nth-child(23) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(47vw, 0, 0) rotateX(229deg) rotateY(175deg);
  transform: translate3d(47vw, 0, 0) rotateX(229deg) rotateY(175deg);
}

.popup.s--closed .popup__piece:nth-child(23) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(27vw, 0, 0) rotateX(121deg) rotateY(432deg);
  transform: translate3d(27vw, 0, 0) rotateX(121deg) rotateY(432deg);
}

.popup .popup__piece:nth-child(24) {
  height: 20.66667%;
  width: 13.66667%;
}

.popup .popup__piece:nth-child(24) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-31vw, -59vh, -264px) rotateX(246deg) rotateY(301deg);
  transform: translate3d(-31vw, -59vh, -264px) rotateX(246deg) rotateY(301deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 62% 100%);
  clip-path: polygon(0 0, 0 100%, 62% 100%);
}

.popup .popup__piece:nth-child(24) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(35vw, 33vh, -457px) rotateX(223deg) rotateY(446deg);
  transform: translate3d(35vw, 33vh, -457px) rotateX(223deg) rotateY(446deg);
  -webkit-clip-path: polygon(0 0, 62% 100%, 100% 0);
  clip-path: polygon(0 0, 62% 100%, 100% 0);
}

.popup .popup__piece:nth-child(24) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-13vw, -8vh, -275px) rotateX(124deg) rotateY(353deg);
  transform: translate3d(-13vw, -8vh, -275px) rotateX(124deg) rotateY(353deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 62% 100%);
  clip-path: polygon(100% 0, 100% 100%, 62% 100%);
}

.popup.s--closed .popup__piece:nth-child(24) {
  -webkit-transform: translate3d(0, 109vh, 0);
  transform: translate3d(0, 109vh, 0);
}

.popup.s--closed .popup__piece:nth-child(24) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-57vw, 0, 0) rotateX(365deg) rotateY(430deg);
  transform: translate3d(-57vw, 0, 0) rotateX(365deg) rotateY(430deg);
}

.popup.s--closed .popup__piece:nth-child(24) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-60vw, 0, 0) rotateX(471deg) rotateY(448deg);
  transform: translate3d(-60vw, 0, 0) rotateX(471deg) rotateY(448deg);
}

.popup.s--closed .popup__piece:nth-child(24) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-66vw, 0, 0) rotateX(249deg) rotateY(195deg);
  transform: translate3d(-66vw, 0, 0) rotateX(249deg) rotateY(195deg);
}

.popup .popup__piece:nth-child(25) {
  height: 20.66667%;
  width: 18.66667%;
}

.popup .popup__piece:nth-child(25) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(21vw, -39vh, -670px) rotateX(264deg) rotateY(229deg);
  transform: translate3d(21vw, -39vh, -670px) rotateX(264deg) rotateY(229deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 41% 100%);
  clip-path: polygon(0 0, 0 100%, 41% 100%);
}

.popup .popup__piece:nth-child(25) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-37vw, -22vh, -701px) rotateX(300deg) rotateY(471deg);
  transform: translate3d(-37vw, -22vh, -701px) rotateX(300deg) rotateY(471deg);
  -webkit-clip-path: polygon(0 0, 41% 100%, 100% 0);
  clip-path: polygon(0 0, 41% 100%, 100% 0);
}

.popup .popup__piece:nth-child(25) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-36vw, 53vh, -803px) rotateX(454deg) rotateY(261deg);
  transform: translate3d(-36vw, 53vh, -803px) rotateX(454deg) rotateY(261deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 41% 100%);
  clip-path: polygon(100% 0, 100% 100%, 41% 100%);
}

.popup.s--closed .popup__piece:nth-child(25) {
  -webkit-transform: translate3d(0, 118vh, 0);
  transform: translate3d(0, 118vh, 0);
}

.popup.s--closed .popup__piece:nth-child(25) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-30vw, 0, 0) rotateX(268deg) rotateY(427deg);
  transform: translate3d(-30vw, 0, 0) rotateX(268deg) rotateY(427deg);
}

.popup.s--closed .popup__piece:nth-child(25) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(59vw, 0, 0) rotateX(373deg) rotateY(362deg);
  transform: translate3d(59vw, 0, 0) rotateX(373deg) rotateY(362deg);
}

.popup.s--closed .popup__piece:nth-child(25) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(60vw, 0, 0) rotateX(135deg) rotateY(131deg);
  transform: translate3d(60vw, 0, 0) rotateX(135deg) rotateY(131deg);
}

.popup .popup__piece:nth-child(26) {
  height: 20.66667%;
  width: 12.66667%;
}

.popup .popup__piece:nth-child(26) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(8vw, -59vh, 710px) rotateX(245deg) rotateY(138deg);
  transform: translate3d(8vw, -59vh, 710px) rotateX(245deg) rotateY(138deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 43% 100%);
  clip-path: polygon(0 0, 0 100%, 43% 100%);
}

.popup .popup__piece:nth-child(26) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(24vw, 19vh, -1px) rotateX(452deg) rotateY(375deg);
  transform: translate3d(24vw, 19vh, -1px) rotateX(452deg) rotateY(375deg);
  -webkit-clip-path: polygon(0 0, 43% 100%, 100% 0);
  clip-path: polygon(0 0, 43% 100%, 100% 0);
}

.popup .popup__piece:nth-child(26) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(50vw, 53vh, -646px) rotateX(260deg) rotateY(342deg);
  transform: translate3d(50vw, 53vh, -646px) rotateX(260deg) rotateY(342deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 43% 100%);
  clip-path: polygon(100% 0, 100% 100%, 43% 100%);
}

.popup.s--closed .popup__piece:nth-child(26) {
  -webkit-transform: translate3d(0, 116vh, 0);
  transform: translate3d(0, 116vh, 0);
}

.popup.s--closed .popup__piece:nth-child(26) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-55vw, 0, 0) rotateX(124deg) rotateY(264deg);
  transform: translate3d(-55vw, 0, 0) rotateX(124deg) rotateY(264deg);
}

.popup.s--closed .popup__piece:nth-child(26) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(76vw, 0, 0) rotateX(471deg) rotateY(343deg);
  transform: translate3d(76vw, 0, 0) rotateX(471deg) rotateY(343deg);
}

.popup.s--closed .popup__piece:nth-child(26) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(17vw, 0, 0) rotateX(292deg) rotateY(230deg);
  transform: translate3d(17vw, 0, 0) rotateX(292deg) rotateY(230deg);
}

.popup .popup__piece:nth-child(27) {
  height: 20.66667%;
  width: 16.66667%;
}

.popup .popup__piece:nth-child(27) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(55vw, -10vh, -47px) rotateX(404deg) rotateY(172deg);
  transform: translate3d(55vw, -10vh, -47px) rotateX(404deg) rotateY(172deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 49% 100%);
  clip-path: polygon(0 0, 0 100%, 49% 100%);
}

.popup .popup__piece:nth-child(27) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(34vw, 14vh, 532px) rotateX(175deg) rotateY(345deg);
  transform: translate3d(34vw, 14vh, 532px) rotateX(175deg) rotateY(345deg);
  -webkit-clip-path: polygon(0 0, 49% 100%, 100% 0);
  clip-path: polygon(0 0, 49% 100%, 100% 0);
}

.popup .popup__piece:nth-child(27) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-1vw, 7vh, 570px) rotateX(181deg) rotateY(130deg);
  transform: translate3d(-1vw, 7vh, 570px) rotateX(181deg) rotateY(130deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 49% 100%);
  clip-path: polygon(100% 0, 100% 100%, 49% 100%);
}

.popup.s--closed .popup__piece:nth-child(27) {
  -webkit-transform: translate3d(0, 103vh, 0);
  transform: translate3d(0, 103vh, 0);
}

.popup.s--closed .popup__piece:nth-child(27) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(10vw, 0, 0) rotateX(473deg) rotateY(304deg);
  transform: translate3d(10vw, 0, 0) rotateX(473deg) rotateY(304deg);
}

.popup.s--closed .popup__piece:nth-child(27) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(25vw, 0, 0) rotateX(437deg) rotateY(207deg);
  transform: translate3d(25vw, 0, 0) rotateX(437deg) rotateY(207deg);
}

.popup.s--closed .popup__piece:nth-child(27) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-62vw, 0, 0) rotateX(322deg) rotateY(256deg);
  transform: translate3d(-62vw, 0, 0) rotateX(322deg) rotateY(256deg);
}

.popup .popup__piece:nth-child(28) {
  height: 20.66667%;
  width: 12.66667%;
}

.popup .popup__piece:nth-child(28) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(11vw, 57vh, -85px) rotateX(399deg) rotateY(388deg);
  transform: translate3d(11vw, 57vh, -85px) rotateX(399deg) rotateY(388deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 55% 100%);
  clip-path: polygon(0 0, 0 100%, 55% 100%);
}

.popup .popup__piece:nth-child(28) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(59vw, -27vh, 101px) rotateX(381deg) rotateY(206deg);
  transform: translate3d(59vw, -27vh, 101px) rotateX(381deg) rotateY(206deg);
  -webkit-clip-path: polygon(0 0, 55% 100%, 100% 0);
  clip-path: polygon(0 0, 55% 100%, 100% 0);
}

.popup .popup__piece:nth-child(28) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-37vw, 39vh, -410px) rotateX(307deg) rotateY(217deg);
  transform: translate3d(-37vw, 39vh, -410px) rotateX(307deg) rotateY(217deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 55% 100%);
  clip-path: polygon(100% 0, 100% 100%, 55% 100%);
}

.popup.s--closed .popup__piece:nth-child(28) {
  -webkit-transform: translate3d(0, 145vh, 0);
  transform: translate3d(0, 145vh, 0);
}

.popup.s--closed .popup__piece:nth-child(28) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(3vw, 0, 0) rotateX(448deg) rotateY(133deg);
  transform: translate3d(3vw, 0, 0) rotateX(448deg) rotateY(133deg);
}

.popup.s--closed .popup__piece:nth-child(28) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(54vw, 0, 0) rotateX(192deg) rotateY(298deg);
  transform: translate3d(54vw, 0, 0) rotateX(192deg) rotateY(298deg);
}

.popup.s--closed .popup__piece:nth-child(28) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(59vw, 0, 0) rotateX(417deg) rotateY(428deg);
  transform: translate3d(59vw, 0, 0) rotateX(417deg) rotateY(428deg);
}

.popup .popup__piece:nth-child(29) {
  height: 20.66667%;
  width: 17.66667%;
}

.popup .popup__piece:nth-child(29) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-19vw, -14vh, 381px) rotateX(285deg) rotateY(239deg);
  transform: translate3d(-19vw, -14vh, 381px) rotateX(285deg) rotateY(239deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 31% 100%);
  clip-path: polygon(0 0, 0 100%, 31% 100%);
}

.popup .popup__piece:nth-child(29) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-10vw, 8vh, 439px) rotateX(332deg) rotateY(232deg);
  transform: translate3d(-10vw, 8vh, 439px) rotateX(332deg) rotateY(232deg);
  -webkit-clip-path: polygon(0 0, 31% 100%, 100% 0);
  clip-path: polygon(0 0, 31% 100%, 100% 0);
}

.popup .popup__piece:nth-child(29) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-4vw, -57vh, 610px) rotateX(413deg) rotateY(211deg);
  transform: translate3d(-4vw, -57vh, 610px) rotateX(413deg) rotateY(211deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 31% 100%);
  clip-path: polygon(100% 0, 100% 100%, 31% 100%);
}

.popup.s--closed .popup__piece:nth-child(29) {
  -webkit-transform: translate3d(0, 101vh, 0);
  transform: translate3d(0, 101vh, 0);
}

.popup.s--closed .popup__piece:nth-child(29) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-74vw, 0, 0) rotateX(397deg) rotateY(222deg);
  transform: translate3d(-74vw, 0, 0) rotateX(397deg) rotateY(222deg);
}

.popup.s--closed .popup__piece:nth-child(29) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-70vw, 0, 0) rotateX(475deg) rotateY(237deg);
  transform: translate3d(-70vw, 0, 0) rotateX(475deg) rotateY(237deg);
}

.popup.s--closed .popup__piece:nth-child(29) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-22vw, 0, 0) rotateX(348deg) rotateY(225deg);
  transform: translate3d(-22vw, 0, 0) rotateX(348deg) rotateY(225deg);
}

.popup .popup__piece:nth-child(30) {
  height: 20.66667%;
  width: 21.66667%;
}

.popup .popup__piece:nth-child(30) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(45vw, 52vh, 297px) rotateX(328deg) rotateY(472deg);
  transform: translate3d(45vw, 52vh, 297px) rotateX(328deg) rotateY(472deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 70% 100%);
  clip-path: polygon(0 0, 0 100%, 70% 100%);
}

.popup .popup__piece:nth-child(30) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(9vw, -31vh, 528px) rotateX(390deg) rotateY(230deg);
  transform: translate3d(9vw, -31vh, 528px) rotateX(390deg) rotateY(230deg);
  -webkit-clip-path: polygon(0 0, 70% 100%, 100% 0);
  clip-path: polygon(0 0, 70% 100%, 100% 0);
}

.popup .popup__piece:nth-child(30) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(41vw, 42vh, -366px) rotateX(245deg) rotateY(231deg);
  transform: translate3d(41vw, 42vh, -366px) rotateX(245deg) rotateY(231deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 70% 100%);
  clip-path: polygon(100% 0, 100% 100%, 70% 100%);
}

.popup.s--closed .popup__piece:nth-child(30) {
  -webkit-transform: translate3d(0, 112vh, 0);
  transform: translate3d(0, 112vh, 0);
}

.popup.s--closed .popup__piece:nth-child(30) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-47vw, 0, 0) rotateX(386deg) rotateY(430deg);
  transform: translate3d(-47vw, 0, 0) rotateX(386deg) rotateY(430deg);
}

.popup.s--closed .popup__piece:nth-child(30) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-70vw, 0, 0) rotateX(413deg) rotateY(423deg);
  transform: translate3d(-70vw, 0, 0) rotateX(413deg) rotateY(423deg);
}

.popup.s--closed .popup__piece:nth-child(30) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(78vw, 0, 0) rotateX(257deg) rotateY(262deg);
  transform: translate3d(78vw, 0, 0) rotateX(257deg) rotateY(262deg);
}

.popup .popup__piece:nth-child(31) {
  height: 6.66667%;
  width: 19.66667%;
}

.popup .popup__piece:nth-child(31) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(14vw, 2vh, -300px) rotateX(144deg) rotateY(141deg);
  transform: translate3d(14vw, 2vh, -300px) rotateX(144deg) rotateY(141deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 53% 100%);
  clip-path: polygon(0 0, 0 100%, 53% 100%);
}

.popup .popup__piece:nth-child(31) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(52vw, -36vh, 502px) rotateX(313deg) rotateY(300deg);


  transform: translate3d(52vw, -36vh, 502px) rotateX(313deg) rotateY(300deg);
  -webkit-clip-path: polygon(0 0, 53% 100%, 100% 0);
  clip-path: polygon(0 0, 53% 100%, 100% 0);
}

.popup .popup__piece:nth-child(31) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-48vw, -6vh, 77px) rotateX(182deg) rotateY(304deg);
  transform: translate3d(-48vw, -6vh, 77px) rotateX(182deg) rotateY(304deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 53% 100%);
  clip-path: polygon(100% 0, 100% 100%, 53% 100%);
}

.popup.s--closed .popup__piece:nth-child(31) {
  -webkit-transform: translate3d(0, 141vh, 0);
  transform: translate3d(0, 141vh, 0);
}

.popup.s--closed .popup__piece:nth-child(31) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(0vw, 0, 0) rotateX(348deg) rotateY(161deg);
  transform: translate3d(0vw, 0, 0) rotateX(348deg) rotateY(161deg);
}

.popup.s--closed .popup__piece:nth-child(31) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(8vw, 0, 0) rotateX(370deg) rotateY(273deg);
  transform: translate3d(8vw, 0, 0) rotateX(370deg) rotateY(273deg);
}

.popup.s--closed .popup__piece:nth-child(31) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(10vw, 0, 0) rotateX(129deg) rotateY(138deg);
  transform: translate3d(10vw, 0, 0) rotateX(129deg) rotateY(138deg);
}

.popup .popup__piece:nth-child(32) {
  height: 6.66667%;
  width: 15.66667%;
}

.popup .popup__piece:nth-child(32) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(4vw, -6vh, -174px) rotateX(198deg) rotateY(252deg);
  transform: translate3d(4vw, -6vh, -174px) rotateX(198deg) rotateY(252deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 66% 100%);
  clip-path: polygon(0 0, 0 100%, 66% 100%);
}

.popup .popup__piece:nth-child(32) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(37vw, -9vh, -883px) rotateX(468deg) rotateY(416deg);
  transform: translate3d(37vw, -9vh, -883px) rotateX(468deg) rotateY(416deg);
  -webkit-clip-path: polygon(0 0, 66% 100%, 100% 0);
  clip-path: polygon(0 0, 66% 100%, 100% 0);
}

.popup .popup__piece:nth-child(32) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-21vw, 60vh, -268px) rotateX(143deg) rotateY(448deg);
  transform: translate3d(-21vw, 60vh, -268px) rotateX(143deg) rotateY(448deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 66% 100%);
  clip-path: polygon(100% 0, 100% 100%, 66% 100%);
}

.popup.s--closed .popup__piece:nth-child(32) {
  -webkit-transform: translate3d(0, 127vh, 0);
  transform: translate3d(0, 127vh, 0);
}

.popup.s--closed .popup__piece:nth-child(32) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-11vw, 0, 0) rotateX(440deg) rotateY(382deg);
  transform: translate3d(-11vw, 0, 0) rotateX(440deg) rotateY(382deg);
}

.popup.s--closed .popup__piece:nth-child(32) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(62vw, 0, 0) rotateX(317deg) rotateY(451deg);
  transform: translate3d(62vw, 0, 0) rotateX(317deg) rotateY(451deg);
}

.popup.s--closed .popup__piece:nth-child(32) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(68vw, 0, 0) rotateX(425deg) rotateY(157deg);
  transform: translate3d(68vw, 0, 0) rotateX(425deg) rotateY(157deg);
}

.popup .popup__piece:nth-child(33) {
  height: 6.66667%;
  width: 17.66667%;
}

.popup .popup__piece:nth-child(33) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(50vw, -40vh, 779px) rotateX(416deg) rotateY(455deg);
  transform: translate3d(50vw, -40vh, 779px) rotateX(416deg) rotateY(455deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 31% 100%);
  clip-path: polygon(0 0, 0 100%, 31% 100%);
}

.popup .popup__piece:nth-child(33) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-57vw, -29vh, -302px) rotateX(198deg) rotateY(465deg);
  transform: translate3d(-57vw, -29vh, -302px) rotateX(198deg) rotateY(465deg);
  -webkit-clip-path: polygon(0 0, 31% 100%, 100% 0);
  clip-path: polygon(0 0, 31% 100%, 100% 0);
}

.popup .popup__piece:nth-child(33) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(30vw, -39vh, 26px) rotateX(220deg) rotateY(271deg);
  transform: translate3d(30vw, -39vh, 26px) rotateX(220deg) rotateY(271deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 31% 100%);
  clip-path: polygon(100% 0, 100% 100%, 31% 100%);
}

.popup.s--closed .popup__piece:nth-child(33) {
  -webkit-transform: translate3d(0, 143vh, 0);
  transform: translate3d(0, 143vh, 0);
}

.popup.s--closed .popup__piece:nth-child(33) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-38vw, 0, 0) rotateX(129deg) rotateY(229deg);
  transform: translate3d(-38vw, 0, 0) rotateX(129deg) rotateY(229deg);
}

.popup.s--closed .popup__piece:nth-child(33) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(17vw, 0, 0) rotateX(231deg) rotateY(157deg);
  transform: translate3d(17vw, 0, 0) rotateX(231deg) rotateY(157deg);
}

.popup.s--closed .popup__piece:nth-child(33) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-42vw, 0, 0) rotateX(438deg) rotateY(129deg);
  transform: translate3d(-42vw, 0, 0) rotateX(438deg) rotateY(129deg);
}

.popup .popup__piece:nth-child(34) {
  height: 6.66667%;
  width: 13.66667%;
}

.popup .popup__piece:nth-child(34) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-23vw, 28vh, -681px) rotateX(192deg) rotateY(128deg);
  transform: translate3d(-23vw, 28vh, -681px) rotateX(192deg) rotateY(128deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 70% 100%);
  clip-path: polygon(0 0, 0 100%, 70% 100%);
}

.popup .popup__piece:nth-child(34) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(31vw, 3vh, -137px) rotateX(337deg) rotateY(376deg);
  transform: translate3d(31vw, 3vh, -137px) rotateX(337deg) rotateY(376deg);
  -webkit-clip-path: polygon(0 0, 70% 100%, 100% 0);
  clip-path: polygon(0 0, 70% 100%, 100% 0);
}

.popup .popup__piece:nth-child(34) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(35vw, -25vh, 370px) rotateX(424deg) rotateY(179deg);
  transform: translate3d(35vw, -25vh, 370px) rotateX(424deg) rotateY(179deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 70% 100%);
  clip-path: polygon(100% 0, 100% 100%, 70% 100%);
}

.popup.s--closed .popup__piece:nth-child(34) {
  -webkit-transform: translate3d(0, 108vh, 0);
  transform: translate3d(0, 108vh, 0);
}

.popup.s--closed .popup__piece:nth-child(34) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-77vw, 0, 0) rotateX(258deg) rotateY(277deg);
  transform: translate3d(-77vw, 0, 0) rotateX(258deg) rotateY(277deg);
}

.popup.s--closed .popup__piece:nth-child(34) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(38vw, 0, 0) rotateX(405deg) rotateY(135deg);
  transform: translate3d(38vw, 0, 0) rotateX(405deg) rotateY(135deg);
}

.popup.s--closed .popup__piece:nth-child(34) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-33vw, 0, 0) rotateX(450deg) rotateY(411deg);
  transform: translate3d(-33vw, 0, 0) rotateX(450deg) rotateY(411deg);
}

.popup .popup__piece:nth-child(35) {
  height: 6.66667%;
  width: 16.66667%;
}

.popup .popup__piece:nth-child(35) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(29vw, 32vh, 752px) rotateX(411deg) rotateY(476deg);
  transform: translate3d(29vw, 32vh, 752px) rotateX(411deg) rotateY(476deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 43% 100%);
  clip-path: polygon(0 0, 0 100%, 43% 100%);
}

.popup .popup__piece:nth-child(35) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(27vw, 45vh, 305px) rotateX(406deg) rotateY(190deg);
  transform: translate3d(27vw, 45vh, 305px) rotateX(406deg) rotateY(190deg);
  -webkit-clip-path: polygon(0 0, 43% 100%, 100% 0);
  clip-path: polygon(0 0, 43% 100%, 100% 0);
}

.popup .popup__piece:nth-child(35) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(28vw, -36vh, -92px) rotateX(445deg) rotateY(471deg);
  transform: translate3d(28vw, -36vh, -92px) rotateX(445deg) rotateY(471deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 43% 100%);
  clip-path: polygon(100% 0, 100% 100%, 43% 100%);
}

.popup.s--closed .popup__piece:nth-child(35) {
  -webkit-transform: translate3d(0, 123vh, 0);
  transform: translate3d(0, 123vh, 0);
}

.popup.s--closed .popup__piece:nth-child(35) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(-60vw, 0, 0) rotateX(357deg) rotateY(335deg);
  transform: translate3d(-60vw, 0, 0) rotateX(357deg) rotateY(335deg);
}

.popup.s--closed .popup__piece:nth-child(35) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(-50vw, 0, 0) rotateX(455deg) rotateY(387deg);
  transform: translate3d(-50vw, 0, 0) rotateX(455deg) rotateY(387deg);
}

.popup.s--closed .popup__piece:nth-child(35) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(18vw, 0, 0) rotateX(473deg) rotateY(387deg);
  transform: translate3d(18vw, 0, 0) rotateX(473deg) rotateY(387deg);
}

.popup .popup__piece:nth-child(36) {
  height: 6.66667%;
  width: 16.66667%;
}

.popup .popup__piece:nth-child(36) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(15vw, -45vh, -795px) rotateX(337deg) rotateY(313deg);
  transform: translate3d(15vw, -45vh, -795px) rotateX(337deg) rotateY(313deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 33% 100%);
  clip-path: polygon(0 0, 0 100%, 33% 100%);
}

.popup .popup__piece:nth-child(36) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(43vw, -54vh, -747px) rotateX(383deg) rotateY(341deg);
  transform: translate3d(43vw, -54vh, -747px) rotateX(383deg) rotateY(341deg);
  -webkit-clip-path: polygon(0 0, 33% 100%, 100% 0);
  clip-path: polygon(0 0, 33% 100%, 100% 0);
}

.popup .popup__piece:nth-child(36) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(-5vw, -35vh, 188px) rotateX(140deg) rotateY(323deg);
  transform: translate3d(-5vw, -35vh, 188px) rotateX(140deg) rotateY(323deg);
  -webkit-clip-path: polygon(100% 0, 100% 100%, 33% 100%);
  clip-path: polygon(100% 0, 100% 100%, 33% 100%);
}

.popup.s--closed .popup__piece:nth-child(36) {
  -webkit-transform: translate3d(0, 125vh, 0);
  transform: translate3d(0, 125vh, 0);
}

.popup.s--closed .popup__piece:nth-child(36) .popup__piece-inner:nth-child(1) {
  -webkit-transform: translate3d(62vw, 0, 0) rotateX(468deg) rotateY(291deg);
  transform: translate3d(62vw, 0, 0) rotateX(468deg) rotateY(291deg);
}

.popup.s--closed .popup__piece:nth-child(36) .popup__piece-inner:nth-child(2) {
  -webkit-transform: translate3d(57vw, 0, 0) rotateX(336deg) rotateY(292deg);
  transform: translate3d(57vw, 0, 0) rotateX(336deg) rotateY(292deg);
}

.popup.s--closed .popup__piece:nth-child(36) .popup__piece-inner:nth-child(3) {
  -webkit-transform: translate3d(36vw, 0, 0) rotateX(135deg) rotateY(408deg);
  transform: translate3d(36vw, 0, 0) rotateX(135deg) rotateY(408deg);
}

.popup__pieces {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.popup__piece {
  float: left;
  position: relative;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: -webkit-transform 0s 0s;
  transition: -webkit-transform 0s 0s;
  transition: transform 0s 0s;
  transition: transform 0s 0s, -webkit-transform 0s 0s;
}

.popup.s--closed .popup__piece {
  -webkit-transition: -webkit-transform 0.7s 0.1s cubic-bezier(0.69, -0.47, 0.97, 1.04);
  transition: -webkit-transform 0.7s 0.1s cubic-bezier(0.69, -0.47, 0.97, 1.04);
  transition: transform 0.7s 0.1s cubic-bezier(0.69, -0.47, 0.97, 1.04);
  transition: transform 0.7s 0.1s cubic-bezier(0.69, -0.47, 0.97, 1.04), -webkit-transform 0.7s 0.1s cubic-bezier(0.69, -0.47, 0.97, 1.04);
}

.popup__piece:after {
  content: "";
  display: table;
  clear: both;
}

.popup__piece-inner {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  opacity: 0;
  -webkit-transition: opacity 0.35s 0.55s ease-in, -webkit-transform 0.7s 0.1s ease-out;
  transition: opacity 0.35s 0.55s ease-in, -webkit-transform 0.7s 0.1s ease-out;
  transition: opacity 0.35s 0.55s ease-in, transform 0.7s 0.1s ease-out;
  transition: opacity 0.35s 0.55s ease-in, transform 0.7s 0.1s ease-out, -webkit-transform 0.7s 0.1s ease-out;
}

.popup.s--active .popup__piece-inner {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.7s ease-in-out;
  transition: opacity 0.35s, -webkit-transform 0.7s ease-in-out;
  transition: opacity 0.35s, transform 0.7s ease-in-out;
  transition: opacity 0.35s, transform 0.7s ease-in-out, -webkit-transform 0.7s ease-in-out;
  -webkit-transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) !important;
  transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) !important;
  opacity: 1;
}

.popup__content {
  position: relative;
  min-height: 200px;
  padding: 5px;
  background: #ffffff;
  color: #000;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  opacity: 0;
}

.popup.s--active .popup__content {
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
  opacity: 1;
}

.popup__close {
  position: absolute;
  right: 30px;
  top: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.popup__close:before, .popup__close:after {
  content: '';
  position: absolute;
  left: 0;
  top: 14px;
  width: 100%;
  height: 2px;
  background: #cccccc;
}

.popup__close:before {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.popup__close:after {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.popup__heading {
  margin-bottom: 20px;
  font-size: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.popup__text {
  font-size: 18px;
  line-height: 1.5;
}
</style>   
               
	<script>
	
	$(document).ready(function()
	{
		var numOfPieces = 6 * 6;
		var frag = document.createDocumentFragment();
	
		function insertInnerPieces($el, innerPieces) 
		{
		  for (var i = 0; i < innerPieces; i++) 
		  {
			var $inner = document.createElement('div');
			$inner.classList.add('popup__piece-inner');
			$el.appendChild($inner);
		  }
		};
	
		for (var i = 1; i <= numOfPieces; i++) 
		{
		  var $piece = document.createElement('div');
		  $piece.classList.add('popup__piece');
			
		  insertInnerPieces($piece, 1);
		  frag.appendChild($piece);
		}
	
		document.querySelector('.popup__pieces').appendChild(frag);
	
		var $popupsCont = document.querySelector('.popups-cont');
		var $popup = document.querySelector('.popup');
		var popupAT = 1;
		
		var overlay = jQuery('<div id="overlay"> </div>');	
		
		$('.popup-btn').click(function()
		{
			  overlay.appendTo(document.body);	
			  $popupsCont.classList.add('s--popup-active');
			  $popup.classList.add('s--active');
		});
		
		$('.popup__close').click(function()
		{
			  $("#overlay").remove();	
			  $popupsCont.classList.remove('s--popup-active');
			  $popup.classList.remove('s--active');
			  $popup.classList.add('s--closed');  
			  setTimeout(function() 
			  {
				$popup.classList.remove('s--closed');
			  }, popupAT);
		});
		
		
	});
	</script><style>
.form-control, select {
    font-size: 13px;
    color: #858585;
    background-color: #fbfbfb;
    border: 1px solid #d5d5d5;
    padding: 3px 16px;
}
.table > caption + thead > tr:first-child > th, .table > colgroup + thead > tr:first-child > th, .table > thead:first-child > tr:first-child > th, .table > caption + thead > tr:first-child > td, .table > colgroup + thead > tr:first-child > td, .table > thead:first-child > tr:first-child > td {
    border-top: 0;
    background-color: #E0EEEE;
}
.container
		{
			margin-left:5px;
			width:95%;
		}

.asdok {
    position: relative;
    padding-top: 43px;
    color: #333333;
    border: solid;
    background-color: #E0EEEE;
}
		.asdok.positioned 
		{
			  position: absolute;
			  width:95%;
			  box-shadow: 0 0 15px #333;
		}
		.container1 
		{
			  overflow-y: auto;
			  height: 250px;
			  background-color: white;
		}
		.table 
		{
			 border-spacing: 0; border-width: 0; padding: 0; border-width: 0;
		}
		.table td + .table td 
		{
			  border-left:1px solid #eee;
			  text-align:left;
		}
		.table td, .table th 
		{
			  border-bottom:1px solid #eee;
			  color: #000;
			  width:0%;
		}
		.table th span {
    position: absolute;
    background: transparent;
    color: #333333;
    top: 0;
    color: #000000;
    margin-top: 15px;
	
}
		.table th:first-child div
		{
			  border: none;
		}

</style>
<style>
/*<!--.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
    padding: 8px;
    line-height: 1.429;
    vertical-align: top;
    border-top: 0px solid #666666;
	border-radius:2px;
}-->*/
div
{
	font-family: Geneva, Arial, Helvetica, sans-serif;
	color:#666666;
}

/*--------------File Upload----------*/
/* leave this part out */
/*body{text-align:center; padding-top:30px;}*/
/* leave this part out */

.clearfix{*zoom:1;}.clearfix:before,.clearfix:after{display:table;content:"";line-height:0;}
.clearfix:after{clear:both;}
.hide-text{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0;}
.input-block-level{display:block;width:100%;min-height:30px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
.btn-file{overflow:hidden;position:relative;vertical-align:middle;}.btn-file>input{position:absolute;top:0;right:0;margin:0;opacity:0;filter:alpha(opacity=0);transform:translate(-300px, 0) scale(4);font-size:23px;direction:ltr;cursor:pointer;}
.fileupload{margin-bottom:9px;}.fileupload .uneditable-input{display:inline-block;margin-bottom:0px;vertical-align:middle;cursor:text;}
.fileupload .thumbnail{overflow:hidden;display:inline-block;margin-bottom:5px;vertical-align:middle;text-align:center;}.fileupload .thumbnail>img{display:inline-block;vertical-align:middle;max-height:100%;}
.fileupload .btn{vertical-align:middle;}
.fileupload-exists .fileupload-new,.fileupload-new .fileupload-exists{display:none;}
.fileupload-inline .fileupload-controls{display:inline;}
.fileupload-new .input-append .btn-file{-webkit-border-radius:0 3px 3px 0;-moz-border-radius:0 3px 3px 0;border-radius:0 3px 3px 0;}
.thumbnail-borderless .thumbnail{border:none;padding:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;}
.fileupload-new.thumbnail-borderless .thumbnail{border:1px solid #ddd;}
.control-group.warning .fileupload .uneditable-input{color:#a47e3c;border-color:#a47e3c;}
.control-group.warning .fileupload .fileupload-preview{color:#a47e3c;}
.control-group.warning .fileupload .thumbnail{border-color:#a47e3c;}
.control-group.error .fileupload .uneditable-input{color:#b94a48;border-color:#b94a48;}
.control-group.error .fileupload .fileupload-preview{color:#b94a48;}
.control-group.error .fileupload .thumbnail{border-color:#b94a48;}
.control-group.success .fileupload .uneditable-input{color:#468847;border-color:#468847;}
.control-group.success .fileupload .fileupload-preview{color:#468847;}
.control-group.success .fileupload .thumbnail{border-color:#468847;}
</style>


<style>
/*label{margin-left: 20px;}*/
/*#datepicker{width:180px; margin: 0 20px 20px 20px;}*/
.datePic > span:hover{cursor: pointer;}
</style>

 <style>
 #pageHeadding{
	font-size: 25px;
	font-weight: 300;
	color: #000000;
	text-align: center;
	margin: 0px 0px;
	padding: 0px 0px;
}
div.polaroid {
  width: 48%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin:10px 10px 10px 10px;
 display: inline-block;
  
}

div.container2 {
  text-align: center;
  padding: 10px 20px;
}
.imgCls {
width: 100%;
height: 245px;
}
</style>
<style>#popup_box {
    display: none;
    position: absolute;
	
    height: 500px;
    width: 100%;
    background: #FFFFFF;
    left: 168px;
    top: 300px;
    z-index: 1000px;
   margin-right:50%;
    border: 2px solid #000000;
    padding: 29px;
    padiing-top: 25px;
    -moz-box-shadow: 0 0 5px #CCCCCC;
    -webkit-box-shadow: 0 0 5px #CCCCCC;
    box-shadow: 0 0 5px #CCCCCC;
    margin-top: 28px;
	 
}
.overlay div {
   margin: 15px auto;
   width: 80%;
   max-width: 650px;
   padding: 30px;
   min-height: 200px;
   background: rgba(255,255,255, .95);
}
.overlay {
    background:  rgba(40,40,40, .75);
}
.ulClass{
margin-left: 0%;
list-style: none;

}
td, th {
    padding: 7px;
    margin-left: 13%;
}
</style>

<div ng-controller="QAServiceController" ng-init="LoadStatusSelect();OnLoadQA();loadCustomerName();loadGridData(qaIssue.fromdata,qaIssue.todate);loadGridDataExt(qaIssue.fromdataEXT,qaIssue.todateExt);">									
	<div class="well with-header with-footer">
      <div class="header bordered-blue" id="pageHeadding">QA Issues List</div>
	      <form name="qaServiceForm"  novalidate>
	 <!-- <div class="row" ng-hide="IsVisible" ng-if="qaIssue.qualityAssurance!=1" >
	<div class="col-sm-4"></div>
	  <div class="col-sm-4">
                                                		  
                                                    </div>
          <div class="col-sm-4">
		  
                                                		<div class="form-group" style="margin-left:35%;">
                                                     <span class="btn btn-blue"><a  href="#/app/qaServiceINT" >New QA Issues(INT)</a></span>
													       
                                                      </div> </div>                                            
	</div>
		<div class="row" ng-hide="isEnable" ng-if="qaIssue.qualityAssurance!=0">
	<div class="col-sm-4"></div>
	  <div class="col-sm-4">
                                                		  
                                                    </div>
          <div class="col-sm-4">
		  
                                                		<div class="form-group" style="margin-left:35%;">
                                                       <span class="btn btn-blue" ><a  href="#/app/qaServiceEXT" >New QA Issues(EXT)</a></span>
                                                      </div> </div>                                            
	</div>
        <br/>-->
							
   
  <div class="row" ng-hide = "IsVisible || isEnable" >
		
                       		<div class="col-sm-6">
								<div class="radio"> 
									
                                    <label id="qaint">
                                     	<input type="radio" class="colored-blue" name="qualityAssurance" ng-model="qaIssue.qualityAssurance" value="0" checked="checked">
                                               <span class="text">QA(Int)</span>
                                               </label>
											   
                                        <label id="qaint"> &nbsp;&nbsp;
										
                                            <input type="radio" class="colored-blue" name="qualityAssurance" ng-model="qaIssue.qualityAssurance" value="1" >
                                               <span class="text">QA(Ext)</span>
                                            </label>
								</div>
							</div>
                            <div class="col-sm-3" ng-if="qaIssue.qualityAssurance!=1">
								<div class="form-group" style="margin-left:35%;">
                                                     <span class="btn btn-blue"><a  href="#/app/qaServiceINT" >New QA Issues(INT)</a></span>
													       
                                                      </div>
							</div>
							<div class="col-sm-3" ng-if="qaIssue.qualityAssurance!=0">
								<div class="form-group" style="margin-left:35%;">
                                                   <span class="btn btn-blue" ><a  href="#/app/qaServiceEXT" >New QA Issues(EXT)</a></span>
													       
                                                      </div>
							</div>
							</div><br/>
		<div class="row"  ng-if="qaIssue.qualityAssurance!=1" >
     								 <div class="col-lg-12 col-sm-12 col-xs-12">
									
                                        					<div class="row">
                                            					<div class="col-sm-4">
												                  <div class="row">
													               <div class="col-sm-12">
                                                		               <div class="form-group floating-label-wrapper">
<div class="form-group" ng-class="{ 'has-error' : qaServiceForm.fromdata.$invalid && (qaServiceForm.fromdata.$dirty || submitted)}">
  								
                                                     <label for="fromdate"></label>
    		        					          <input type="text" class="form-control datepicker " placeholder="From Date" maxlength="10" name="fromdata" ng-model="qaIssue.fromdata" data-input-mask="{mask: '00-00-0000'}"   id="fromdate"  ng-mouseover="ShowDatePicker();"  data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/" ng-change="GetQA(qaIssue.fromdata,qaIssue.todate,qaIssue.qualityAssurance,qaServiceForm)" with-floating-label/>
												    <p ng-show="qaServiceForm.fromdata.$error.required && (qaServiceForm.fromdata.$dirty || submitted)" class="help-block">Required</p>
					                	        </div>
                                                    </div>
                                                </div>
												
											
										</div>
										</div>
										
										<div class="col-sm-4">
												                  <div class="row">
													               <div class="col-sm-12">
                                                		               <div class="form-group floating-label-wrapper">

  								<div class="form-group" ng-class="{ 'has-error' : qaServiceForm.todate.$invalid && (qaServiceForm.todate.$dirty || submitted)}">
                                                     <label for="todate"></label>
    		        					          <input type="text" class="form-control datepicker " placeholder="To Date" maxlength="10" name="todate" ng-model="qaIssue.todate" data-input-mask="{mask: '00-00-0000'}"   id="todate"  ng-mouseover="ShowDatePicker();"   data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/" ng-change="GetQA(qaIssue.fromdata,qaIssue.todate,qaIssue.qualityAssurance,qaServiceForm)" with-floating-label/>
												  <p ng-show="qaServiceForm.todate.$error.required && (qaServiceForm.todate.$dirty || submitted)" class="help-block">Required</p>
					                	        </div>
                                                    </div>
                                                </div>
												
											
											
											
											
											
										</div>
											
												
											<!--	<div class="col-sm-2">
												<div class="row">
													 <div class="col-sm-12">
                                                		<div class="form-group" style="margin-left:35%;">
                                                       <button class="btn btn-blue" ng-click="GetQA(qaissuelist.customer,qaIssue.qualityAssurance);">Get QA Issues</button>
                                                      </div>  
                                                    </div>
                                                </div>
												</div>-->
												
												
											  </div>
											  
											</div>
											</div>
			</div>
											
			<div class="row"  ng-if="qaIssue.qualityAssurance!=0" >
     								 <div class="col-lg-12 col-sm-12 col-xs-12">
									
                                        					<div class="row">
                                            					<div class="col-sm-4">
												                  <div class="row">
													               <div class="col-sm-12">
                                                		               <div class="form-group floating-label-wrapper">
<div class="form-group" ng-class="{ 'has-error' : qaServiceForm.fromdataEXT.$invalid && (qaServiceForm.fromdataEXT.$dirty || submitted)}">
  								
                                                     <label for="fromdate"></label>
    		        					          <input type="text" class="form-control datepicker " placeholder="From Date" maxlength="10" name="fromdataEXT" ng-model="qaIssue.fromdataEXT" data-input-mask="{mask: '00-00-0000'}"   id="fromdate"  ng-mouseover="ShowDatePicker();"  data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/" ng-change="GetQAExt(qaIssue.fromdataEXT,qaIssue.todateExt,qaIssue.qualityAssurance,qaServiceForm)" with-floating-label/>
												    <p ng-show="qaServiceForm.fromdataEXT.$error.required && (qaServiceForm.fromdataEXT.$dirty || submitted)" class="help-block">Required</p>
					                	        </div>
                                                    </div>
                                                </div>
												
											
										</div>
										</div>
										
										<div class="col-sm-4">
												                  <div class="row">
													               <div class="col-sm-12">
                                                		               <div class="form-group floating-label-wrapper">

  								<div class="form-group" ng-class="{ 'has-error' : qaServiceForm.todateExt.$invalid && (qaServiceForm.todateExt.$dirty || submitted)}">
                                                     <label for="todate"></label>
    		        					          <input type="text" class="form-control datepicker " placeholder="To Date" maxlength="10" name="todateExt" ng-model="qaIssue.todateExt" data-input-mask="{mask: '00-00-0000'}"   id="todate"  ng-mouseover="ShowDatePicker();"   data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/" ng-change="GetQAExt(qaIssue.fromdataEXT,qaIssue.todateExt,qaIssue.qualityAssurance,qaServiceForm)" with-floating-label/>
												  <p ng-show="qaServiceForm.todateExt.$error.required && (qaServiceForm.todateExt.$dirty || submitted)" class="help-block">Required</p>
					                	        </div>
                                                    </div>
                                                </div>
												
											
											
											
											
											
										</div>
											
												
											<!--	<div class="col-sm-2">
												<div class="row">
													 <div class="col-sm-12">
                                                		<div class="form-group" style="margin-left:35%;">
                                                       <button class="btn btn-blue" ng-click="GetQA(qaissuelist.customer,qaIssue.qualityAssurance);">Get QA Issues</button>
                                                      </div>  
                                                    </div>
                                                </div>
												</div>-->
												
												
											  </div>
											  
											</div>
											</div>
			</div>									
												
	<div id="showtable">
<div class="row" ng-if="qaIssue.qualityAssurance!=1" >
    
    <div class="col-sm-12" align="center">
       
            
			<div class="table-responsive" style="width:100%;"  align="center">
									<section class="asdok">
										<div class="container1">
   
					<table ng-table="" class="table table-striped table-vmiddle" >
						<thead class="bordered-blue">
						<tr>
							<th ><span>Edit</span></th>
							<th><span>View</span></th>
							<th><span>Case Reference</span></th>
							<th><span>Date</span></th>
							<th><span>Description</span></th>
							<th><span>Serial No</span></th>
							<th><span>PDF</span></th>
							
							
							
						</tr>
					</thead>
					<tbody>
					<tr ng-repeat="qaissuedata in qaissueDatas" >
							<td style="width:1%; text-align:left;"><a  href="#/app/qaServiceINT" ng-click="ShowHide(qaissuedata.caseReferenceNumber);">  <span class="glyphicon glyphicon-pencil"></span></a></td>
							<td style="width:1%; text-align:left;"><a  href="#/app/qaServiceINT" ng-click="viewServices(qaissuedata.caseReferenceNumber);"  > <span class="glyphicon glyphicon-eye-open"></span></a></td>
							<td style="width:1%; text-align:left;">{{qaissuedata.caseReferenceNumber}}</td>
							<td style="width:1%; text-align:left;">{{qaissuedata.scaDate}}</td>
							<td style="width:2%; text-align:left;">{{qaissuedata.description}}</td>
							<td style="width:1%; text-align:left;">{{qaissuedata.serialno}}</td>
							<td style="width:1%; text-align:left;"><button ng-click="getprint(qaissuedata.caseReferenceNumber,qaIssue.fromdata,qaIssue.todate,qaIssue.qualityAssurance,qaServiceForm);"><span class="glyphicon glyphicon-print"></span></button></td>
							
							
						</tr>
					
						
					</tbody>
				</table>
				</div></section></div>
			</div>

            
       
    </div>
</div>
<div id="showtable">
<div class="row" ng-if="qaIssue.qualityAssurance!=0" >
    
    <div class="col-sm-12" align="center">
       
            
			<div class="table-responsive" style="width:100%;"  align="center">
									<section class="asdok">
										<div class="container1">
   
					<table ng-table="" class="table table-striped table-vmiddle" >
						<thead class="bordered-blue">
						<tr>
							<th ><span>Edit</span></th>
							<th><span>View</span></th>
							<th><span>Case Reference</span></th>
							<th><span>Date</span></th>
							<th><span>Description</span></th>
							<th><span>Serial No</span></th>
							<th><span>PDF</span></th>
							
							
							
						</tr>
					</thead>
					<tbody>
					<tr ng-repeat="qaissueExt in qaissueDatasExt" >
							<td style="width:1%; text-align:left;"><a  href="#/app/qaServiceEXT" ng-click="ShowHideExt(qaissueExt.caseReferenceNumber);">  <span class="glyphicon glyphicon-pencil"></span></a></td>
							<td style="width:1%; text-align:left;"><a  href="#/app/qaServiceEXT" ng-click="viewServices(qaissueExt.caseReferenceNumber);"  > <span class="glyphicon glyphicon-eye-open"></span></a></td>
							<td style="width:1%; text-align:left;">{{qaissueExt.caseReferenceNumber}}</td>
							<td style="width:1%; text-align:left;">{{qaissueExt.scaDate}}</td>
							<td style="width:2%; text-align:left;">{{qaissueExt.description}}</td>
							<td style="width:1%; text-align:left;">{{qaissueExt.serialno}}</td>
							<td style="width:1%; text-align:left;"><button ng-click="getprint(qaissueExt.caseReferenceNumber,qaIssue.fromdata,qaIssue.todate,qaIssue.qualityAssurance,qaServiceForm);"><span class="glyphicon glyphicon-print"></span></button></td>
							
							
						</tr>
					
						
					</tbody>
				</table>
				</div></section></div>
			</div>

            
       
    </div>
</div></div>

</form>
<div  id="records1" >
	 <br/><br/><br/>
	<div id="myDiv" style="border:thin solid #000000;height:auto;width:91%;margin-left:5%;">
	<table border="1" style="font-family:Arial, Helvetica, sans-serif; width:100%;" align="center" >

<tr style="text-align:center;"><img src="images/Untitled.png" /></tr>


				
						
						<tr class="styletr"  style="height:40px;">
						<td style=" padding-left:10px; width:10%;">SCA Claim No:</td>
						<td style="padding-left:10px; width:10%;">{{qaIssue.scaClaimno}}</td>
						<td style="padding-left:10px; width:10%;">Date:</td>
						<td style="padding-left:10px; width:10%;">{{qaIssue.scaDate}}</td>
						<td style="padding-left:10px; width:10%;">Case ReferenceNo:</td>
						<td style="padding-left:10px; width:10%;">{{qaIssue.caseReferenceNumber}}</td>
						</tr>	
						
							
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:10%;">SHI Mfg. No:</td><td colspan="5">{{qaIssue.shimfgno}}</td></tr>		
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:10%;"> Item Description: </td><td colspan="5">{{qaIssue.description}}</td></tr>	
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:9%;"> QA Issues For:</td><td colspan="5"> 
						<ul ><li class="ulClass" ng-repeat="qaissue in fruitSelection1">{{qaissue}}</li></ul>
						
						</td></tr>
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:9%;"> Action Required :</td><td colspan="5">
						<ul ><li class="ulClass" ng-repeat="action in fruitSelection">{{action}}</li>
						</ul></td></tr>
					
						<table border="1" style="font-family:Arial, Helvetica, sans-serif;border-collapse:collapse; width:100%; border:thin 1px " align="center"><thead><th>Serial No</th><th>Order No</th><th>Part No</th><th>Quantity</th><th>Package No</th><th>Item Description</th><th>To Cliam</th></thead><tbody><tr ng-repeat="item in items">
						<td>{{item.serialno}}</td>
						<td>{{item.orderno}}</td>
						<td>{{item.partno}}</td>
						<td>{{item.qty}}</td>
						<td>{{item.inPackageno}}</td>
						<td>{{item.itemDescription}}</td>
						<td>{{item.toClaim}}</td>
						</tr></tbody></table>
						
					<!--<tr  ng-repeat="step in stepsModel">
						<td> 
						   <img ng-src="data:image/png;base64,{{step.base64result}}" style="width:500px;height:250px;">
						</td>
					</tr>-->
				<!--	<tr>
					     <td class="polaroid" ng-repeat="step in stepsModel"><img ng-src="data:image/png;base64,{{step.base64result}}" style="width:100%">
							  <!--<div class="container2">
								<p>The Troll's tongue in Hardanger, Norway</p>
							  </div>
					       </td>
					</tr>-->
						
				</table>
				
				<div class="polaroid" ng-repeat="step in stepsModel">
					  <img ng-src="data:image/png;base64,{{step.base64result}}" class="imgCls">
					  <div class="container2">
						<p>{{step.imagedescription}}</p>
					  </div>
					</div>
				
	</div>			
 
 <%--<div class="row">
                            <div class="col-md-8">
                                <p><a ng-click="getprint();">Download PDF</a>
                                </p>
                            </div>
                        </div>--%>
 </div>

<div class="popups-cont">
	  <div class="popups-cont__overlay"></div>
	  <div class="popup">
    	<div class="popup__pieces"></div>
	    <div class="popup__content">
    	  	<div class="popup__close"></div>
		    <p class="popup__text">
				<div class="modal-body">
					<div class="row">
     					<div class="col-lg-12 col-sm-12 col-xs-12">                						
							<div class="row">
     							<div class="col-lg-12 col-sm-12 col-xs-12">  
                                	<div class="modal-body">
									
<div  id="records" >
	 <br/><br/><br/>
	<div id="myDiv" style="border:thin solid #000000;height:auto;width:91%;margin-left:5%;">
	<table border="1" style="font-family:Arial, Helvetica, sans-serif; border-collapse:collapse; width:100%;" align="center">

<tr style="text-align:center;"><img src="images/Untitled.png" /></tr>


				
						
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:10%;">SCA Claim No:</td><td style="border:solid 1px; padding-left:10px; width:10%;">{{qaIssue.scaClaimno}}</td><td style="border:solid 1px; padding-left:10px; width:10%;">Date:</td><td style="border:solid 1px; padding-left:10px; width:10%;">{{qaIssue.scaDate}}</td><td style="border:solid 1px; padding-left:10px; width:10%;">Case ReferenceNo:</td><td style="border:solid 1px; padding-left:10px; width:10%;">{{qaIssue.caseReferenceNumber}}</td></tr>		
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:10%;">SHI Mfg. No:</td><td colspan="5">{{qaIssue.shimfgno}}</td></tr>		
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:10%;"> Item Description :</td><td colspan="5">{{qaIssue.description}}</td></tr>	
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:9%;"> QA Issues For:</td><td colspan="5"> 
						<ul ><li class="ulClass" ng-repeat="qaissue in fruitSelection1">{{qaissue}}</li></ul>
						
						</td></tr>
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:9%;"> Action Required :</td><td colspan="5">
						<ul ><li  class="ulClass" ng-repeat="action in fruitSelection">{{action}}</li>
						</ul></td></tr>
					
						<table border="1" style="font-family:Arial, Helvetica, sans-serif;border-collapse:collapse; width:100%; border:thin 1px " align="center"><thead><th>Serial No</th><th>Order No</th><th>Part No</th><th>Quantity</th><th>Package No</th><th>Item Description</th><th>To Cliam</th></thead><tbody><tr ng-repeat="item in items">
						<td>{{item.serialno}}</td>
						<td>{{item.orderno}}</td>
						<td>{{item.partno}}</td>
						<td>{{item.qty}}</td>
						<td>{{item.inPackageno}}</td>
						<td>{{item.itemDescription}}</td>
						<td>{{item.toClaim}}</td>
						</tr></tbody></table>
						
					<!--<tr  ng-repeat="step in stepsModel">
						<td> 
						   <img ng-src="data:image/png;base64,{{step.base64result}}" style="width:500px;height:250px;">
						</td>
					</tr>-->
				<!--	<tr>
					     <td class="polaroid" ng-repeat="step in stepsModel"><img ng-src="data:image/png;base64,{{step.base64result}}" style="width:100%">
							  <!--<div class="container2">
								<p>The Troll's tongue in Hardanger, Norway</p>
							  </div>
					       </td>
					</tr>-->
						
				</table>
				
				<div class="polaroid" ng-repeat="step in stepsModel">
					  <img ng-src="data:image/png;base64,{{step.base64result}}" class="imgCls">
					  <div class="container2">
						<p>{{step.imagedescription}}</p>
					  </div>
					</div>
				
	</div>			
 
 <%--<div class="row">
                            <div class="col-md-8">
                                <p><a ng-click="getprint();">Download PDF</a>
                                </p>
                            </div>
                        </div>--%>
 </div>
 <br/>
 <div class="row" >
					<div class="col-sm-12" align="center">
						<button  class="btn btn-blue"  ng-click="getprintpdf();">Generate Pdf</button>
						<button  class="btn btn-blue"  ng-click="cancelPreview();">Cancel</button>
						
					</div>
					<div class="col-sm-6"></div>	
				</div>
 
 </div>
									</div>
									</div>
									</div></div></div></p></div></div></div>
 
 
 
 
 
 
	</div>		
									

</div>














