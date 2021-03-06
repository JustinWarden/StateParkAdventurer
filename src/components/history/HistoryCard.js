import React, { Component } from 'react'

class HistoryCard extends Component {
  render() {
    return (
      //this adds park history and photos to the park history page
      <article>
       
      <h1>WV State Park History</h1>
      <p>West Virginia has a well-developed state park system that includes 35 parks and resorts, nine state forests, five wildlife management areas, and two rail-trails. These recreational areas offer hiking, biking, horseback riding, fishing, boating, downhill and cross-country skiing, camping, golfing, indoor and outdoor swimming, and nature activities. Guests can camp, occupy rustic or deluxe rental cabins, or stay in fine air-conditioned lodges with restaurants.
      The state park system began in January 1925 when the Game and Fish Commission purchased 4,560 acres of second-growth timberland in Pocahontas County to develop as a wildlife and timber preserve. Later this became Watoga State Park, now West Virginia’s oldest and largest state park with more than 10,000 acres.</p>
      <div class="historypicsone">
       <picture>
            <img src={require("../images/BlackwaterFalls.jpg")} alt="Blackwater Falls State Park" />
          </picture>
          </div>
      <p>In 1927, the legislature acted on the commission’s recommendation to acquire additional areas for state parks. The goal was to secure these scenic places before they were exploited commercially and to advance the cause of conservation in West Virginia. An important aspect in the formative years was the development of the ‘‘park concept,’’ the guiding policies for preserving outstanding scenic areas and protecting them from exploitation. State park system chiefs who served from 1936 through 1948 (T. M. Cheek, Linn Wilson, R. B. Griffith, Watt Powell, and Kermit McKeever) are credited with originating these policies. In building the early parks, the state relied extensively upon the federal work programs of President Franklin Roosevelt’s New Deal. The Civilian Conservation Corps (CCC) built the backbone of the early system, and the Works Progress Administration (WPA) also provided laborers. Out-of-work engineers, planners, and architects employed in various federal programs during the Depression planned and built Babcock, Lost River, Watoga, Hawks Nest, and Grandview state parks. Skilled stone workers and hundreds of young men were housed in CCC camps often located on future park sites. Their work is still evident in these parks and still in productive use. Family vacation cabins in natural settings received high priority in the early years, and in the 1950s planning and development of campgrounds began. In 1953, West Virginia became one of the first states to finance development of park facilities by selling bonds. This method of developing parks substantially changed traditional concepts. Building resort lodges and campgrounds became high priorities as much more money became available through the bond issues.</p>
      <div class="historypicstwo">
       <picture>
            <img src={require("../images/DroopMountainBattlefield.jpg")} alt="CassScenicRailroad State Park" />
          </picture>
          </div>
      <p>The rapid development and growth of the tourism industry made it necessary to develop concrete guidelines for park development. The 1958–68 Park Master Plan was the first to deal with the many facets of park usage, and is the foundation for many current practices. Later the conservation philosophy was modified to accommodate the goal of profitability in park operations, and state parks were grouped under the state’s commerce bureau from 1985 to 1994. As Stonewall Jackson Resort State Park was developed at century’s end, another new method was pioneered as a private developer supplied funds for park facilities.</p>
      <p>The state park system has evolved into a network encompassing more than 200,000 acres for recreational use by the public. Now there are 10 parks that feature lodges, restaurants, conference facilities, including Stonewall, Blackwater Falls, Cacapon Resort, Canaan Valley, Chief Logan Lodge and Conference Center, Hawks Nest, North Bend, Pipestem, Twin Falls, and Tygart Lake. The largest of the parks remains Watoga, while the smallest parks are Fairfax Stone and Tu-Endie-Wei at four acres each. Areas important to the state’s history were preserved, restored, and incorporated within the system, including Cass Scenic Railroad, Blennerhassett Island, Carnifex Ferry Battlefield, Droop Mountain Battlefield, and Pricketts Fort.</p>
      <div class="historypicsthree">
       <picture>
            <img src={require("../images/Bluestone.jpg")} alt="Bluestone State Park" />
          </picture>
          </div>
     <p>The park system includes five of the state’s Wildlife Management Areas, including Bluestone Wildlife Management Area, the largest at 17,632 acres. The others included in the park system are Berwind Lake, Laurel Lake, Panther, and Plum Orchard Lake. Two of the state’s rail-trails are part of the park system, as well. They are the Greenbrier River Trail and the North Bend Rail Trail.</p>

      <p>This Article was written by Donald R. Andrews</p>
</article>
    )
  }
}

export default HistoryCard