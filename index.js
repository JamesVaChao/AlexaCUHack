/**
 
 Copyright 2016 Brian Donohue.
 
*/

'use strict';
var array = [];
var functionsArray = [];
// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);
        
        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
		 
//     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.05aecccb3-1461-48fb-a008-822ddrt6b516") {
//         context.fail("Invalid Application ID");
//      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } 
        else if (event.request.type === "Remove") {
            onIntent(event.request,event.session, function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        }
        else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    var cardTitle = "Hello, World!";
    var speechOutput = "You can tell Hello, World! to say Hello, World!";
    callback(session.attributes,
        buildSpeechletResponse(cardTitle, speechOutput, "", true));
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if (intentName == 'TestIntent') {
        handleTestRequest(intent, session, callback);
    }
    else if(intentName == 'Penelope'){
        handlePenelopeTestRequest(intent, session, callback);
    }
    else if(intentName == 'HelloWorld'){
        handleHelloWorldRequest(intent, session, callback);
    }
    else if(intentName == 'ReadIntent'){
        handleReadRequest(intent, session, callback);
    }
    else if(intentName == 'CreateVariable'){
        handleVariableTestRequest(intent, session, callback);
    }
    else if(intentName == 'CreateFunction'){
        handleFunctionTestRequest(intent, session, callback);
    }
     else if(intentName == 'IfStatement'){
        handleIfStatementTestRequest(intent, session, callback);
    }
    else if(intentName == 'Bookmark'){
        handleBookmarkTestRequest(intent, session, callback);
    }  
	  else if(intentName == 'ForLoop'){
        handleForLoopTestRequest(intent, session, callback);
   } 
   else if(intentName == 'Declaration'){
        handleDeclarationTestRequest(intent, session, callback);
   } 
   else if(intentName == 'AddToIfStatement'){
	
       handleAddToIfStatementTestRequest(intent, session, callback);
	
   }
	
   else if(intentName == 'AddToFunction'){
        handleAddToFunctionTestRequest(intent, session, callback);
   } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

function handleTestRequest(intent, session, callback) {
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("pringlesss!!!!!", "", "true"));
}

function handlePenelopeTestRequest(intent, session, callback) {
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("penelope!", "", "true"));
}

function handleVariableTestRequest(intent, session, callback) {
    var c = intent.slots.variableName.value
    console.log(c);
    var d = c.split(' ').join('_');
    array.push({type: 'variable', name:d, value: "var " + d + " "});
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Creating variable " + d, "", "true"));
}

function handleBookmarkTestRequest(intent, session, callback) {
     var a = intent
     console.log(a);
    var c = intent.slots.startVar.value.startVar
    //console.log(c);
    //var d = c.split(' ').join('_');
    var e = intent.slots.startVar.value.endVar
    //console.log(e);
    //var f= e.split(' ').join('_');
    callback(session.attributes,buildSpeechletResponseWithoutCard("bookmark", "", "true"));
}


var allFunctions = []


function findInArray(nameOfPlace, array){
    for (var item of array){
        console.log(item);
        if (item.name == nameOfPlace){
            return item;
        }
    }
    return null;
}

function removeItem(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
        }
    }
}
var allIfStatements = []
function handleIfStatementTestRequest(intent, session, callback) {
    var c = intent.slots.ifStatementName.value
    var p = intent.slots.parameter.value
    var res = p.replace("equals", "==");
    console.log(c)
    var d = c.split(' ').join('_');
    var tempitem = {type: 'if statement', name:d, inside: [{type:"inside if statement", value:"if("+ res + "){ "}]};
    allIfStatements.push(tempitem)
    array.push(tempitem)
    callback(session.attributes,buildSpeechletResponseWithoutCard("if statement " + c + " created with params " + res, "", "true"));
}

//handleForLoopTestRequest

var allForLoops = []
function handleForLoopTestRequest(intent, session, callback) {
    var c = intent.slots.name.value
    var p = intent.slots.variable.value
    var s = intent.slots.start.value
    var e = intent.slots.end.value
    var inc = intent.slots.increment.value
    
    var res = inc.replace("plus equals", "+=");
//    console.log(c)
    var d = c.split(' ').join('_');
    var q = p.split(' ').join('_');
    var tempitem = {type: 'for loop', name:d, inside: [{type:"inside for loop", value:"for( var "+ d + " = " + p + "; " + d + " = " + s + "; " + d + " += " + inc + ") {"}]};
    allForLoops.push(tempitem)
    array.push(tempitem)
    callback(session.attributes,buildSpeechletResponseWithoutCard("For loop " + tempitem.inside[0].value + " created", "", "true"));
}

function handleFunctionTestRequest(intent, session, callback) {
   
    var c = intent.slots.functionName.value
    var p = intent.slots.parameter.value
    var res = p.replace("comma", ",");
    console.log(c)
    var d = c.split(' ').join('_');
    var tempitem = {type: 'function', name:d, inside: [{type:"inside function statement", value:" function " + d + "("+ res + "){ "}]};
    allFunctions.push(tempitem)
    array.push(tempitem)
    callback(session.attributes,buildSpeechletResponseWithoutCard("function called " + c +" with parameters "+res + " created"  , "", "true"));
}


