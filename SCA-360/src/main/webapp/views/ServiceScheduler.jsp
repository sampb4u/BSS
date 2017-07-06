
 <style type="text/css">
  .modal-body {
    position: relative;
    padding: 2px;
    margin-left: -1%;
}
  .yellowstyle {background-color: #FFFFC2;}
  .greenstyle{background-color:#FFBBFF;}
.heading {
    font-weight: bold;
    font-size: 198%;
    text-align: center;
    text-decoration-color: azure;
    color: blue;
	font-style: oblique;
}

.displaydate{margin-left: 245px;
padding: 1px 1px 1px 54px;}
	p {
    line-height: 25px;
    font-style: normal;
    font-style: normal;
    font-size: larger;
    margin-top: -4px;
    top: 76px;
    padding-left: 94px;
    font-family: inherit;
}



</style>   
     <style type="text/css">
 
#overlay {
    position: fixed;
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
  left: -115px;
  right:-10px;
  top: 0;
  width: 130%;
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
  width: 75%;
  height: 70%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
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
  padding: 30px;
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
  right: 80px;
  top: 20px;
  width: 40px;
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
	</script>
 <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-17352735-3']);
            _gaq.push(['_trackPageview']);
            (function () {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
			
        </script>

<style>
label {
  display: inline-block;
 
line-height: 2
}

<style>
  .full button span {
    background-color: limegreen;
    border-radius: 32px;
    color: black;
  }
  .partially button span {
    background-color: orange;
    border-radius: 32px;
    color: black;
  }
 
.fc-header-title h2 {
    font-size: .9em;
    white-space: normal !important;
}
.fc-view-month .fc-event, .fc-view-agendaWeek .fc-event {
    font-size:5000px;
    overflow: hidden;
  
}
.fc-view-agendaWeek .fc-event-vert {
    font-size: 0;
    
    width: 20px !important;
}
.fc-agenda-axis {
    width: 20px !important;
    font-size: .7em;
}

.fc-button-content {
    padding: 0;
}

.dateSelectors{
  float:left;
  margin-top:20px;
}
.table-scroll thead {
    display: table;
    width: 100%;
    table-layout: fixed;
}

.table-scroll tbody {
    max-height: 200px;
    overflow-y: auto;
    display: block;
    width: 100%;
    table-layout: fixed;
}

.table-scroll tr {
    display: table;
    table-layout: fixed;
    width: 100%;
}

.table-scroll td {
    height: 70px; // needed in order to keep rows from collapsing
}

#pageHeadding
{
	font-size: 25px;
	font-weight: 300;
	color: #000000;
	text-align: center;
	margin: 0px 0px;
	padding: 0px 0px;
}
 
</style>

<!--<style>
/* 
Just make this block scrollable 
*/
#scrollable-area {
  margin: auto;
	width: 100%;
	height: 400px;
	border: 2px solid #ccc;
	overflow-y: scroll; /* <-- here is what is important*/
}


/* table styles */
body {
	font-family: Arial;
	font-size: 12px;
}

#headcolor {
	background: #efefef;
}
table {
  width: 100%;
  border-spacing:0;
  margin:0;
}
table th , table td  {
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
   border-bottom: 1px solid #ccc;
}
</style>-->
<style>
.table > caption + thead > tr:first-child > th, .table > colgroup + thead > tr:first-child > th, .table > thead:first-child > tr:first-child > th, .table > caption + thead > tr:first-child > td, .table > colgroup + thead > tr:first-child > td, .table > thead:first-child > tr:first-child > td {
    border-top: 0;
    background-color: #E0EEEE;;
}
.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: solid 1px;
    padding-top: 0%;
    font-weight: heritica;
	color: #009ACD;
	font-weight: normal;
}
.table th span1 {
    position: absolute;
    background: transparent;
    color: #333333;
    top: 0;
    color: #000000;
    margin-top: 9px;
}
.table th span {
    position: absolute;
    background: transparent;
    color: #333333;
    top: 0;
    color: #000000;
    margin-top: 9px;
}

.asdoknew {
    position: relative;
    padding-top: 43px;
    color: #333333;
    border: solid;
    background-color: #E0EEEE;;
}
.container
		{
			margin-left:30px;
			width:95%;
			 padding-top: 48px;
			  			  
			
		}

.asdok 
		{
			  position: relative;
			  padding-top: 48px;
			  			 
			  color:#333333;
			  	 border:solid;
				
    background-color: #E0EEEE;;
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
			  height: 300px;
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
		.table th span
		{
			  position: absolute;
			  background: transparent;
			  color: #333333;
			  top: 0;
			  color:#000000;
			
			  
			  
			   
		}
		.table th:first-child div
		{
			  border: none;
			 
		}

</style>
<style>.fc td.fc-today {
    border-style: double;
    background-color:#CD5C5C;
}

.fc td, .fc th {
    border-style: solid;
    border-width: 1px;
    padding: 0;
    vertical-align: top;
    background-color: #C0C0C0;
}
.fc .fc-toolbar > * > :first-child {
    margin-left: 0;
    color: #fffff;
    background-color: #E0EEEE;
}
</style>
<style>#popup_box {
    display: none;
    position: fixed;
	 
   
    _position: absolute;
    height: 223px;
    width: 29%;
    background: #FFFFFF;
    left: 300px;
    top: 200px;
    z-index: 50px;
    margin-left: 289px;
    border: 2px solid #000000;
    padding: 29px;
    padiing-top: 25px;
    -moz-box-shadow: 0 0 5px #CCCCCC;
    -webkit-box-shadow: 0 0 5px #CCCCCC;
    box-shadow: 0 0 5px #CCCCCC;
    margin-top: 28px;
	 overflow-x: hidden;
	 
	 
}
.overlay div {
   margin: 15vh auto;
   width: 80%;
   max-width: 650px;
   padding: 30px;
   min-height: 200vh;
   background: rgba(255,255,255, .95);
}
.overlay {
    background:  rgba(40,40,40, .75);
}
.fc-event .fc-content {
    position: relative;
    z-index: 5;
}
.tooltip-inner {
   
     z-index: 1020;
  
}
#completdate{
margin-left: -60%;
}

