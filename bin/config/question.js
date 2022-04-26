const { templateList, alignRight } = require('./config');

exports.nameQue = [
  {
    name: "author",
    type: 'input',
    message: "请输入用户名称",
    validate (val) {
      if (!val) {
        return 'author name is required!'
      } else {
        return true
      }
    }
  }
]

exports.templateQue = function () {
  let choices = [];
  for (const key in templateList) {
    choices.push({
      name: `${alignRight(key, 12)}${templateList[key]}`,
      value: key
    })
  }
  return {
    name: "template",
    type: "list",
    message: "请选择模板",
    choices: choices
  }
}

// TODO: package.json里面的配置：项目名称、作者、版本等