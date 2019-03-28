# "时间处理组件"

## Install

`npm install @cnpm/computation-time`

or

`<script type="text/javascript" src="http://n3.static.pg0.cn/fp/computation-time/dist/computation-time.js">`

`<link rel="stylesheet" href="http://n3.static.pg0.cn/fp/computation-time/dist/computation-time.css" />`

## Usage

## Example

[computation-time](http://front.chinaso365.com/fp/computation-time/example/index.html)

## Options

## Methods
	//把class为time的dom中的data-time属性取出来，时间转换后放入div中显示
	ComputationTime.init($(".time"),"data-time");
	//转换传入时间的时间格式
	ComputationTime.jsDateDiff("2018-05-05 09:20:10");
	//把class为time1的dom中的data-time属性取出来，时间转换成中文时间后放入div中显示
	ComputationTime.chineseDateDiff($(".time1"),"data-time");
	//把class为time2的dom中的data-time属性取出来，时间转换成英文时间后放入div中显示
	ComputaionTime.englishDateDiff($(".time2"),"data-time");
	//把秒数转换成具体的分秒
	ComputationTime.transSeconds("90");
	//把当前的时间+1秒后返回
	ComputationTime.addOneSeconds("2018-05-05 09:20:10");
	//把当前的时间-1秒后返回
	ComputationTime.reduceOneSeconds("2018-05-05 09:20:10");
	//把以下三种时间格式转换成英文时间
	ComputationTime.englishDate("2018-05-05 09:20:10");
	ComputationTime.englishDate("2018-05-31 12:00:00");
	ComputationTime.englishDate("2018-05-31 18:50:00");
	//把以下三种时间格式转换成中文时间
	ComputationTime.chineseDate("2018-05-05 09:20:10");
	ComputationTime.chineseDate("2018-05-31 12:00:00");
	ComputationTime.chineseDate("2018-05-31 18:51:00");
	//获取当前时间的时间戳
	ComputationTime.timestamp("2018-06-20 17:20:28");
	//获取当前时间
	ComputationTime.currentTime();
## Events

## 0.0.1

* 初始化 computation-time 组件

## 1.0.7

* 修改一天前时间展现形式，添加英文时间处理方式

## 1.0.8

* 修改通过循环dom中的属性处理时间完成后放入div中

## 1.0.9

* 修改例子中的信息和组件描述中的信息

## 1.1.0

* 修改英文显示时间，一天之前显示几d

## 1.1.1

* 添加获取当前时间戳和当前时间的函数

## 1.1.2

* chineseDate添加年份