</style>
<script type="text/javascript">
     

        $(function() {
            $('.chosen-select').chosen();
        });
    </script>


						
                						
        <div   data-ng-controller="serviceschedule1 as vm" ng-init="getinspectionvalues();getLoadEvents();addpendingqty();LoadInquiryStatus();LoadStatusMultiple();LoadRemarks();"> 
      <!--<div class="horizontal-space"></div>-->
<div class="row">
     <div class="col-xs-12 col-md-12">
        <div class="well with-header">
            <div class="header bordered-blue" id="pageHeadding">
             Service Scheduler
            </div>
	

			<!--<div class="row"  >
                       		<div class="col-sm-5" >
								<div class="radio"  > 
									
                                    <label id="">
                                     	<input type="radio" class="colored-blue" name="New" ng-model="serviceSchedule.New" value="0" checked="checked"  ng-click="getSchedulerDetails(serviceSchedule.New);" >
                                               <span class="text">Inspection</span>
                                               </label>
											   
                                        <label id=""> &nbsp;&nbsp;
										
                                            <input type="radio" class="colored-blue" name="New" ng-model="serviceSchedule.New" value="1"  ng-click="getSchedulerDetails(serviceSchedule.New);" >
                                               <span class="text">Assembly</span>
                                            </label>
											
								</div>
							</div>
                    		<div class="col-sm-7" >
							<p style='text-align:right;font-weight:bold;margin-top: 13px;'>OverHaul : <input type='text' size='3' style='background-color:#FFBBFF;' readonly> &nbsp;&nbsp; Onsite : 
<input type='text' size='3' readonly style='background-color:#FFFFC2;'> </p>
							</div>
							
							</div>-->
			</br>
			
		<div class="row"  >
		<label style="margin-left: -290px;
