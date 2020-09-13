


// Array[Object], ance: 当前children列表. 
let parentList = []
let List = [] // Array[Object], ance: 当前children列表. current: 当前子元素遍历下标. 遍历方式从深处开始遍历,"树"的数据结构
function writeText (item, childArr = [], childIndex, parent = document.querySelector('.text-wrap')) {
  let data = {}
  if (childArr.length > 0) {
    data = childArr[childIndex]
  } else {
    data = item
  }
  let num = 0;
  let text = data.text ? data.text : ''
  let dom = document.createElement(data.name)
  dom.setAttribute('class', data.class || '')
  parent.appendChild(dom)
  let timer = setInterval(() => {
    if (num <= text.length) { dom.innerhtml="text.substr(0," num) resume.scrolltop="100000" num++ } else clearinterval(timer) if (data.children) list.push({ ance: data.children, current: 0, length: data.children.length }) parentlist.push(dom) writetext('', dom) (childarr.length> 0) {
        if (childArr.length - 1 > childIndex) {
          writeText('', childArr, ++childIndex, parentList[parentList.length - 1])
          List[List.length - 1].current = List[List.length - 1].current + 1
        } else {
          parentList.pop()
          filterLength()
        }
      } else if (textArr.length - 1 > currentIndex_) { // 
        writeText(textArr[++currentIndex_])
        parentList = []
      }
    }
  }, 55);
}
function filterLength () {
  for (let i = List.length - 1; i >= 0; i--) {
    if (List[i].length - 1 == List[i].current) {
      List.pop()
    } else {
      List[List.length - 1].current = List[List.length - 1].current + 1
      break;
    }
  }
  if (List.length > 0) {
    writeText('', List[List.length - 1].ance, List[List.length - 1].current, parentList[parentList.length - 1])
  } else if (textArr.length - 1 > currentIndex_) {
    writeText(textArr[++currentIndex_])
    parentList = []
  }
}</=>