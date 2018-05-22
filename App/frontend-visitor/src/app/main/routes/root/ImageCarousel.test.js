import React from 'react';
import Slider from 'react-slick';
import { shallow, mount } from 'enzyme';
import ImageCarousel from './ImageCarousel';

// Testsuite for ImageCarousel.js
const data = {"dates":[{"date":"2018-04-18","events":[{"label":"IA-dagen","location":"NI:5","time":"15.00-17.00","description":"Här ska stå lite kort information om IA-dagen.","imgID":"ia.jpg","exhibitors":[{"exhibitionID":"0000","imgID":"mäklarbild.e2facb1e.jpg","label":"Gästföreläsning 1: Daniel Krusenstråhle, Fieldly","description":"Daniel Krusenstråhle är CEO på Fieldly etc etc."},{"exhibitionID":"1111","label":"Gästföreläsning 2: Anna Hahre, Capgemeni","description":"Här ska stå lite information om Anna Hahre (Capgemeni)."},{"exhibitionID":"2222","label":"Gästföreläsning 3: Johanna Blomgren, KAN","description":"Här ska stå lite information om Johanna Blomgren (KAN)."},{"exhibitionID":"3333","label":"Gästföreläsning 4: Jennie och Tobias, Boozt","description":"Här ska stå lite information om Jennie och Tobias (Boozt)."},{"exhibitionID":"0.7925508919293711","label":"re","description":"123"}]},{"label":"Kåren informerar - Kårfullmäktige","location":"NI:0","time":"12.00-15.00","description":"Kåren informerar om någonting viktigt","imgID":"kåren.jpg","exhibitors":[{"exhibitionID":"4444","label":"Kåren","description":"Information om Studentkåren Malmö."}]},{"label":"Sopplunch","location":"Kölsvinet (Kårhuset)","time":"11.30-13.30","description":"Varje onsdag bjuder Kåren på gratis sopplunch för medlemmar","imgID":"sopplunch.jpg","exhibitors":[{"exhibitionID":"5555","label":"Kåren","description":"Information om Studentkåren Malmö."},{"exhibitionID":"0.27480655549789534","label":"Test1","description":"123"}]},{"label":"Mäklarmässa","location":"Gäddan","time":"10.00-16.00","descrption":"Mäklarmässa för studenter på mäklarprogrammet","imgID":"mäklarbild.jpg","exhibitors":[{"exhibitionID":"6666","label":"Våningen & Villan","description":"Träffa mäklare från Våningen & Villan och ställ frågor om någonting kul"},{"exhibitionID":"7777","label":"Svensk Fastighetsförmedling","description":"Per Persson tog examen 2017 och jobbar numera på Svensk Fastighetsförmedling. Passa på att ställ frågor... etc etc"},{"exhibitionID":"8888","label":"Bjurfors","description":"Info om Bjurfors etc"}]}]},{"date":"2018-04-20","events":[{"label":"Gratis kaffe","location":"Kölsvinet (Kårhuset)","time":"","description":"Kåren tillgododser sina medlemmar med gratis kaffe","imgID":"kårenkaffe.jpg","exhibitors":[{"exhibitionID":"9999","label":"Kåren","description":"Nån info om Studentkåren Malmö?"}]}]},{"date":"2018-05-24","events":[{"label":"Projektutställning år 1","location":"NI:5","time":"10.00-14.00","description":"Studenter från kursen 'Systemutveckling och projekt' ställer ut sina projektarbeten","imgID":"projektutställning.jpg","exhibitors":[{"exhibitionID":"1010","label":"PACA","descripton":"Information om projektet PACA"},{"exhibitionID":"1011","label":"Politweet","descripton":"Information om projektet Politweet"},{"exhibitionID":"1112","label":"YourGeo","descripton":"Information om projektet YourGeo"},{"exhibitionID":"1113","label":"PACA 2","descripton":"Information om projektet PACA 2"},{"exhibitionID":"1114","label":"CleanUp","descripton":"Information om projektet CleanUp"},{"exhibitionID":"1115","label":"Förspelet","descripton":"Information om projektet Förspelet"},{"exhibitionID":"1116","label":"Fairytale Flavours","descripton":"Information om projektet PACA"},{"exhibitionID":"0.14439933066574717","label":"Deepbet","description":"AI som förutspår fotbollsmatcher och sånt"}]},{"label":"EF språkresor","location":"OR:0","time":"10.00-14.00","description":"EF språkresor informerar om utlandsstudier","imgID":"EF.jpg","exhibitors":[{"exhibitionID":"1117","label":"EF","description":"Info om EF"},{"exhibitionID":"0.9659852117821768","label":"Test","description":"123"}]}]}]};

describe('ImageCarousel', function() {
  it('should have className ImageCarousel', () => {
    const testData = [{"imageID": "ia.jpg", "eventLabel": "event1"}];
    const wrapper = shallow(
      <ImageCarousel
      imageID = {testData}
      />
    );
    expect(wrapper.hasClass("ImageCarousel"));
  });

  it('should render', function() {
    const wrapper = shallow(
      <Slider>
        <div>
          slide1
        </div>
      </Slider>
    );
    expect(wrapper.contains(
      <div
        tabIndex={-1}
        style={{
          width: "100%",
          display: "inline-block"
        }}
      >
        slide1
      </div>
    )).toBe(true);
  });
});