margin-top: -26px;
color: black;
font-size: 20px;">Search</label>
		<div class="col-sm-2"  >
                      

						<label for=""></label>
                            <input type="text" class="form-control" id="Model"   data-ng-required="true"  data-ng-model="schedule.item"  name="item" placeholder=""  ng-blur="getOnLoadTable(schedule.item);">
							


                        </div>
             <div class="col-sm-5" style="white-space:nowrap; margin:0; padding:0; width:10%;" >
								<div class="radio" align="center"> 
									
                                    <label id="">
                                     	<input type="radio" class="colored-blue" name="SearchCust" ng-model="schedule.value" value="0" checked="checked" ng-click="getSearch(schedule.value,schedule.item);">
                                               <span class="text">Service Inquiry No</span>
                                               </label>
									<label id=""> &nbsp;&nbsp;&nbsp;
										
                                            <input type="radio" class="colored-blue" name="SearchCust" ng-model="schedule.value" value="1"  ng-click="getSearch(schedule.value,schedule.item);">
                                               <span class="text">Model No</span>
                                            </label>
											<label id=""> &nbsp;&nbsp;
										
                                            <input type="radio" class="colored-blue" name="SearchCust" ng-model="schedule.value" value="2" ng-click="getSearch(schedule.value,schedule.item);" >
                                               <span class="text">Serial No</span>
                                            </label>
											<label id=""> &nbsp;&nbsp;
										
                                            <input type="radio" class="colored-blue" name="SearchCust" ng-model="schedule.value" value="3" ng-click="getSearch(schedule.value,schedule.item);" >
                                               <span class="text">Inquiry Date</span>
                                            </label>	
													   
                                        
								</div>
							</div>       
							</div>
						<div class="row"  >	
                       		<div class="col-sm-5" ></div>
		<div class="col-sm-7" >
							<p style='text-align:right;font-weight:bold;margin-top: 13px;'>OverHaul : <input type='text' size='3' style='background-color:#FFBBFF;' readonly> &nbsp;&nbsp; OnSite : 
<input type='text' size='3' readonly style='background-color:#FFFFC2;'> </p>
							</div>
		</div>
			
		
			 
			      
			  <div class="table-responsive">
									<section class="asdoknew">
										<div class="container1">
   
					<table ng-table=""  class="table table-striped table-vmiddle"  >
						<thead class="bordered-blue">
							<tr style="">
								<th ><span1><b>Service Inquiry No</b></span1></th>
													<!--<th ><span1><b>Contract No</b></span1></th>-->
													<th  ><span1><b>Model No</b></span1></th>
													
													<th  ><span1><b>Serial No</b></span1></th>
													<th  ><span1><b>Inquiry Date</b></span1></th>
													<th ><span1><b>Scheduled Date</b></span1></th>
													<th ><span1><b>Status</b></span1></th>
													<th  ><span1><b>Save</b></span1></th>
													<th  ><span1><b>More</b></span1></th>
													
													
													
												
													
							</tr>
						</thead>
						<tbody>
				
						
						<tr ng-repeat="schedule in serviceSchedules">
						<td style="width:1.5%" ng-class="{yellowstyle: schedule.serviceLocation=='0',greenstyle: schedule.serviceLocation=='1'}">{{schedule.caseReferenceno}}
<input type="hidden" class="form-control" ng-model = "schedule.caseReferenceno"  name = "caseReferenceno{{$index}}">
<input type="hidden" class="form-control" ng-model = "schedule.serviceLocation"  name = "serviceLocation{{$index}}">
</td>
						<td   style="width:1.5%" ng-class="{yellowstyle: schedule.serviceLocation=='0',greenstyle: schedule.serviceLocation=='1'}">{{schedule.selectedModel}}
