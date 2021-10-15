const dogs = [
    {
      id: '1',
      name: 'Samoyed',
      size: 'Medium',
      lifespan: '12–14 years',
      shedding: 'Moderate to High',
      temperament: 'Playful, Alert, Friendly, Stubborn, Sociable',
      origin: 'Northwest Russia and Western Siberia',
      description: 'The Samoyed is a breed of medium-sized herding dogs with thick, white, double-layer coats. They are related to the laika, a spitz-type dog. It takes its name from the Samoyedic peoples of Siberia. These nomadic reindeer herders bred the fluffy white dogs to help with herding.',
      url: 'https://images.unsplash.com/photo-1569527126995-6fc5318730bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      sourceName: 'Wikipedia',
      sourceURL: 'https://en.wikipedia.org/wiki/Samoyed_dog',
      photoSource: 'https://unsplash.com/photos/RlfEz8DKIGE',
      photoName: 'Photo by Daniel Radford'
    },
    {
      id: '2',
      name: 'Golden Retriever',
      size: 'Medium to Large',
      lifespan: '10 – 12 years',
      shedding: 'Moderate to High',
      temperament: 'Intelligent, Friendly, Kind, Reliable, Trustworthy, Confident',
      description: 'The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed\'s ability to retrieve shot game undamaged due to their soft mouth.',
      url: 'https://images.unsplash.com/photo-1612464321028-0e86f94b2c52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' ,
      sourceName: 'Wikipedia',
      sourceURL: 'https://en.wikipedia.org/wiki/Golden_Retriever',
      photoSource: 'https://unsplash.com/photos/BT_QM4CpnNE',
      photoName: 'Photo by David Moynihan'
    },
    {
      id: '3',
      name: 'Border Collie',
      size:'Medium',
      lifespan: '10–17 years',
      shedding: 'Moderate to High',
      temperament:' Intelligent, Tenacious, Energetic, Loyal, Keen, Responsive, Alert, Athletic',
      description: 'The Border Collie is a working and herding dog breed. They come from the Anglo-Scottish border region and are used to herd livestock, specifically sheep. The Border Collie is considered a highly intelligent, extremely energetic, acrobatic and athletic dog.',
      url: 'https://images.unsplash.com/photo-1508109742312-c7d531211d11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9yZGVyJTIwY29sbGllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' ,
      sourceName: 'Wikipedia',
      sourceURL: 'https://en.wikipedia.org/wiki/Border_Collie',
      photoSource: 'https://unsplash.com/photos/kJlk-jW2nLI',
      photoName: 'Photo by Chung Nguyen'
    },
    {
      id: '4',
      name: 'Bernese Mountain Dog',
      size: 'Large',
      lifespan:'6 – 8 years',
      shedding: 'Moderate to High',
      temperament: 'Intelligent, Affectionate, Loyal, Faithful' ,
      description: 'The Bernese Mountain Dog is a large dog breed, one of the four breeds of Sennenhund-type dogs from the Swiss Alps. These dogs have roots in the Roman mastiffs. The name Sennenhund is derived from the German Senne and Hund, as they accompanied the alpine herders and dairymen called Senn.',
      url: 'https://images.unsplash.com/photo-1560605802-3b033f2f8c16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      sourceName: 'Wikipedia',
      sourceURL: 'https://en.wikipedia.org/wiki/Bernese_Mountain_Dog',
      photoSource: 'https://unsplash.com/photos/52W0u3wKyRY',
      photoName: 'Photo by André Dehne'
    },
    {
      id: '5',
      name: 'Standard Poodle',
      size: 'Medium',
      lifespan:'12 – 15 years',
      shedding: 'Low',
      temperament: 'Intelligent, Alert, Active, Faithful, Instinctual, Trainable' ,
      description: 'The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog. The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle and Toy Poodle, although the Medium Poodle variety is not universally recognised.',
      url: 'https://images.unsplash.com/photo-1583007407705-c382eb957737?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      sourceName: 'Wikipedia',
      sourceURL: 'https://en.wikipedia.org/wiki/Poodle',
      photoSource: 'https://unsplash.com/photos/mE1Y4wBH-mU',
      photoName: 'Photo by Faith McDonald'
    },
    {
      id: '6',
      name: 'Shiba Inu',
      size: 'Small to Medium',
      lifespan:'12 – 15 years',
      shedding: 'Moderate to High',
      temperament: 'Charming, Keen, Alert, Fearless, Confident, Faithful' ,
      description: 'The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan. A small, alert, and agile dog that copes very well with mountainous terrain and hiking trails, the Shiba Inu was originally bred for hunting.',
      url: 'https://images.unsplash.com/photo-1578133507770-a35cc3c786e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      sourceName: 'Wikipedia',
      sourceURL: 'https://en.wikipedia.org/wiki/Shiba_Inu',
      photoSource: 'https://unsplash.com/photos/aH9Uskj8XTU',
      photoName: 'Photo by Jaycee Xie'
    },
    {
      id: '7',
      name: 'German Shepherd',
      size: 'Medium to Large',
      lifespan:'9 – 13 years',
      shedding: 'Moderate to High',
      temperament: 'Intelligent, Stubborn, Loyal, Obedient, Alert, Watchful, Confident, Curious, Courageous' ,
      description: 'The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. As a herding dog, German Shepherds are working dogs developed originally for herding sheep. Since that time, however, because of their strength, intelligence, trainability, and obedience, German Shepherds around the world are often the preferred breed for many types of work, including disability assistance, search-and-rescue, police and military roles and acting.',
      url: 'https://images.unsplash.com/photo-1599995272487-427aa98fcf91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' ,
      sourceName: 'Wikipedia',
      sourceURL: 'https://en.wikipedia.org/wiki/German_Shepherd',
      photoSource: 'https://unsplash.com/photos/zowhMGYirxo',
      photoName: 'Photo by ALETTA D. NAGY'
    },
    {
      id: '8',
      name: 'Boxer',
      size: 'Medium to Large',
      lifespan:'10 – 12 years',
      shedding: 'Moderate to High',
      temperament: 'Playful, Intelligent, Friendly, Devoted, Energetic, Cheerful, Loyal, Fearless, Confident, Bright, Calm, Brave',
      description: 'The Boxer is a medium to large, short-haired breed of dog, developed in Germany. The coat is smooth and tight-fitting; colors are fawn, brindled, or white, with or without white markings. The Boxer was bred from the Old English Bulldog and the now extinct Bullenbeisser, which became extinct by crossbreeding rather than by a decadence of the breed. ',
      url: 'https://images.unsplash.com/photo-1558349699-1e1c38c05eeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym94ZXIlMjBkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      sourceName: 'Wikipedia',
      sourceURL: 'https://en.wikipedia.org/wiki/Boxer_(dog)',
      photoSource: 'https://unsplash.com/photos/F987HmlxnAw',
      photoName: 'Photo by Lucie Helešicová'
    },
  ];
  
  const Dog = (prop) => {
    return (
      <div className = "card">
        <div className ="wrap-image">
          <img 
            src={prop.url} 
            alt={ prop.name } 
           />
          <a href={ prop.photoSource }> { prop.photoName } </a>
        </div>
        <div className="description">
          <h3>{ prop.name }</h3>
          <div></div>
          <p>{ prop.description }</p>
          <h4>A little more about { prop.name }</h4>
          <ul>
            <li><strong>Size: </strong>{ prop.size }</li>
            <li><strong>Lifespan: </strong>{ prop.lifespan }</li>
            <li><strong>Shedding Level: </strong>{ prop.shedding }</li>
            <li><strong>Temperament: </strong>{ prop.temperament }</li>
          </ul>
          <small>Information Extracted from <a href={ prop.sourceURL } target="_blank">{ prop.sourceName }</a></small>
        </div>
      </div>
    );
  }
  
  const DogList = (prop) => {
    return (
      <div className="section-wrapper">
        {prop.dogs.map(dog =>
          <Dog
            key={dog.id}
            {... dog}
          />
        )}
      </div>
    );
  }
  
  ReactDOM.render(
    <DogList dogs={dogs} />,
    document.getElementById('main-wrapper')
  )
  