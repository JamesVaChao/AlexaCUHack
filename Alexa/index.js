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
        else if (event.request.type === "Penelope") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } 
         else if (event.request.type === "HelloWorld") {
            onIntent(event.request,event.session, function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        }
        else if (event.request.type === "CreateVariable") {
            onIntent(event.request,event.session, function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        }
        else if (event.request.type === "CreateFunction") {
            onIntent(event.request,event.session, function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        }
        else if (event.request.type === "IfStatement") {
            onIntent(event.request,event.session, function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        }
        else if (event.request.type === "Bookmark") {
            onIntent(event.request,event.session, function callback(sessionAttributes, speechletResponse) {
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

    // add any session init logic here
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
    console.log("heloooooooo *sniffles* ")
    var c = intent.slots.variableName.value
    console.log(c);
    var d = c.split(' ').join('_');
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(d, "", "true"));
}

function handleBookmarkTestRequest(intent, session, callback) {
    console.log("heloooooooo *sniffles* ")
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

function readSection(c,e){
    var stringToReturn = "";
    
    for(var i = 0; i<=e-c;i++){
        
    }
        //if(obj.type == "variable"){
         //   stringToReturn += obj.value;
        //}
}

var allFunctions = []
function handleFunctionTestRequest(intent, session, callback) {
   
    var c = intent.slots.functionName.value
    var p = intent.slots.parameter.value
    var res = p.replace("comma", ",");
    console.log(c)
    var d = c.split(' ').join('_');
    var tempObj = {type: 'function', name:d, inside: [{type:"inside function statement", value:"function" + d + "("+ res + "){"}]};
    allFunctions.push(tempObj)
    array.push(tempObj)
    callback(session.attributes,buildSpeechletResponseWithoutCard("function statement created", "", "true"));
}

function handleAddToFunctionTestRequest(intent, session, callback) {
    var c = intent.slots.functionName.value
    var d = c.split(' ').join('_');
    var tempObj = {type: 'function', name:d, inside: [{type:"functionStar", value:"function"+ d +"(){"}]};
    var appleVariable = {type:"variable", value:"var apples"}
    tempObj.insideFunction.push(appleVariable);
    callback(session.attributes,
    buildSpeechletResponseWithoutCard("added to function", "", "true"));
}
var allIfStatements = []
function handleIfStatementTestRequest(intent, session, callback) {
    var c = intent.slots.ifStatementName.value
    var p = intent.slots.parameter.value
    var res = p.replace("equals", "==");
    console.log(c)
    var d = c.split(' ').join('_');
    var tempObj = {type: 'if statement', name:d, inside: [{type:"inside if statement", value:"if("+ res + "){"}]};
    allIfStatements.push(tempObj)
    array.push(tempObj)
    callback(session.attributes,buildSpeechletResponseWithoutCard("if statement created", "", "true"));
}

function handleAddToIfStatementTestRequest(intent, session, callback) {
    var c = intent.slots.functionName.value
    var d = c.split(' ').join('_');
    var tempObj = {type: 'function', name:d, inside: [{type:"functionStar", value:"function"+ d +"(){"}]};
    var appleVariable = {type:"variable", value:"var apples"}
    tempObj.insideFunction.push(appleVariable);
    callback(session.attributes,
    buildSpeechletResponseWithoutCard("added to function", "", "true"));
}

function createStringFromMainArray(){
    var stringToReturn = "";
    
    for(var obj of array){
        if(obj.type == "variable"){
            stringToReturn += obj.value;
        }
        if(obj.type =="function" ){
            for(var itemInsideFunction of obj.inside){
                stringToReturn += itemInsideFunction.value 
            }
            stringToReturn += "}"
        }
        if(obj.type =="if statement" ){
            for(var inside of obj.inside){
                stringToReturn += inside.value 
            }
            stringToReturn += "}"
        }
        
    }
    return stringToReturn;
    
}

function removeItem(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
        }
    }
}

removeItem(array, 'seven');

function ifStatementHelper(){
    
}

function handleHelloWorldRequest(intent, session, callback) {
    var helloVariable = {type:"hello world", value:'console.log("hello world")'}
   // array.push('console.log("hello world")');
    callback(session.attributes,buildSpeechletResponseWithoutCard("push", "", "true"));
   // console.log(array[0]);
}
var qs = require("querystring");

const http = require('http');

function handleReadRequest(intent, session, callback) {
   // var readBack = ""
//    for( var i =0;i<array.length;i++){
//        readBack+= array[i];
//    }

var options = {
  "method": "POST",
  "hostname": 
    "pastebin.com"
  ,
  "path": [
    "api",
    "api_post.php"
  ],
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "Postman-Token": "52b662ab-f51f-4ea0-a23e-9ec57aed68cb"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(qs.stringify({ api_option: 'paste',
  api_dev_key: '4390592a5bc0cb05c69fad9aa7e492f0',
  api_paste_code: createStringFromMainArray(),
  api_paste_name: 'Alexa\'s Javascript ',
  api_user_key: '74c70139dec51a0147a5950142cd3bc6',
  api_paste_format: 'javascript',}));
req.end();

   // array[0] = 'console.log("good bye")';
    callback(session.attributes,buildSpeechletResponseWithoutCard(createStringFromMainArray(), "", "true"));
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