<input type="hidden" class="form-control" ng-model = "schedule.selectedModel"  name = "selectedModel{{$index}}"></td>
						<td  style="width:1.5%"  ng-class="{yellowstyle: schedule.serviceLocation=='0',greenstyle: schedule.serviceLocation=='1'}">{{schedule.itemSerialno}}	<input type="hidden" class="form-control" ng-model = "schedule.itemSerialno"  name = "itemSerialno{{$index}}"></td>
						<td style="width:1%"  ng-class="{yellowstyle: schedule.serviceLocation=='0',greenstyle: schedule.serviceLocation=='1'}">{{schedule.inquiryDate}}<input type="hidden" class="form-control" ng-model = "schedule.inquiryDate"  name = "inquiryDate{{$index}}" ></td>
						<td style="width:1.2%"  ng-class="{yellowstyle: schedule.serviceLocation=='0',greenstyle: schedule.serviceLocation=='1'}"><input type="text"  size="4"  class="form-control datepicker" ng-model="schedule.inspectionDate"  ng-mouseover="ShowDatePicker();" name=" inspectionDate{{$index}}" data-input-mask="{mask: '00-00-0000'}" data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/"  ng-change="getInspectionDate(schedule.inspectionDate,$index)" />
						</td>
								
						<td style="width:2%;overflow:visible;z-index: 1;"  ng-class="{yellowstyle: schedule.serviceLocation=='0',greenstyle: schedule.serviceLocation=='1'}">
						
						<!--<select class="form-control"    data-ng-model="schedule.inquiryStatus"  ng-options="inquiryStatus.seqid as inquiryStatus.status for inquiryStatus in inquiryStatuses " name="inquiryStatus{{$index}}" > 
					   			
											
					</select>-->
					<div class="bs-example">
					<ui-select multiple  autofocus="true"
										ng-model="schedule.serviceStatus" name="sscCode" id="SscCode" theme="select2"    style="width:200px;" remove-selected="false">
                                       
                                            <ui-select-match >{{$item.seqno}}</ui-select-match>
                                            
                                            <ui-select-choices repeat="sscCode.seqno as sscCode in availableSSCCode | filter:$select.search">
                                              
                                              <!--<div ng-bind-html="formData.id | highlight: $select.search"></div>-->
                                                <small ng-bind-html="sscCode.seqnoshortcutnamename | highlight: $select.search"></small>
                                            </ui-select-choices>
                                        </ui-select>
										</div>
					</td>
						
						
						
						
						
					
						
						
						<td style="width:1%" ><button type="button" class="btn btn-default"  ng-click="saveinspective(schedule.caseReferenceno,schedule.inquiryDate,schedule.inspectionDate,schedule.inquiryStatus,serviceSchedule.New,schedule.serviceLocation,schedule.itemSerialno,schedule.serviceStatus);"><img src="image/save-icon.png" style=" width:25px;"/></button></td>
						    <td style="width:1%;"><button type="button" class="btn btn-default"  ng-click="openmodel($index,schedule.itemSerialno);"><span class="glyphicon glyphicon-info-sign" style="color:#000000"></span></button></td>                                     
                                                    
		
	
                                                    
                                                    
		</tr>
						
								
							
					
								
							</tbody>
					</table>
				</div>
				</section>
				</div>
				
				
				<br/>
		
			
			
			
		
		
			
			
			
			
			<!--<div class="table-responsive" ng-if="serviceSchedule.New==1">
									<section class="asdoknew">
										<div class="container1">
			
			 
			        
					<table class="table table-striped table-hover">
						<thead class="bordered-blue">
							<tr >
								<th ><span><b>ServiceInquiry No</b></span></th>
													<th><span><b>Model No</b></span></th>
													<th ><span><b>Serial No</b></span></th>
													<th ><span><b>Inquiry Date</b></span></th>
												<th ><span><b>Assembly Date</b></span></th>
													
													<th ><span><b>Due Date </b></span></th>
													
													<th  ><span><b>Status</b></span></th>

													<th ><span><b>save</b></span></th>
													
												
													
							</tr>
						</thead>
						<tbody>
				
						
						<tr ng-repeat="scheduleAssembly in serviceSchedulesAssembly">
						<td style="width:1%">{{scheduleAssembly.caseReferenceno}}
<input type="hidden" class="form-control" ng-model = "scheduleAssembly.caseReferenceno"  name = "caseReferenceno{{$index}}"></td>
						<td style="width:1%">{{scheduleAssembly.selectedModel}}
