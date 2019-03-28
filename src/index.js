 var ComputationTime = {
    jsDateDiff: function (strtime) {
        if (!strtime) {
            return false;
        }
        var new_str = strtime.replace(/:/g, '-');
        new_str = new_str.replace(/ /g, '-');
        var arr = new_str.split("-");
        var datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
        var publishTime = datum.getTime();
        var d_minutes, d_hours, d_days;
        var timeNow = parseInt(new Date().getTime() / 1000);
        var d;
        d = timeNow - parseInt(publishTime / 1000);
        d_days = parseInt(d / 86400);
        d_hours = parseInt(d / 3600);
        d_minutes = parseInt(d / 60);
        if (d_days > 0 && d_days < 4) {
            return d_days + "天前";
        } else if (d_days <= 0 && d_hours > 0) {
            return d_hours + "小时前";
        } else if (d_hours <= 0 && d_minutes > 0) {
            return d_minutes + "分钟前";
        } else if (d_minutes == 0) {
            return "刚刚";
        } else {
            var s = new Date(parseInt(publishTime));
            // s.getFullYear()+"年";
            return (s.getMonth() + 1) + "月" + s.getDate() + "日";
        }
    },
	getDHM : function(strtime) {
		if (!strtime) {
            return false;
        }
        var new_str = strtime.replace(/:/g, '-');
        new_str = new_str.replace(/ /g, '-');
        var arr = new_str.split("-");
        var datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
        var publishTime = datum.getTime();
        var yearNum = new Date(parseInt(publishTime)).getFullYear();
		var monthNum = new Date(parseInt(publishTime)).getMonth() + 1;
		var dayNum = new Date(parseInt(publishTime)).getDate();
        var d_minutes, d_hours, d_days;
        var timeNow = parseInt(new Date().getTime() / 1000);
        var d
        d = timeNow - parseInt(publishTime / 1000);
        d_days = parseInt(d / 86400);
        d_hours = parseInt(d / 3600);
        d_minutes = parseInt(d / 60);
		//几天前，几个小时前，几分钟前，月，日
		return {days : d_days, hours : d_hours, minutes : d_minutes, month : monthNum, day : dayNum, year: yearNum};
	},
	chineseDate : function (strtime) {
		var T = this;
		var dayObj  = T.getDHM(strtime);
            console.log(dayObj);
        if (dayObj.days <= 0 && dayObj.hours > 0) {
            return dayObj.hours + "小时前";
        } else if (dayObj.hours <= 0 && dayObj.minutes > 0) {
            return dayObj.minutes + "分钟前";
        } else if (dayObj.minutes == 0) {
            return "刚刚";
        } else {
            return dayObj.year + "年" + dayObj.month + "月" + dayObj.day + "日";
        }
    },

    englishDate : function (strtime) {
		var eMonth = {
			"1" : "January",
			"2" : "February",
			"3" : "March",
			"4" : "April",
			"5" : "May",
			"6" : "June",
			"7" : "July",
			"8" : "August",
			"9" : "September",
			"10" : "October",
			"11" : "November",
			"12" : "December"
		}

		var T = this;
		var dayObj  = T.getDHM(strtime);

        if (dayObj.days <= 0 && dayObj.hours > 0) {
            return dayObj.hours + "h";
        } else if (dayObj.hours <= 0 && dayObj.minutes > 0) {
            return dayObj.minutes + "m";
        } else if (dayObj.minutes == 0) {
            return "just";
        } else {
            return dayObj.days + "d"
        }
    },

    //将秒数如90转换成00:01:30秒的形式
    transSeconds : function(seconds) {
        var hour = 0,
            minute = 0,
            seconds = parseInt(seconds);
        if(seconds > 60){
            minute = parseInt(seconds/60);
            seconds = parseInt(seconds%60);
            if(minute > 60) {
                hour = parseInt(minute/60);
                minute = parseInt(minute%60);
            }
        }
        var zero = function(num){
            return (num>>0)<10?"0"+ num:num;
        };
        return [zero(hour),zero(minute),zero(seconds)].join(":");
    },
    //时间-1秒返回
    reduceOneSeconds : function(strtime) {
        var T = this,
            strtime = T.process(strtime),
            seconds = new Date(strtime).getTime(),
            dateObj = new Date(seconds - 1000);
        return T.dateToLocalString(dateObj);
    },
    //时间+1秒返回
    addOneSeconds : function(strtime) {
        var T = this,
            strtime = T.process(strtime),
            seconds = new Date(strtime).getTime(),
            dateObj = new Date(seconds + 1000);
        return T.dateToLocalString(dateObj);
    },
    //返回当前时间的时间戳
    timestamp : function(strtime) {
        var T = this,
            strtime = T.process(strtime),
            seconds = new Date(strtime).getTime();
        return seconds;
    },
    //返回当前时间
    currentTime: function () {
         var T = this;
         var date = new Date();
         return T.dateToLocalString(date);
     },
    //把类似于Tue Nov 20 103827 03:09:09 GMT+0800 (中国标准时间)这种时间格式转换成年月日时分秒的形式输出
    dateToLocalString : function(dateObj) {
        return dateObj.getFullYear() + "-" + (dateObj.getMonth() + 1) + "-" + dateObj.getDate() + " " + dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();
    },
    //把2018-05-08 10:04:05转换成new Date(yyyy,mth,dd,hh,mm,ss)可以转换的形式
    process : function(strtime) {
        var new_str = strtime.replace(/:/g, '-'),
            new_str = new_str.replace(/ /g, '-'),
            arr = new_str.split("-"),
            datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
        return datum;
    },
    //init函数用来把2018-09-10 08:30:29这样的时间转换成几天前
    init: function ($timecontainer, strtime) {
        var T = this;
        $timecontainer.each(function () {
            $(this).html(T.jsDateDiff($(this).attr(strtime)))
        })
    },
	chineseDateDiff : function($timecontainer, strtime) {
		var T = this;
		$timecontainer.each(function(){
			$(this).html(T.chineseDate($(this).attr(strtime)))
		})
	},
	englishDateDiff : function($timecontainer, strtime) {
		var T = this;
		$timecontainer.each(function(){
			$(this).html(T.englishDate($(this).attr(strtime)))
		})
	}
  }

module.exports = ComputationTime;
