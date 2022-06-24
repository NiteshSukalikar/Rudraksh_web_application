import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import _ from 'lodash';
import moment from 'moment';
import poojaRecommdations from '../../assets/json/poojaRecommdations.json';
import rudrakshRecommdations from '../../assets/json/rudrakshRecommendation.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../main/main.component.scss'],
})
export class DashboardComponent implements OnInit {
  PoojaData = poojaRecommdations;
  RudrakshaData = rudrakshRecommdations;

  poojaRecommdationsData: any[] = [];
  rudrakshRecommdationsData: any[] = [];

  poojaDataList: any[] = [];
  mahaPoojaName: any;
  mahaPoojaImage: any;
  rudrakshaDataList: any[] = [];
  numbersCount: any[] = [];
  selectedDOB: any;
  urlLink: string;
  mahaPoojaCost: any;
  mahaPoojaPandit: any;
  mahaPoojaDescription: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

  imageObject: Array<object> = [
    {
      image: '../../assets/images/03 copy.jpg',
      thumbImage: '../../assets/images/03 copy.jpg',
      alt: 'Saraswati Bandh Rudraksha',
      //  title: 'Saraswati Bandh Rudraksha',
      url: 'https://www.amazon.in/Saraswati-Rudraksha-RUDRALIFE-Organization-Certified/dp/B09YRSXCYT/ref=sr_1_1?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-1',
    },
    {
      image: '../../assets/images/03.jpg',
      thumbImage: '../../assets/images/03.jpg',
      alt: 'Swasthya Bandh Rudraksha',
      //   title: 'Swasthya Bandh Rudraksha',
      url: 'https://www.amazon.in/Rudraksha%C2%AE-Combination-RUDRALIFE-Circulation-Organization/dp/B09Y3G55SH/ref=sr_1_2?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-2',
    },
    {
      image: '../../assets/images/7 Mukhi in caha box.jpg',
      thumbImage: '../../assets/images/7 Mukhi in caha box.jpg',
      alt: 'Rudraksha 7 Mukhi Cash Box',
      //  title: 'Rudraksha 7 Mukhi Cash Box',
      url: 'https://www.amazon.in/Rudraksha-Combination-Represented-Prosperity-Organization/dp/B09Y5Y83KR/ref=sr_1_3?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-3',
    },
    {
      image: '../../assets/images/water Kit .jpg',
      thumbImage: '../../assets/images/water Kit .jpg',
      alt: 'Water Kit Rudraksha',
      //   title: 'Water Kit Rudraksha',
      url: 'https://www.amazon.in/Rudraksha-Combination-RUDRALIFE-Organization-Certified/dp/B09YHVF8ZZ/ref=sr_1_4?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-4',
    },
    {
      image: '../../assets/images/1080 x 1080.jpg',
      thumbImage: '../../assets/images/1080 x 1080.jpg',
      alt: 'One Mukhi Capping Rudraksha',
      //   title: 'One Mukhi Capping Rudraksha',
      url: 'https://www.amazon.in/Rudraksha-Combination-RUDRALIFE-Organization-Certified/dp/B09Y62L6WW/ref=sr_1_6?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-6',
    },
    {
      image: '../../assets/images/one mukhi rudraksha1080_1080  copy-min.jpg',
      thumbImage:
        '../../assets/images/one mukhi rudraksha1080_1080  copy-min.jpg',
      alt: '6 mm, 5 mukhi Rudraksha Mala',
      // title: '6 mm, 5 mukhi Rudraksha Mala',
      url: 'https://www.amazon.in/Rudraksha-Combination-RUDRALIFE-Organization-Certified/dp/B09Y6177B6/ref=sr_1_5?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-5',
    },
    {
      image: '../../assets/images/1080 x 1080 copy.jpg',
      thumbImage: '../../assets/images/1080 x 1080 copy.jpg',
      alt: '5 mm, 5 Mukhi Silver Rudraksha',
      //title: '5 mm, 5 Mukhi Silver Rudraksha',
      url: 'https://www.amazon.in/Rudraksha-Combination-RUDRALIFE-Organization-Certified/dp/B09Y61G54D/ref=sr_1_7?m=A3C62SOGIMRHS9&marketplaceID=A21TJRUUN4KGV&qid=1653646974&s=merchant-items&sr=1-7',
    },
  ];

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.route.queryParamMap.subscribe((params) => {
      this.selectedDOB = params.get('dob');
    });
    this.getPoojaData();
    this.getRudrakshData();
  }

  imageClick(event: any) {
    if (event) {
      let data: any = this.imageObject[event];
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
      this.mahaPoojaImage = this.poojaRecommdationsData[0].imagePath;
      this.mahaPoojaCost = this.poojaRecommdationsData[0].cost;
      this.mahaPoojaPandit = this.poojaRecommdationsData[0].pandit;
      this.mahaPoojaDescription = this.poojaRecommdationsData[0].description;
    } else {
      this.poojaRecommdationsData = this.PoojaData;
      this.poojaDataList =
        this.poojaRecommdationsData[
          Math.floor(Math.random() * (8 + 1))
        ].RecommendedPujas;
      this.mahaPoojaName =
        this.poojaRecommdationsData[
          Math.floor(Math.random() * (8 + 1))
        ].mahaPooja;
      this.mahaPoojaImage =
        this.poojaRecommdationsData[
          Math.floor(Math.random() * (8 + 1))
        ].imagePath;
      this.mahaPoojaCost =
        this.poojaRecommdationsData[Math.floor(Math.random() * (8 + 1))].cost;
      this.mahaPoojaPandit =
        this.poojaRecommdationsData[Math.floor(Math.random() * (8 + 1))].pandit;
      this.mahaPoojaDescription =
        this.poojaRecommdationsData[
          Math.floor(Math.random() * (8 + 1))
        ].description;
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
      let count = _.countBy([...this.numbersCount]);
      let arr = _.keys(
        _.mapKeys(count, function (value: any, key: any) {
          if (value % 2 != 0) {
            return key;
          }
        })
      );

      arr = arr.filter(function (element) {
        return element !== 'undefined';
      });

      for (let i = 0; i < arr.length; i++) {
        this.rudrakshRecommdationsData = this.RudrakshaData.filter(
          (item: any) => {
            return item.number == arr[i];
          }
        );
        this.rudrakshaDataList.push(...this.rudrakshRecommdationsData);
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
    } else {
      this.rudrakshaDataList = this.RudrakshaData.slice(0, 1);
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

    const seen = new Set();
    const filteredArr2 = this.rudrakshaDataList.filter((el) => {
      const verticalName = el.Recommendations[0].number;
      const duplicate = seen.has(verticalName);
      seen.add(verticalName);
      return !duplicate;
    });

  console.log(filteredArr2);
  

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