<input type="hidden" class="form-control" ng-model = "scheduleAssembly.selectedModel"  name = "selectedModel{{$index}}"></td>
						<td style="width:1%">	{{scheduleAssembly.itemSerialno}}<input type="hidden" class="form-control" ng-model = "scheduleAssembly.itemSerialno"  name = "itemSerialno{{$index}}"></td>
						<td style="width:1%">{{scheduleAssembly.inquiryDate}}<input type="hidden" class="form-control" ng-model = "scheduleAssembly.inquiryDate"  name = "inquiryDate{{$index}}"></td>
						<td style="width:1%" ><input type="text"  size="4"  class="form-control datepicker" ng-model="scheduleAssembly.assemblyDate"  ng-mouseover="ShowDatePicker();" name=" assemblyDate{{$index}}" data-input-mask="{mask: '00-00-0000'}" data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/"  />
						</td>
						<td style="width:1%" ><input type="text"  size="4"  class="form-control datepicker" ng-model="scheduleAssembly.dueDate"  ng-mouseover="ShowDatePicker();" name=" dueDate{{$index}}" data-input-mask="{mask: '00-00-0000'}" data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/"  />
						</td>
						<td style="width:2%"><select class="form-control"    data-ng-model="scheduleAssembly.inquiryStatus"  ng-options="inquiryStatus.inquiryStatus as inquiryStatus.inquiryStatus for inquiryStatus in inquiryStatusesOnloadAssembly " name="inquiryStatus{{$index}}" > 
					   			
											
					</select></td>
						
						
						
						
					
						
						
						<td style="width:1%"><button type="button" class="btn btn-default"  ng-click="saveAssembly(scheduleAssembly.caseReferenceno,scheduleAssembly.inquiryDate,scheduleAssembly.assemblyDate,scheduleAssembly.inquiryStatus,serviceSchedule.New,scheduleAssembly.serviceLocation,scheduleAssembly.itemSerialno);"><img src="image/save-icon.png" style=" width:25px;"/></button></td>
		
		
	
                                                    
                                                    
		</tr>
						
								
							
					
								
							</tbody>
					</table>
				
			</div>
			</section>
			</div>-->
		
			
		
		<div  id="popup_box"  >
<div style="height:100%; background-color:#FFFFFF;" >
                                
                                
						    <div class="row">
						   
						   <div class="col-sm-8">
								<div class="form-group floating-label-wrapper">
													 <label for="Contractno"></label>
                                                        <input type="text" class="form-control"   id="Contractno"  placeholder="Customer remarks"   name="remarks"  data-ng-model="serviceSchedule.remarks"   readonly="true" with-floating-label >
                                                  
                                                      </div>  
                                                    </div></div>
											 
												 <div class="row">	<div class="col-sm-8">
								 <div class="form-group floating-label-wrapper">
													 <label for="country"></label>
                                                        <input type="text" class="form-control"   id="country"  placeholder="Accessories"   name="accessories"  data-ng-model="serviceSchedule.accessories"   readonly="true"  with-floating-label >
                                                  
                                                      </div>  
                                                    </div>
						  
						  
						  </div> 
						  
						 <div style="text-align:center;display:; background-color:#FFFFFF;">
						<button type="button"   class="btn btn-primary"	ng-disabled="" ng-click="cancelPopup();">Close</button></div>
						 </div></div>

