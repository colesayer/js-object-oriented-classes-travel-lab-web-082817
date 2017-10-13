class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(date){
    return date - this.startDate.getFullYear() -1;
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    const a = eastWest.indexOf(this.beginningLocation["horizontal"]);
    const b = eastWest.indexOf(this.endingLocation["horizontal"]);
    const c = this.beginningLocation["vertical"];
    const d = this.endingLocation["vertical"];
    const horizontalBlocksTravelled = a >= b ? (a-b) : (b-a);
    const verticalBlocksTravelled = c >= d ? (c-d) : (d-c)
    return horizontalBlocksTravelled + verticalBlocksTravelled
  }

  estimatedTime(peak = false){
    const blocks = this.blocksTravelled()
    const d = new Date();
    const n = d.getHours();
    if (peak === false){
      return blocks/3
    } else {
      return blocks/2
    }
    // if (n >= 7 && n <= 9 || n >= 19 && n <= 21){
    //   return blocks/2
    // } else {
    //   return blocks/3
    // }
  }

}