function handleAddToIfStatementTestRequest(intent, session, callback) {
    var nameOfPlace = intent.slots.nameOfPlace.value;
    nameOfPlace = nameOfPlace.split(' ').join('_');
    console.log(nameOfPlace, "nameofplace")
    console.log(array, "array")
    nameOfPlace = findInArray(nameOfPlace, array);
    

    console.log(nameOfPlace, "nameofplace after search")

    var nameOfItemToMove = intent.slots.nameOfItemToMove.value;
    nameOfItemToMove = nameOfItemToMove.split(' ').join('_');
    nameOfItemToMove = findInArray(nameOfItemToMove, array);
    
    if(nameOfItemToMove == null){
       callback(session.attributes, buildSpeechletResponseWithoutCard(nameOfItemToMove + " item to move was not found", "", "true"));
    }    
    if(nameOfPlace == null){
        callback(session.attributes,buildSpeechletResponseWithoutCard(nameOfPlace + " name of place was not found", "", "true"));
    }
    
    removeItem(array, nameOfItemToMove);
    
    nameOfPlace.inside.push(nameOfItemToMove);
    callback(session.attributes,buildSpeechletResponseWithoutCard("added " + nameOfItemToMove.value + " to if statement " + nameOfPlace.name, "", "true"));
}
function handleAddToFunctionTestRequest(intent, session, callback) {
    var nameOfPlace = intent.slots.nameOfPlace.value;
    nameOfPlace = nameOfPlace.split(' ').join('_');
    console.log(nameOfPlace, "nameofplace")
    console.log(array, "array")

    nameOfPlace = findInArray(nameOfPlace, array);

    console.log(nameOfPlace, "nameofplace after search")

    var nameOfItemToMove= intent.slots.nameOfItemToMove.value;
    nameOfItemToMove= nameOfItemToMove.split(' ').join('_');
    nameOfItemToMove= findInArray(nameOfItemToMove, array);
    
    if (nameOfItemToMove == null){
       callback(session.attributes, buildSpeechletResponseWithoutCard(nameOfItemToMove + " name of item was not found", "", "true"));
    }    
    if(nameOfPlace == null){
        callback(session.attributes,buildSpeechletResponseWithoutCard(nameOfPlace + " name of place was not found", "", "true"));
    }
    
    removeItem(array, nameOfItemToMove);
    
    nameOfPlace.inside.push(nameOfItemToMove);
    callback(session.attributes,buildSpeechletResponseWithoutCard("added " + nameOfItemToMove.value + " to function " + nameOfPlace.name, "", "true"));
}
function handleDeclarationTestRequest(intent, session, callback) {
    var c = intent.slots.variable.value
    console.log(c)
    
    var p = intent.slots.value.value
 
    var d = c.split(' ').join('_');
    var q = p.split(' ').join('_');
  //  var tempitem = {type: 'declaration', name:d, inside: [{type:"inside declara", value:"for( var"+ d + " = " + p + ";" + d + "=" + s + ";" + d + "+=" + inc}]};
 //   array.push(tempitem)
    var appleVariable = {type:"variable", value: d + " = " + q}
    array.push(appleVariable)
    callback(session.attributes,buildSpeechletResponseWithoutCard("declaration created", "", "true"));
}


function createStringFromMainArray(){
    var stringToReturn = "";
    
    for(var item of array){
        if(item.type == "variable"){
            stringToReturn += item.value;
        }
        if(item.type =="function" || item.type =="if statement" || item.type =="for loop"){
            stringToReturn += recursivePrint(item.inside);
         stringToReturn += '}'
        
    }
    }
        return stringToReturn;
    
}

function recursivePrint(anArray){
    var stringToReturn = ""
        for(var item of anArray){
                if(item.type == "if statement" || item.type == "function" || item.type == "for loop"){
                    
                    stringToReturn += recursivePrint(item.inside);
                }
                else{
                    stringToReturn += item.value 
                }
            }
    return stringToReturn
}


function handleHelloWorldRequest(intent, session, callback) {
    var helloVariable = {type:"hello world", value:'console.log("hello world")'}
   // array.push('console.log("hello world")');
    callback(session.attributes,buildSpeechletResponseWithoutCard("push", "", "true"));
   // console.log(array[0]);
}
var qs = require("querystring");

const http = require('http');
var request = require("request");

function handleReadRequest(intent, session, callback) {
   // var readBack = ""
//    for( var i =0;i<array.length;i++){
//        readBack+= array[i];
//    }

var options = { method: 'POST',
  url: 'https://pastebin.com/api/api_post.php',
  qs: { '': [ '', '', '' ] },
  headers: 
   { 'Postman-Token': 'd50ae9c9-646b-4fc2-8aa4-16d1233b998d',
     'cache-control': 'no-cache',
     'Content-Type': 'application/x-www-form-urlencoded' },
  form: 
   { api_option: 'paste',
     api_dev_key: '4390592a5bc0cb05c69fad9aa7e492f0',
     api_paste_code: createStringFromMainArray(),
     'api_paste_name\t': 'Alexa\'s Javascript ',
     api_user_key: '74c70139dec51a0147a5950142cd3bc6',
     api_paste_format: 'javascript',
     undefined: undefined } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
    callback(session.attributes,buildSpeechletResponseWithoutCard(createStringFromMainArray(), "", "true"));

  console.log(body);
});

   // array[0] = 'console.log("good bye")';
    //console.log(array[0]);
}

// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

//const fs = require('fs') 
  
// Data which will write in a file. 
//let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 
//fs.writeFile('Output.txt', data, (err) => { 
      
    // In case of a error throw err. 
//    if (err) throw err; 
//}) 