<div class="row" >
        <div class="col-md-12">
            <div id="calendar" ui-calendar="uiConfig.calendar"  class="span8 calendar" ng-model="eventSources" calendar="myCalendar"></div>
        </div>
        
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
								<div class="row" align="center">	<span style="text-align:center">	<b class="heading">Service   Inquiries Scheduled  </b></span></div>
								<!--<div class="row" align="center" ng-if="serviceSchedule.New==1">	<span style="text-align:center">	<b class="heading">{{displayServiceLocation}}   Inquiries Scheduled For Assembly </b></span></div>-->
								<div class="row">
								<div class="col-sm-3" align="">
								</div>
								<div class="col-sm-3" align="">
								</div><div class="col-sm-3" align="">
								</div>
								<div class="col-sm-1" >
						<b>	DATE:</b>	
								</div>
								 <div class="col-sm-2" align="left" class="displaydate" style="margin-left:-55px;" >
							<b>{{dispalyMessgae}}</b>
																																																																
								<p> <b></b> </p>  
								</div>
								</div>
                               <div id="tabledata" >
                                 <form name="ProductionForm" novalidate ng-submit="">
								
								
							  <div class="table-responsive" >
									<section class="asdoknew">
										<div class="container1">
   
					<table ng-table="" class="table table-striped table-vmiddle">
		
							 
										<thead class="bordered-blue">
											<tr >
											
											
												<th><span><b>Customer</b></span></th>
												
												<th  ><span><b>Service Inq<br/> No</b></span></th>
												<th  ><span><b>Model No</b></span></th>
												<th ><span><b>Serial No</b></span></th>
												
												
												
												
												
												<th ><span><b>Service <br/>InquiryDate</b></span></th>
												
													<th  ><span><b>Inspection <br/>Date</b></span></th>
													<th  ><span><b>Completed<br/> Date</b></span></th>
													<th  ><span><b>Remarks</b></span></th>
													<th  ><span><b>Status</b></span></th>
													<!--<th  ><span><b></b></span></th>-->
														
												
													
												
												
									
											</tr>
										</thead>									
										<tbody>
                           
		<tr ng-repeat="schedulea in schedulerPopData">
		
					<td style="width:2%;">{{schedulea.customer}}
<input type="hidden" class="form-control" ng-model = "schedulea.customer"  name = "customer{{$index}}"></td>
						<td style="width:1.5%;">{{schedulea.caseReferenceno}}
<input type="hidden" class="form-control" ng-model = "schedulea.caseReferenceno"  name = "caseReferenceno{{$index}}"></td>
						<td style="width:1%;">{{schedulea.selectedModel}}
	<input type="hidden" class="form-control" ng-model = "schedulea.modelno"  name = "modelno{{$index}}"></td>
						<td style="width:1.5%;">{{schedulea.itemSerialno}}
