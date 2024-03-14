// 获取当前时间戳
const currentTimeStamp = Date.now();

// 指定起始时间戳，这里假设为2024年3月14日17:00:00
const startTimeStamp = new Date('2024-03-14T17:00:00').getTime();

// 计算当前时间与起始时间之间的时间差，单位为毫秒
const timeDifference = currentTimeStamp - startTimeStamp;

// 将时间差转换为秒数
const timeDifferenceInSeconds = Math.floor(timeDifference / 1000);

// 每隔10秒增加的访客数量范围
const minIncrease = 3; // 最小增加数量
const maxIncrease = 5; // 最大增加数量

// 计算当前时间段内的访客增加数量
const visitorIncrease = Math.floor(timeDifferenceInSeconds / 10) * getRandomInt(minIncrease, maxIncrease);

// 基础访客数量
const baseVisitorCount = 10075;

// 计算当前访客数量
const currentVisitorCount = baseVisitorCount + visitorIncrease;

// 将当前访客数量显示在页面上
document.getElementById('visitorCount').textContent = currentVisitorCount;

// 获取指定范围内的随机整数
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
