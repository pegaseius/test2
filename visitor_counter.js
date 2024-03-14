// 获取当前时间戳
const currentTimeStamp = Date.now();

// 指定起始时间戳，这里假设为2024年3月14日17:00:00
const startTimeStamp = new Date('2024-03-14T17:00:00').getTime();

// 计算当前时间与起始时间之间的时间差，单位为毫秒
const timeDifference = currentTimeStamp - startTimeStamp;

// 将时间差转换为秒数
const timeDifferenceInSeconds = Math.floor(timeDifference / 1000);

// 基础访客数量
const baseVisitorCount = 10075;

// 计算当前访客数量
const currentVisitorCount = baseVisitorCount + timeDifferenceInSeconds;

// 返回当前访客数量
export default currentVisitorCount;
