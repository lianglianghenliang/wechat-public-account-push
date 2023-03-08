/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx78f430707efadcea',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '26ace7db37af0a51cf2831ef4847eca6',
  PROVINCE: '浙江',
  CITY: '杭州',
  USERS: [
    {
      // 想要发送的人的名字
      name: '妍宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofkZC6Re8-M0yfIxl3JyebO7J-lM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'tivMVWvEM4CxLqjCLssmXfW0n0wi0fkVoswnCQRFOWU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝儿', year: '1998', date: '11-05',
        },
        // // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '妍妍小仙女', year: '1998', date: '09-31',
        // },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-22' },
      ],
    },
     {
      // 想要发送的人的名字
      name: '壮壮',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofkZC6WklR9_3ox-sdhvtWL_YI3c',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'tivMVWvEM4CxLqjCLssmXfW0n0wi0fkVoswnCQRFOWU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝儿', year: '1998', date: '11-05',
        },
        // // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '妍妍小仙女', year: '1998', date: '09-31',
        // },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-22' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '妍宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofkZC6Re8-M0yfIxl3JyebO7J-lM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'G1KWSohVfoabbP4fpMJg1tOAzgT_l8KkfNZIUNZYxPc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝儿', year: '1998', date: '11-05',
        },
        // // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '妍妍小仙女', year: '1998', date: '09-31',
        // },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-22' },
      ],
    },
  ];	

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板

  CALLBACK_TEMPLATE_ID: '2dFMOUVWByV-KNkhnC53SUcqkSKVCjg9sldi-2B2CZQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofkZC6WklR9_3ox-sdhvtWL_YI3c',
    }
  ],

}

module.exports = USER_CONFIG

