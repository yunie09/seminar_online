import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function HomeCard() {
  const info = {
    text1: "Technology poses a detrimental effect on teenagers if not supervised. This issue is common among all teenagers regardless of location or culture. Technology is commonly used for communication, socialization, education, entertainment, and staying updated on what is currently happening around the world. In just a few seconds, people are able to connect with others around the world through their devices. This does give teens a more global perspective but also makes them vulnerable to misinformation and propaganda spreading on the internet, which leads to negative effects: cyberbullying and online harassment, peer pressure, device addiction, disrupted sleep patterns, stress, social isolation, behavioral problems, mental health problems, and more.",
    text2: "The world is constantly evolving, and so does the field of technology. Teens of the current generation can be negatively impacted by modern technologies if they are not educated or supervised by an adult, thus it is important to find solutions to address this problem and assist them in using technology with more responsibility. With this seminar, we want to give teenagers a free and accessible event that will help them become aware of digital literacy and find ways to  manage their use of technology. Parents and educators are also welcome to join.",
    text3: "The pervasive use of technology among teenagers has brought about various detrimental effects on their well-being and development. One significant concern is the impact on mental health. Excessive use of social media and constant connectivity can contribute to feelings of inadequacy, anxiety, and depression as teenagers compare themselves to idealized images and lifestyles portrayed online. Additionally, the sedentary nature of technology use can contribute to physical health issues, such as obesity and sleep disturbances, as teenagers spend extended periods in front of screens, often at the expense of outdoor activities and adequate rest.",
    text4: "Handling the detrimental effects of technology on teenagers requires a multi-faceted approach. First and foremost, fostering open communication is crucial. Parents and guardians should engage in regular conversations with teenagers about their online experiences, concerns, and feelings. Establishing clear guidelines and boundaries for screen time can help strike a balance between technology use and other essential activities. Encouraging teenagers to participate in offline activities, such as sports, hobbies, or socializing with friends in person, can provide a healthy counterbalance to digital engagement. Finally, promoting digital literacy and responsible online behavior is essential, empowering teenagers to make informed decisions about their online interactions and content consumption.",
    text5: "In summary, while technology offers numerous benefits, its detrimental effects on teenagers' mental and physical health cannot be ignored. Proactive involvement, open communication, and the establishment of healthy technology habits are essential components of effectively handling these challenges and supporting teenagers in navigating the digital landscape."

  }
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text={info.text1}
              path='/services'
            />
            <CardItem
              src='images/img2.jpg'
              text={info.text2}
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
