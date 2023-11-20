import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ServiceCard() {
  const info = {
    text1: "Technology poses a detrimental effect on teenagers if not supervised. This issue is common among all teenagers regardless of location or culture. Technology is commonly used for communication, socialization, education, entertainment, and staying updated on what is currently happening around the world. In just a few seconds, people are able to connect with others around the world through their devices. This does give teens a more global perspective but also makes them vulnerable to misinformation and propaganda spreading on the internet, which leads to negative effects: cyberbullying and online harassment, peer pressure, device addiction, disrupted sleep patterns, stress, social isolation, behavioral problems, mental health problems, and more.",
    text2: "The world is constantly evolving, and so does the field of technology. Teens of the current generation can be negatively impacted by modern technologies if they are not educated or supervised by an adult, thus it is important to find solutions to address this problem and assist them in using technology with more responsibility. With this seminar, we want to give teenagers a free and accessible event that will help them become aware of digital literacy and find ways to  manage their use of technology. Parents and educators are also welcome to join.",
    text3: "The pervasive use of technology among teenagers has brought about various detrimental effects on their well-being and development. One significant concern is the impact on mental health. Excessive use of social media and constant connectivity can contribute to feelings of inadequacy, anxiety, and depression as teenagers compare themselves to idealized images and lifestyles portrayed online. Additionally, the sedentary nature of technology use can contribute to physical health issues, such as obesity and sleep disturbances, as teenagers spend extended periods in front of screens, often at the expense of outdoor activities and adequate rest.",
    text4: "Handling the detrimental effects of technology on teenagers requires a multi-faceted approach. First and foremost, fostering open communication is crucial. Parents and guardians should engage in regular conversations with teenagers about their online experiences, concerns, and feelings. Establishing clear guidelines and boundaries for screen time can help strike a balance between technology use and other essential activities. Encouraging teenagers to participate in offline activities, such as sports, hobbies, or socializing with friends in person, can provide a healthy counterbalance to digital engagement. Finally, promoting digital literacy and responsible online behavior is essential, empowering teenagers to make informed decisions about their online interactions and content consumption.",
    text5: "Parents play a crucial role in guiding their children through the potential detrimental effects of technology. First and foremost, maintaining open and non-judgmental communication is key. Establishing a safe space where children feel comfortable discussing their online experiences, challenges, and concerns is essential. Parents can initiate conversations by expressing genuine interest in their children's digital lives, asking about their favorite online activities, and actively listening to any issues they may be facing. By fostering an open dialogue, parents can gain insights into their children's online behaviors and help address any negative effects in a supportive manner.",
    text6: "Additionally, setting clear and reasonable boundaries for technology use is important. Establishing age-appropriate guidelines for screen time, social media usage, and online content can help children develop healthy habits. Parents should lead by example, demonstrating responsible technology use and modeling the importance of balance between online and offline activities. Encouraging alternative activities, such as outdoor play, reading, or creative pursuits, can provide children with diverse experiences and reduce excessive reliance on screens. By actively engaging in their children's digital lives and promoting a balanced approach, parents can guide their children toward responsible and mindful technology use. In summary, while technology offers numerous benefits, its detrimental effects on teenagers' mental and physical health cannot be ignored. Proactive involvement, open communication, and the establishment of healthy technology habits are essential components of effectively handling these challenges and supporting teenagers in navigating the digital landscape."

  }
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img.jpg'
              text={info.text3}
              path='/services'
            />
            <CardItem
              src='images/img3.jpg'
              text={info.text4}
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img4.jpg'
              text={info.text5}
              path='/services'
            />
            <CardItem
              src='images/img5.jpg'
              text={info.text6}
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