<input type="hidden" class="form-control" ng-model = "schedulea.itemSerialno"  name = "itemSerialno{{$index}}"></td>
						
						
						
						
				<td style="width:1%;">{{schedulea.inquiryDate}}<input type="hidden" class="form-control" ng-model = "schedulea.inquiryDate"  name = "inquiryDate{{$index}}"></td>
			
						<td  style="width:1%;"><input type="text"  class="form-control datepicker" ng-model="schedulea.inspectionDate"  ng-mouseover="ShowDatePicker();" name=" inspectionDate{{$index}}" data-input-mask="{mask: '00-00-0000'}" data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/"  ng-change="getDateCompare(schedulea.inspectionDate,schedulea.completionDate,$index)" />
						</td >
						<td style="width:1%;" ><input type="text"   class="form-control datepicker" ng-model="schedulea.completionDate"  ng-mouseover="ShowDatePicker();" name=" completionDate{{$index}}" data-input-mask="{mask: '00-00-0000'}" data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/"  ng-change="getDateValidation(schedulea.completionDate,$index)" />
						  <!--<p  id="completdate" class="completevalidate{{$index}}" style="color:#FF0000; display:none;" >not valid</p>	-->
						</td>
								
						<!--<td style="width:2%;" ng-if="schedulea.currentState=='true' "><div ><select class="form-control"    data-ng-model="schedulea.inquiryStatus"  ng-options="inquiryStatus.inquiryStatus as inquiryStatus.inquiryStatus for inquiryStatus in inquiryStatusesInspection " name="inquiryStatus{{$index}}" ng-disabled="false" > 
					   			
											
					</select></div></td>-->	
					<!--ng-if="schedulea.currentState!='true' "-->
					
					<td style="width:2%;" >
						
						<!--<select class="form-control"    data-ng-model="schedulea.inquiryStatus"  ng-options="inquiryStatus.inquiryStatus as inquiryStatus.inquiryStatus for inquiryStatus in inquiryStatuSmultiple " name="inquiryStatus{{$index}}" ng-disabled="true" > 
					   			
											
					</select>-->
					
 										
                                        <ui-select multiple ng-model="schedulea.remarks" name="remarks" id="remarks" theme="select2"  style="width:200px; " remove-selected="false">
                                       
                                            <ui-select-match >{{$item.remarksid}}</ui-select-match>
                                            
                                            <ui-select-choices repeat="remarks.remarksid as remarks in serviceRemarks | filter:$select.search">
                                              
                                              <!--<div ng-bind-html="formData.id | highlight: $select.search"></div>-->
                                                <small ng-bind-html="remarks.remarks | highlight: $select.search"></small>
                                            </ui-select-choices>
                                        </ui-select>
										
                                      
					
					</td>
						<td style="width:2%;" >
						
						<!--<select class="form-control"    data-ng-model="schedulea.inquiryStatus"  ng-options="inquiryStatus.inquiryStatus as inquiryStatus.inquiryStatus for inquiryStatus in inquiryStatuSmultiple " name="inquiryStatus{{$index}}" ng-disabled="true" > 
					   			
											
					</select>-->
					
 										
                                        <ui-select multiple  autofocus="true"
										ng-model="schedulea.serviceStatus" name="sscCode" id="SscCode" theme="select2"  style="width:200px; " remove-selected="false">
                                       
                                            <ui-select-match >{{$item.seqno}}</ui-select-match>
                                            
                                            <ui-select-choices repeat="sscCode.seqno as sscCode in availableSSCCode | filter:$select.search">
                                              
                                              <!--<div ng-bind-html="formData.id | highlight: $select.search"></div>-->
                                                <small ng-bind-html="sscCode.seqnoshortcutnamename | highlight: $select.search"></small>
                                            </ui-select-choices>
                                        </ui-select>
										
                                      
					
					</td>
						
					<!--<td style="width:0.5%;"><div class="radio" > 
									
                                    <label id="">    
                                     	<input type="checkbox" class="colored-blue" name="checkPacking{{index}}" ng-model="schedulea.checkPacking" ng-click="getDetailsScheduled(schedulea.caseReferenceno,schedulea.inquiryDate,schedulea.inspectionDate,schedulea.completionDate,schedulea.inquiryStatus,displayServiceLocation,schedulea.checkPacking,serviceSchedule.New,$index,schedulea.itemSerialno)"  >
                                            <span class="text"></span>
 
                                        
                                               </label>
											
								</div></td>-->
		
		
	
                                                    
                                                    
		</tr>
				
					
							
				
							
							
						
				
                            
                        </tbody>
									</table>
									
							</div>	</section>						</div>
                       		<!--<div class="table-responsive" >
									<section class="asdoknew">
										<div class="container1">
   
					<table ng-table="" class="table table-striped table-vmiddle">
		
							 
										<thead class="bordered-blue">
											<tr >
											
											
												<th><span><b>Customer</b></span></th>
												
												<th  ><span><b>Service Inq<br/> No</b></span></th>
												<th  ><span><b>Model No</b></span></th>
												<th ><span><b>Serial No</b></span></th>
												
												
												
												
												
												<th ><span><b>Service <br/>InquiryDate</b></span></th>
												
													<th  ><span><b>Assembly <br/>Date</b></span></th>
													<th  ><span><b>Completed<br/> Date</b></span></th>
													<th  ><span><b>Status</b></span></th>
													<th  ><span><b></b></span></th>
														
												
													
												
												
									
											</tr>
										</thead>									
										<tbody>
                           
		<tr ng-repeat="scheduleaAssembly in schedulerPopDataAssembly">
					<td style="width:2%;">{{scheduleaAssembly.customer}}
<input type="hidden" class="form-control" ng-model = "scheduleaAssembly.customer"  name = "customer{{$index}}"></td>
						<td style="width:1.5%;">{{scheduleaAssembly.caseReferenceno}}
