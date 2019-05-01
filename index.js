
let articles_pronouns = ['the','our','his','her',"my","your"];
let adjective = ["amazing", "incredible", "fantastic", "stupendous", "mindboggling", "spectacular","breathtaking","jawdropping"];
let noun = ["runner", "writer", "dogsitter", "doctor", "athlete","teacher","coder","yogi","babymaker","beerguzzler"]



function domain_name_creator(arr1,arr2,arr3){

for (let i=0; i<arr1.length; i++){
	for (let n=0; n<arr2.length; n++){
		for (let m=0; m<arr3.length; m++){
			console.log(articles_pronouns[i]+adjective[n]+noun[m]+".com")
		}
	}
}

}

let domain_list = domain_name_creator(articles_pronouns, adjective, noun);
console.log(domain_list);

document.getElementById("domains_for_sale").innerHTML = domain_list;

function myClickHandler(){
     alert('hello');
}

var listenerFunction = function(){
    alert('First click');
    document.getElementById('onTimeButton').removeEventListener("click",listenerFunction);
}
function inicialize(){
    document.getElementById('onTimeButton').addEventListener("click",listenerFunction);
}


