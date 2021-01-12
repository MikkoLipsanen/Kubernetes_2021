const {v4 : uuidv4} = require('uuid')

const randStr = uuidv4()

const getStr = () => {

  console.log(Date().valueOf(), ":", randStr)

  setTimeout(getStr, 5000)
}

getStr()
