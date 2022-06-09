import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';
import moment from 'moment';
import poojaRecommdations from '../../../../assets/json/poojaRecommdations.json';
import rudrakshRecommdations from '../../../../assets/json/rudrakshRecommendation.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss',
    "../main/main.component.scss",
  ],
})
export class DashboardComponent implements OnInit {
  PoojaData = poojaRecommdations;
  RudrakshaData = rudrakshRecommdations;

  poojaRecommdationsData: any[] = [];
  rudrakshRecommdationsData: any[] = [];

  poojaDataList: any[] = [];
  mahaPoojaName :any;
  mahaPoojaImage :any;
  rudrakshaDataList: any[] = [];
  numbersCount: any[] = [];
  selectedDOB: any;
  urlLink: string;
  constructor(private route: ActivatedRoute) {}

  imageObject: Array<object> = [
    {
      image: '../../../../assets/images/rudraksh/1 Mukhi.jpg',
      thumbImage: '../../../../assets/images/rudraksh/1 Mukhi.jpg',
      alt: 'Saraswati Bandh Rudraksha',
      title: 'Saraswati Bandh Rudraksha',
      url: 'https://www.amazon.in/Saraswati-Rudraksha-RUDRALIFE-Organization-Certified/dp/B09YRSXCYT/ref=sr_1_1?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-1'
    },
    {
      image: '../../../../assets/images/rudraksh/2 Mukhi.jpg',
      thumbImage: '../../../../assets/images/rudraksh/2 Mukhi.jpg',
      alt: 'Swasthya Bandh Rudraksha',
      title: 'Swasthya Bandh Rudraksha',
      url: 'https://www.amazon.in/Rudraksha%C2%AE-Combination-RUDRALIFE-Circulation-Organization/dp/B09Y3G55SH/ref=sr_1_2?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-2'
    },
    {
      image: '../../../../assets/images/rudraksh/7 Mukhi.jpg',
      thumbImage: '../../../../assets/images/rudraksh/7 Mukhi.jpg',
      alt: 'Rudraksha 7 Mukhi Cash Box',
      title: 'Rudraksha 7 Mukhi Cash Box',
      url: 'https://www.amazon.in/Rudraksha-Combination-Represented-Prosperity-Organization/dp/B09Y5Y83KR/ref=sr_1_3?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-3'
    },
    {
      image: '../../../../assets/images/rudraksh/2 Mukhi.jpg',
      thumbImage: '../../../../assets/images/rudraksh/2 Mukhi.jpg',
      alt: 'Water Kit Rudraksha',
      title: 'Water Kit Rudraksha',
      url: 'https://www.amazon.in/Rudraksha-Combination-RUDRALIFE-Organization-Certified/dp/B09YHVF8ZZ/ref=sr_1_4?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-4'
    },
    {
      image: '../../../../assets/images/rudraksh/1 Mukhi.jpg',
      thumbImage: '../../../../assets/images/rudraksh/1 Mukhi.jpg',
      alt: 'One Mukhi Capping Rudraksha',
      title: 'One Mukhi Capping Rudraksha',
      url: 'https://www.amazon.in/Rudraksha-Combination-RUDRALIFE-Organization-Certified/dp/B09Y62L6WW/ref=sr_1_6?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-6'
    },
    {
      image: '../../../../assets/images/rudraksh/2 Mukhi.jpg',
      thumbImage: '../../../../assets/images/rudraksh/2 Mukhi.jpg',
      alt: 'Rudraksha Insomnia Ring',
      title: 'Rudraksha Insomnia Ring',
      url: 'https://www.amazon.in/Rudraksha-RUDRALIFE-Combination-Organization-Certified/dp/B09Y5M2VQS/ref=sr_1_9?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-9'
    },
    {
      image: '../../../../assets/images/rudraksh/5 Mukhi.jpg',
      thumbImage: '../../../../assets/images/rudraksh/5 Mukhi.jpg',
      alt: '6 mm, 5 mukhi Rudraksha Mala',
      title: '6 mm, 5 mukhi Rudraksha Mala',
      url: 'https://www.amazon.in/Rudraksha-Combination-RUDRALIFE-Organization-Certified/dp/B09Y6177B6/ref=sr_1_5?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-5'
    },
    {
      image: '../../../../assets/images/rudraksh/5 Mukhi.jpg',
      thumbImage: '../../../../assets/images/rudraksh/5 Mukhi.jpg',
      alt: '5 mm, 5 Mukhi Silver Rudraksha',
      title: '5 mm, 5 Mukhi Silver Rudraksha',
      url: 'https://www.amazon.in/Rudraksha-Combination-RUDRALIFE-Organization-Certified/dp/B09Y61G54D/ref=sr_1_7?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-7'
    },
    {
      image: '../../../../assets/images/rudraksh/5 Mukhi.jpg',
      thumbImage: '../../../../assets/images/rudraksh/5 Mukhi.jpg',
      alt: '10 mm, 5 mukhi Rudraksha Mala',
      title: '10 mm, 5 mukhi Rudraksha Mala',
      url: 'https://www.amazon.in/Rudraksha-Combination-RUDRALIFE-Organization-Certified/dp/B09Y5S6FQJ/ref=sr_1_8?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-8'
    },
    
  ];

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.selectedDOB = params.get('dob');  
    });
    this.getPoojaData();
    this.getRudrakshData();
  }

  imageClick(event:any){
    if (event) {
      let data:any = this.imageObject[event];
      this.urlLink = data.url;
    }
  }

  getPoojaData() {
    if (this.selectedDOB) {
      let getYear = moment(this.selectedDOB).format('YYYY');
      let sum = this.getSum(getYear);
      this.poojaRecommdationsData = this.PoojaData.filter((item) => {
        return item.number == sum;
      });
      this.poojaDataList = this.poojaRecommdationsData[0].RecommendedPujas;
      this.mahaPoojaName = this.poojaRecommdationsData[0].mahaPooja;
      this.mahaPoojaImage = this.poojaRecommdationsData[0].imagePath
    }else{
      this.poojaRecommdationsData = this.PoojaData
      this.poojaDataList = this.poojaRecommdationsData[Math.floor(Math.random() * (8 + 1))].RecommendedPujas;
      this.mahaPoojaName = this.poojaRecommdationsData[Math.floor(Math.random() * (8 + 1))].mahaPooja;
      this.mahaPoojaImage = this.poojaRecommdationsData[Math.floor(Math.random() * (8 + 1))].imagePath
    }
  }

  getRudrakshData() {
    if (this.selectedDOB) {
      let getDay = moment(this.selectedDOB).format('DD'); //24
      if (String(getDay)[0] != '0') {
        this.numbersCount.push(...getDay.split(''));
      }

      let getMonth = moment(this.selectedDOB).format('MM'); //04
      if (String(getMonth)[0] != '0') {
        this.numbersCount.push(...getMonth.split(''));
      }

      let getYear = moment(this.selectedDOB).format('YYYY'); //1992
      if (String(getYear)[0] == '2' && String(getYear)[1] == '0') {
        // let initialYearNum = getYear.substring(0, 2);
        // let lastYearNum = getYear.substring(2, 4);
        this.numbersCount.push(...getYear.split(''));
      } else {
        this.numbersCount.push(...getYear.split(''));
      }

      let getSumOfDay = this.getSum(getDay); //6
      this.numbersCount.push(...getSumOfDay.toString().split(''));

      let getSumOfMonth = this.getSum(getMonth); //4
      this.numbersCount.push(...getSumOfMonth.toString().split(''));

      let getSumOfYear2D;
      if (String(getYear)[0] == '2' && String(getYear)[1] == '0') {
        let initialYearNum = getYear.substring(0, 2);
        let lastYearNum = getYear.substring(2, 4);
        let lastYearNumSum: any = this.getSum(lastYearNum);
        getSumOfYear2D = parseInt(initialYearNum) + lastYearNumSum;
        this.numbersCount.push(...getSumOfYear2D.toString().split(''));
      } else {
        getSumOfYear2D = this.getSumUpto2Digit(getYear); //21
        this.numbersCount.push(...getSumOfYear2D.toString().split(''));
      }

      let get1stSumOfYear2DInto1D: any;
      let get2ndSumOfYear2DInto1D: any;

      get1stSumOfYear2DInto1D = this.getSumUpto2Digit(getSumOfYear2D); //3
      this.numbersCount.push(...get1stSumOfYear2DInto1D.toString().split(''));
      if (get1stSumOfYear2DInto1D.toString().length == 2) {
        get2ndSumOfYear2DInto1D = this.getSum(get1stSumOfYear2DInto1D); //3
        this.numbersCount.push(...get2ndSumOfYear2DInto1D.toString().split(''));
      }

      let SecondRowCalculation = parseInt(
        getSumOfDay + getSumOfMonth + getSumOfYear2D
      ); //31
      this.numbersCount.push(...SecondRowCalculation.toString().split(''));

      let getSecondRowCalculation = this.getSum(SecondRowCalculation); //4
      this.numbersCount.push(...getSecondRowCalculation.toString().split(''));

      let DestinyValue = getSumOfDay;
      let healthValue =
        get2ndSumOfYear2DInto1D == undefined
          ? get1stSumOfYear2DInto1D
          : get2ndSumOfYear2DInto1D;
      let controllerValue = getSecondRowCalculation;

      const result1 = [...this.numbersCount];
      //let count = this.countOccurance(result1);
      let count = _.countBy([...this.numbersCount])
     
      
      


      for (let i = 1; i < 10; i++) {
        if (count[i] != undefined) {
          if (count[i] % 2 != 0) {
            this.rudrakshRecommdationsData = this.RudrakshaData.filter(
              (item: any) => {
                console.log((_.keys(count).filter((item:any) => { return item > 0})[i - 1]).toString());
                return item.number == (_.keys(count).filter((item:any) => { return item > 0})[i - 1]).toString();
              }
            );
            this.rudrakshaDataList.push(...this.rudrakshRecommdationsData);
          }
        }
      }

      // if (count[DestinyValue] % 2 != 0) {
      //   this.rudrakshRecommdationsData = this.RudrakshaData.filter(
      //     (item: any) => {
      //       return item.number == DestinyValue;
      //     }
      //   );
      //   this.rudrakshaDataList.push(...this.rudrakshRecommdationsData);
      // }

      // if (count[healthValue] % 2 != 0) {
      //   this.rudrakshRecommdationsData = this.RudrakshaData.filter(
      //     (item: any) => {
      //       return item.number == healthValue;
      //     }
      //   );
      //   this.rudrakshaDataList.push(...this.rudrakshRecommdationsData);
      // }

      // if (count[controllerValue] % 2 != 0) {
      //   this.rudrakshRecommdationsData = this.RudrakshaData.filter(
      //     (item: any) => {
      //       return item.number == controllerValue;
      //     }
      //   );
      //   this.rudrakshaDataList.push(...this.rudrakshRecommdationsData);
      // }

      this.elimateDuplicateEntry();
    }else{
      this.rudrakshaDataList = this.RudrakshaData.slice(0,1);
    }
  }

  elimateDuplicateEntry() {
    const filteredArr = this.rudrakshaDataList.reduce((acc, current) => {
      const x = acc.find((item: any) => item.number === current.number);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    this.rudrakshaDataList = filteredArr;
  }

  countOccurance(arr: any) {
    let count: any = {};

    for (const element of arr) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    return count;
  }

  getSum(n: any) {
    let sum = 0;
    while (n > 0 || sum > 9) {
      if (n == 0) {
        n = sum;
        sum = 0;
      }
      sum = sum + (n % 10);
      n = Math.floor(n / 10);
    }
    return sum;
  }

  getSumUpto2Digit(num: any) {
    let numArr = num.toString().split('');
    let sumOf2D = numArr.reduce(function (a: any, b: any) {
      return parseInt(a) + parseInt(b);
    }, 0);
    return sumOf2D;
  }
}
