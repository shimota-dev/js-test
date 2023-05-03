function funcTest(str: string, int: number) : void {
  console.log(`文字は${str}、あたいは${int}です`)
}

funcTest('あああ', 123)

const arrowFuncTest = (str: string, int: number) : void => {
  console.log(`文字は${str}、あたいは${int}です`)
}

arrowFuncTest('いいい', 456)


const funcTestQ = (str: string, int?: number) : void => {
  console.log(str, int)
}

funcTestQ('Qマーク')

const funcTestD = (int?: number, str: string = 'aaa') : void => {
  console.log(str, int)
}

funcTestD(123)


const eachNumber = (...items: number[]) : void => {
  for(const item of items){
    console.log(item)
  }
}

eachNumber(1,2,3)
