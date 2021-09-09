

console.log(topic);         // this will show undefined because it is before var topic
var topic = "JavaScript Execution Context";
console.log(topic);          // this is the actual result because this is after var topic
function getTopic() {
    return topic;
}

getTopic();