<input type="hidden" class="form-control" ng-model = "scheduleaAssembly.caseReferenceno"  name = "caseReferenceno{{$index}}"></td>
						<td style="width:1%;">
	<input type="hidden" class="form-control" ng-model = "scheduleaAssembly.modelno"  name = "modelno{{$index}}"></td>
						<td style="width:1.5%;">{{scheduleaAssembly.itemSerialno}}
<input type="hidden" class="form-control" ng-model = "scheduleaAssembly.itemSerialno"  name = "itemSerialno{{$index}}"></td>
						
						
						
						
				<td style="width:1%;">{{scheduleaAssembly.inquiryDate}}<input type="hidden" class="form-control" ng-model = "scheduleaAssembly.inquiryDate"  name = "inquiryDate{{$index}}"></td>
			
						<td  style="width:1%;"><input type="text"  class="form-control datepicker" ng-model="scheduleaAssembly.inspectionDate"  ng-mouseover="ShowDatePicker();" name=" inspectionDate{{$index}}" data-input-mask="{mask: '00-00-0000'}" data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/"  ng-change="getDateCompareAssembly(scheduleaAssembly.inspectionDate,scheduleaAssembly.completionDate,$index);" />
						</td >
						<td style="width:1%;" ><input type="text"   class="form-control datepicker" ng-model="scheduleaAssembly.completionDate"  ng-mouseover="ShowDatePicker();" name=" completionDate{{$index}}" data-input-mask="{mask: '00-00-0000'}" data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/"  ng-change="getDateValidationAssembly(scheduleaAssembly.completionDate,$index);" />
						
						</td>
								
						<td style="width:2%;" ng-if="scheduleaAssembly.currentState=='true' "><div ><select class="form-control"    data-ng-model="scheduleaAssembly.inquiryStatus"  ng-options="inquiryStatus.inquiryStatus as inquiryStatus.inquiryStatus for inquiryStatus in inquiryStatusesAssembly " name="inquiryStatus{{$index}}" ng-disabled="false" > 
					   			
											
					</select></div></td>	
						<td style="width:2%;" ng-if="scheduleaAssembly.currentState!='true' "><div ><select class="form-control"    data-ng-model="scheduleaAssembly.inquiryStatus"  ng-options="inquiryStatus.inquiryStatus as inquiryStatus.inquiryStatus for inquiryStatus in inquiryStatusesAssembly " name="inquiryStatus{{$index}}" ng-disabled="true" > 
					   			
											
					</select></div></td>
						
					<td style="width:0.5%;"><div class="radio" > 
									
                                    <label id="">    
                                     	<input type="checkbox" class="colored-blue" name="checkPacking{{index}}" ng-model="scheduleaAssembly.checkPacking" ng-click="getDetailsScheduled(scheduleaAssembly.caseReferenceno,scheduleaAssembly.inquiryDate,scheduleaAssembly.inspectionDate,scheduleaAssembly.completionDate,scheduleaAssembly.inquiryStatus,displayServiceLocation,scheduleaAssembly.checkPacking,serviceSchedule.New,$index,scheduleaAssembly.itemSerialno)"  >
                                            <span class="text"></span>
 
                                        
                                               </label>
											
								</div></td>
		
		
	
                                                    
                                                    
		</tr>
				
					
							
				
							
							
						
				
                            
                        </tbody>
									</table>
									
							</div>	</section>						</div>-->
							<div class="row" >
					<div class="col-sm-12" align="center">
						<button type="submit" class="btn btn-blue"  ng-click="savePopScheduledDetails();">Save</button>
						<button type="button" class="btn btn-blue"  ng-click="CancelScheduledDetails();">Cancel</button>
						
					</div>
					<div class="col-sm-6"></div>	
				</div>
								
							</form>	
								
								
                               	
                           </div>
						   
                        </div>       					
				            	</div>
				  			</div>
				  		</div>		            
                    </div>
                 </div>	  
			  </p>
	    </div>
	  </div>
	</div>


	
            
	
</div>
</div>
</div>

	