<template>
    <div class="Calendar" >
      <!--head-->
      <div class="calendarHead">
        <h2>{{day}}</h2>
        <p>{{selectvalue}} {{$t('weekday'+week)}}</p>
        <span @click="toDay">{{$t('icoachu27')}}</span>
      </div>
      <!--head-->
      <!--main-->
      <div class="calendarMain">
        <div class="calendarTool">
          <span class="left" @click="preMonth"><i></i></span>
          {{year}}/{{month}}
          <span class="right" @click="nextMonth"><i></i></span>
        </div>
        <ol>
          <li v-for="(item,index) in weeks" :key="index">{{item}}</li>
        </ol>
        <ul @click="clickhandle">
          <li  :index="index" :class="{active:item.value ==selectvalue,pre:item.flag=='pre',next:item.flag=='next'}" v-for="(item,index) in dayArr" :key="item.value">{{item.day}}</li>
        </ul>
      </div>
      <!--main-->
      <!--floot-->
        <div class="calendarFloot">
          <div class="time-tips">{{$t("icoachu28")}}</div>
          <div class="posi_item">
            <span class="dot">{{$t("icoachu29")}}</span>
            <span class="overdue">{{$t("icoachu30")}}</span>
          </div>
        </div>
      <!--floot-->

    </div>

</template>

<script>
    export default {
        name: 'Calendar',
        data() {
            return {
              year:'',
              month:'',
              day:'',
              selectvalue:'',
              currDayValue:'',
              dayArr:[],
              timeObj:{},
              week:null,
            }
        },
        computed: {
          weeks(){
            let arr = []
            for (let i = 0 ;i<7;i++){
              arr.push(this.$t('week'+i))
            }
            return  arr
          }
        },
        methods: {
          foramTiem(){
            let obj = {}
            obj.dayValue = (year,month,day)=>{
              month = month.toString()
              month = month[1]?month:'0'+month;
              day = day.toString()
              day = day[1]?day:'0'+day;
              return year+'-'+month+'-'+day
            }
            //第一排 上一个月最后几天
            obj.firstDay = (year,month)=>{
              let arr = []
              let yearCurr = parseInt(year) , monthCurr = parseInt(month);
              let firstDayOfWeek = $newDate(Date.UTC(year, month - 1, 1)).getDay() ;
              firstDayOfWeek = firstDayOfWeek ==0 ? 7 :firstDayOfWeek;
              if(monthCurr === 1){
                yearCurr = yearCurr - 1
                monthCurr = 12
              }else {
                monthCurr = monthCurr - 1
              }
              if (firstDayOfWeek > 0) {
                for (let i = 0; i < firstDayOfWeek; i++) {
                  let dates = $newDate(yearCurr,monthCurr,0-(firstDayOfWeek-i-1)),day = dates.getDate()
                  arr.push({
                    year:yearCurr,
                    month:monthCurr,
                    day:day,
                    value:obj.dayValue(yearCurr,monthCurr,day),
                    active:false,
                    flag:'pre',
                  });
                }
              }
              return arr
            }
            //获取当月天数
            obj.getCurrMonthDays = (year,month)=>{
              let arr = []
              let yearCurr = parseInt(year) , monthCurr = parseInt(month);
              const thisMonthDays = $newDate(year, month, 0).getDate();
              for (let i = 1; i <= thisMonthDays; i++) {
                arr.push({
                  year:yearCurr,
                  month:monthCurr,
                  day: i,
                  value:obj.dayValue(yearCurr,monthCurr,i),
                  active:i==$newDate().getDate()?true:false,
                  flag:'curr',
                });
              }
              return arr
            }
            //增加下月天数一直到arr.length = 42
            obj.fullCalendar = (arr,year,month)=>{
              let yearCurr = parseInt(year) , monthCurr = parseInt(month),nub = 42 ;
              if(monthCurr==12){
                yearCurr = yearCurr + 1
                monthCurr = 1
              }else {
                monthCurr = monthCurr + 1
              }
              for(let i = 1 ;arr.length<nub; i++){
                arr.push({
                  year:yearCurr,
                  month:monthCurr,
                  day: i,
                  value:obj.dayValue(yearCurr,monthCurr,i),
                  active:false,
                  flag:'next',
                });
              }
              return arr
            }
            obj.filterData = (calendar,timeData)=>{
              for(let q = 0,w = calendar.length;q<w;q++){
                let v = calendar[q]
                // v.doc =  obj.contrastSelectTime(obj.value,v.value)?'overdue':'';
                for(let i = 0,a = timeData.length;i<a;i++){
                  let item = timeData[i]
                  if(item === v.value){
                    v.doc =  obj.contrastCurrTime(v.value)?'old':'new';
                  }
                }
                v.week = q%7
              }
              return calendar
            }

            // //已选择的时间对比
            // obj.contrastSelectTime = (currValue,value)=>{
            //   currValue = +$newDate(currValue)
            //   value = +$newDate(value)
            //   return value<currValue?true:false;
            // }


            //已当前的时间对比
            obj.contrastCurrTime = (value)=>{
              let currValue = (+$newDate()) - 60 *1000*60*24
              value = +$newDate(value)
              return value<currValue?true:false;
            }

            obj.init = ({year,month,day,eventDatas})=>{
              if(!year||!month||!day){
                console.log('foramTiem.init参数错误')
              }
              eventDatas = eventDatas||[];
              obj.year = year
              obj.month = month
              obj.day = day
              obj.value = obj.dayValue(obj.year,obj.month,obj.day)
              let arr1 = obj.firstDay(obj.year,obj.month)
              let arr2 = obj.getCurrMonthDays(obj.year,obj.month)
              let arr3 = obj.fullCalendar([...arr1,...arr2],obj.year,obj.month)
              return obj.filterData(arr3,eventDatas)
            }
            return obj
          },
          dayValue(year,month,day){
            month = month.toString()
            month = month[1]?month:'0'+month;
            day = day.toString()
            day = day[1]?day:'0'+day;
            return year+'-'+month+'-'+day
          },
          clickhandle(e){  //日期选择
            let index = e.target.getAttribute('index')
            if(index!==null){
              this.selectvalue = this.dayArr[index].value
              this.week = this.dayArr[index].week
              if(this.month!==this.dayArr[index].month){
                this.day = this.dayArr[index].day
                this.year = this.dayArr[index].year
                this.month = this.dayArr[index].month
              }
            }


            // this.$emit(this.funName, {...this.dayArr[index]})
          },
          preMonth(){   //上个月
            if(this.month===1){
              this.month = 12
              this.year = this.year - 1
            }else{
              this.month = this.month - 1
            }
          },
          nextMonth(){   //下个月
            if(this.month===12){
              this.month = 1
              this.year = this.year + 1
            }else{
              this.month = this.month + 1
            }
          },
          toDay(){  //回到今天
            var data =$newDate();
            this.year = data.getFullYear()
            this.day = data.getDate()
            this.selectvalue = this.currDayValue
            this.month = data.getMonth()+1
            // this.$emit(this.funName, {value:this.currDayValue,year:this.year,month:this.month,day:this.day})
          },
        },
        components: {},
        watch:{
          eventDatas(newDate){
            this.dayArr = this.timeObj.init({
              year:this.year,
              month:this.month,
              day:this.day,
              eventDatas:newDate
            })

          },
          month(newMont){
            this.dayArr = this.timeObj.init({
              year:this.year,
              month:newMont,
              day:this.day,
              eventDatas:this.eventDatas
            })
          }
        },
        beforeCreate: function () {  //创建前状态

        },
        created: function () {  //创建完毕状态
          var data =$newDate();
          this.year = data.getFullYear()
          this.month = data.getMonth()+1
          this.day = data.getDate()
          this.week = data.getDay()
          this.selectvalue = this.dayValue(this.year,this.month,this.day)
          this.currDayValue = this.dayValue(this.year,this.month,this.day)
          this.timeObj = this.foramTiem()
        },
        beforeMount: function () {  //挂载前状态

        },
        mounted: function () {  //挂载结束状态
        },
        beforeUpdate: function () {  //更新前状态

        },
        updated: function () {  //更新完成状态

        },
        beforeDestroy: function () {  //销毁前状态

        },
        destroyed: function () {  //销毁完成状态

        }
    }
