import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Helps you in being lazier',
    text: 'Since you dont have to search for it yourself and decide what source to use.',
  },
  {
    title: 'A good source to learn or hone your skills',
    text: 'A useful, free website that was decided upon creation. You dont have to worry about learning something not useful.',
  },
  {
    title: 'Shorter decision making time',
    text: 'You dont have to stress out on having mutliple sources since everything is together.',
  },
];

const Features = () => (
  <div className="cb__features section__padding" id="features">
    <div className="cb__features-heading">
      <h1 className="gradient__text">Help yourself now and in the future. Use our services to build your skills.</h1>
      <p>Register now to benefit from a variety of services!</p>
    </div>
    <div className="cb__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;