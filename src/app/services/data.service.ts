import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable()
export class DataService {
  constructor(public sanitizer: DomSanitizer) { }
  public data = [{
      id:0,
      name: 'Colorado Canyon Package',
      url:this.sanitizer.bypassSecurityTrustStyle(`url(${"/assets/colorado-canyon.jpg"}`),
      status: 'active',
      desc:'Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size.',
      content: `
      <p>Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size. 
      </p><p>
      The South Rim is open all year. 
      </p><p>
      North Rim lodging & restaurants have closed for the season. North Rim Visitor Center & campground remain open through October 31, 2017</p>
      <h4>Lodging: South Rim & North Rim</h3>
      <p>
      Park lodging books up well in advance, Make reservations as far ahead as possible. North Rim lodging reopens May 15 for the 2018 Season.
      </p>
      <h4>Camping: South Rim & North Rim</h3>
      <p>
      Considering a visit in 2018? Campground reservations are recommended for Mather Campground on S. Rim and the N. Rim Campground (No hookups)
      </p>
      `},{
      id:1,
      name: 'New Mexico Package',
      url:this.sanitizer.bypassSecurityTrustStyle(`url(${"/assets/newmex.jpg"}`),
      status: null,
      desc: "Is one of the most stunning landscapes, located a half an hour's drive southwest of Alamogordo in the south of New Mexico. It lies in the Tularosa Basin, a northern offshoot of the Chihuahua Desert and is surrounded by rugged mountains. Here, gleaming white gypsum sand has built up into an extraordinary landscape of dunes up to 60 ft high, which are constantly displaced by the wind.",
      content: `
      <h4>Like No Place Else on Earth</h4>
      <p>Rising from the heart of the Tularosa Basin is one of the world's great natural wonders - the glistening white sands of New Mexico. Great wave-like dunes of gypsum sand have engulfed 275 square miles of desert, creating the world's largest gypsum dunefield. White Sands National Monument preserves a major portion of this unique dunefield, along with the plants and animals that live here.</p>
      <p>Nestled in the Tularosa Basin between the Sacramento and San Andres Mountain ranges of southern New Mexico is a one of a kind outdoor experience. Within White Sands National Monument, you will find countless opportunities for discovery, fun, and the creation of lifelong memories. So venture out into the dunes and explore this special place. Whether you delight in the challenge of a strenuous hike to spectacular vistas, a family outing in an irresistible playground, or an inspirational moment in an untamable land, an unimaginable adventure awaits you! Begin your journey at the visitor center. Your visit can be more enjoyable when you better understand the rich ecosystem around you.</p>
      <p>Would you like to learn about the animals of White Sands National Monument while exploring the dunes? Our adventure packs are just the thing to help you do that! Parents can check out a top by the visitor center and ask if we have one available to loan. Fill out the necessary form for borrowing the pack and be on your way to an adventure!</p>
      `
    },
    {
      id:2,
      name: 'Utah Package',
      url:this.sanitizer.bypassSecurityTrustStyle(`url(${"/assets/utah.jpg"}`),
      status: null,
      desc:'An unbelievable 7-day adventure starting from Salt Lake City and traveling through Arches, Canyonlands, Capitol Reef, Bryce Canyon and Zion national parks. Think of it as seven days in heaven.',
      content: `
      <p>The open road has many turns. You take comfort in knowing what's next. To help you find your way, these itineraries plot inspirational routes through Utah, from the iconic classics to the hidden gems. Day-by-day choices help you carve your own path from the endless outdoor recreation, stunning red rock landscapes, vast forests on high mountain ranges and exciting towns and cities where you may just want to spend a few extra days.</p>
      <p>Step one: get here. Easy. Step two: get around. Thanks to excellent highway infrastructure and other transportation options, getting around is easy too. Chances are, you'll want to take the scenic route. Good news: There's always a scenic route.</p>
      <p>Start by filtering your travel preferences below to explore options, or jump to one of our classic itineraries:</p>
      <ul>
        <li>Anglers Delight, a 5-day journey to one of the most diverse and prolific fisheries in the West.</li>
        <li>Dino Trekker is a a full immersion, 7-day trip through the rich dinosaur fossil record of Utah's own Jurassic World.</li>
        <li>Must-Do Road Trip Itineraries include seven detailed ways to explore the state</li>
        <li>The Mighty 5 has PDFs of popular 3, 5, 7 and 10-day itineraries through Utah's five spectacular national parks.</li>
      </ul>
      `

    },

    {
      id:3,
      name: 'Colorado Package',
      url:this.sanitizer.bypassSecurityTrustStyle(`url(${"/assets/colorado.jpg"}`),      
      status: null,
      desc:'Tickets include one hayride, barrel train ride (for children 12 and under) and unlimited jumping on a giant pillow. Pony rides and hamster balls are available for an additional fee. An array of food vendors sell favorite fall foods such as funnel cakes, hotdogs, freshly squeezed lemonade and kettle corn.',
      content: `
        <p>Tucked in the heart of the Colorado Rockies just 9 miles from Aspen, Snowmass delivers on your elevated expectations with mountain adventures, rodeos, summer concerts, rafting, museums and more. (Photo credits: Jeremy Swanson, Seth Beckton and Hal Williams)</p>
        <p>Aspen Adopt a Trail / Adopt a Park Program: Be a steward of the lands, picking up litter along a trail or local park is a great way to get some exercise and beautify your town. Volunteers will help groom trails and parks by cutting back shrubs, mowing, or hedging during the summer months.</p>
        <p>There are special places and unique vistas around nearly every Colorado corner. You can help ensure these places exist for generations to come by staying on roads and trails, keeping speeds in check, leaving campsites and picnic spots just as you found them, and following instructional signs while you’re out and about in our state.</p>
      `
    }
  ];
  public getData(){
    return this.data;
  }
}