</script>

<style lang="less">
  @import "../style/commen";
  .Calendar{
    text-align: center;
    background-color: @icoachuBackground2;
    min-height: 585px;
    .calendarHead{
      text-align: center;
      width: 100%;
      height: 139px;
      border-bottom: 1px solid @icoachuBorder1;
      h2{
        font-size: 60px;
        width: 100%;
        padding: 10px 0 0;
        color: @icoachuAuxiliaryColor06;
        height: 60px;
        line-height: 60px;
      }
      >p{
        .F14;
        color: @icoachuAuxiliaryColor06;
        margin-bottom: 8px;
      }
      >span{
        display: inline-block;
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        background-color: #fff;
        color: @icoachuColor2;
        width: 70px;
        text-align: center;
        border: 1px solid @icoachuBorder1;
        border-radius: 3px;
      }
    }
    .calendarMain{
      padding-bottom: 5px;
      .calendarTool{
        width: 100%;
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        .right{
          float: right;
          >i{
            background: url("../style/image/icon/icoachu_teacher_sprite.png") no-repeat -104px -78px;
          }
        }
        .left{
          float: left;
          >i{
            background: url("../style/image/icon/icoachu_teacher_sprite.png") no-repeat -104px -64px;
          }
        }
        >span{
          cursor: pointer;
          display: inline-block;
          width: 50px;
          height: 100%;
          position: relative;
          z-index: 2;
          >i{
            width: 11px;
            height: 12px;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            position: absolute;
            z-index: -1;
          }
        }

      }
      li{
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 5px;
        text-align: center;
        cursor: pointer;
      }
      ol,ul{
        display: flex;
        padding: 0;
        margin: 0;
        flex-direction: row ;
        flex-wrap:  wrap;
      }
      ul{
        >li{
          color: @icoachuAuxiliaryColor01;
        }
        >li.active{
            border-radius: 50%;
            background-color: @icoachuColor2;
          color: #fff;
        }
        >li.pre,>li.next{
          color: @icoachuAuxiliaryColor03;
        }

      }
      ol>li {
        color: @icoachuAuxiliaryColor03;
      }
    }
    .calendarFloot{
      background-color: #fff;
      height: 90px;
      padding-top: 14px;
      .time-tips{
        border: 1px solid @icoachuBorder2;
        background-color: @icoachuBackground4;
        color: @icoachuColor2;
        line-height: 30px;
        text-align: center;
      }
      .posi_item{
        padding: 0 25px;
        width: 100%;
        box-sizing: border-box;
        height: 42px;
        line-height: 42px;
        display: flex;
        span{
          flex: 1;
          padding-left: 26px;
          text-align: left;
          &.overdue{
            background: url("../style/image/icon/calender02.png") no-repeat 7px center;
          }
          &.dot{
            background: url("../style/image/icon/calender01.png") no-repeat 7px center;
          }
        }
      }
    }
  }

</style>
