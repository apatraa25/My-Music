// Search Dashboard

let availableKeywords = [
  'Podcast Anti Social',
  'Podcast Dalam Negeri',
  'Podcast Malam Jumat',
  'Podcast Seminggu',
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.keyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = availableKeywords.filter((keyword)=>{
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);
}

function display(result){
  const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });
  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = '';
}