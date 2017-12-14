function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  return document.getElementById('app').querySelectorAll('div')[9]
}

function increaseRankBy(n){
  let thing = document.getElementsByClassName('ranked-list')
  let firstList = thing[0]
  let secondList = thing[1]
  let arr1 = Array.from(firstList.children)
  let arr2 = Array.from(secondList.children)


  arr1.forEach(function(el) {
	   el.innerHTML = parseInt(el.innerHTML) + n
  })
  arr2.forEach(function(el) {
	   el.innerHTML = parseInt(el.innerHTML) + n
  })
}
