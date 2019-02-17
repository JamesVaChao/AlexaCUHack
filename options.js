{
    "interactionModel": {
        "languageModel": {
            "invocationName": "coder",
            "intents": [
                {
                    "name": "AMAZON.FallbackIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "TestIntent",
                    "slots": [],
                    "samples": [
                        "pringles",
                        "pringles to say hello world",
                        "pringles say hello world",
                        "pringles hello world"
                    ]
                },
                {
                    "name": "AMAZON.PauseIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.ResumeIntent",
                    "samples": []
                },
                {
                    "name": "Penelope",
                    "slots": [],
                    "samples": [
                        "a",
                        "who's my buddy"
                    ]
                },
                {
                    "name": "HelloWorld",
                    "slots": [],
                    "samples": [
                        "hello world"
                    ]
                },
                {
                    "name": "ReadIntent",
                    "slots": [],
                    "samples": [
                        "read"
                    ]
                },
                {
                    "name": "CreateVariable",
                    "slots": [
                        {
                            "name": "variableName",
                            "type": "AMAZON.SearchQuery"
                        }
                    ],
                    "samples": [
                        "create variable {variableName}"
                    ]
                },
                {
                    "name": "CreateFunction",
                    "slots": [
                        {
                            "name": "functionName",
                            "type": "AMAZON.SearchQuery",
                            "samples": [
                                "The parameters are {parameter}"
                            ]
                        },
                        {
                            "name": "parameter",
                            "type": "AMAZON.SearchQuery",
                            "samples": [
                                "{parameter}"
                            ]
                        }
                    ],
                    "samples": [
                        "create function {functionName} "
                    ]
                },
                {
                    "name": "IfStatement",
                    "slots": [
                        {
                            "name": "ifStatementName",
                            "type": "AMAZON.SearchQuery",
                            "samples": [
                                "The parameters are {parameter}"
                            ]
                        },
                        {
                            "name": "parameter",
                            "type": "AMAZON.SearchQuery",
                            "samples": [
                                "The parameters are {parameter}"
                            ]
                        }
                    ],
                    "samples": [
                        "create if statement named {ifStatementName} "
                    ]
                },
                {
                    "name": "Bookmark",
                    "slots": [
                        {
                            "name": "startVar",
                            "type": "AMAZON.NUMBER"
                        },
                        {
                            "name": "endVar",
                            "type": "AMAZON.NUMBER"
                        }
                    ],
                    "samples": [
                        "bookmark from {startVar} to {endVar}"
                    ]
                },
                {
                    "name": "Remove",
                    "slots": [],
                    "samples": [
                        "remove "
                    ]
                },
                {
                    "name": "AddToFunction",
                    "slots": [
                        {
                            "name": "programming",
                            "type": "programming",
                            "samples": [
                                "{programming}"
                            ]
                        },
                        {
                            "name": "nameOfExisting",
                            "type": "AMAZON.SearchQuery",
                            "samples": [
                                "{nameOfExisting}"
                            ]
                        },
                        {
                            "name": "nameOfNew",
                            "type": "AMAZON.SearchQuery",
                            "samples": [
                                "{nameOfNew}"
                            ]
                        }
                    ],
                    "samples": [
                        "add to function {nameOfExisting}"
                    ]
                },
                {
                    "name": "AddToIfStatement",
                    "slots": [
                        {
                            "name": "programming",
                            "type": "programming",
                            "samples": [
                                "{programming}"
                            ]
                        },
                        {
                            "name": "nameOfExisting",
                            "type": "AMAZON.SearchQuery",
                            "samples": [
                                "{nameOfExisting}"
                            ]
                        },
                        {
                            "name": "nameOfNew",
                            "type": "AMAZON.SearchQuery",
                            "samples": [
                                "{nameOfNew}"
                            ]
                        }
                    ],
                    "samples": [
                        "add to if statement {nameOfExisting}"
                    ]
                },
                {
                    "name": "ForLoop",
                    "slots": [
                        {
                            "name": "name",
                            "type": "AMAZON.SearchQuery",
                            "samples": [
                                "{name}"
                            ]
                        },
                        {
                            "name": "variable",
                            "type": "AMAZON.SearchQuery",
                            "samples": [
                                "{variable}"
                            ]
                        },
                        {
                            "name": "start",
                            "type": "AMAZON.NUMBER",
                            "samples": [
                                "{start}"
                            ]
                        },
                        {
                            "name": "end",
                            "type": "AMAZON.NUMBER",
                            "samples": [
                                "{end}"
                            ]
                        },
                        {
                            "name": "increment",
                            "type": "AMAZON.NUMBER",
                            "samples": [
                                "{increment}"
                            ]
                        }
                    ],
                    "samples": [
                        "create for loop "
                    ]
                }
            ],
            "types": [
                {
                    "name": "programming",
                    "values": [
                        {
                            "name": {
                                "value": "function"
                            }
                        },
                        {
                            "name": {
                                "value": "for loop"
                            }
                        },
                        {
                            "name": {
                                "value": "variable "
                            }
                        },
                        {
                            "name": {
                                "value": "if statement ",
                                "synonyms": [
                                    "If Statement"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        "dialog": {
            "intents": [
                {
                    "name": "IfStatement",
                    "delegationStrategy": "ALWAYS",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "ifStatementName",
                            "type": "AMAZON.SearchQuery",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1321995527018.1302645320394"
                            }
                        },
                        {
                            "name": "parameter",
                            "type": "AMAZON.SearchQuery",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1090791255967.993900532642"
                            }
                        }
                    ]
                },
                {
                    "name": "CreateFunction",
                    "delegationStrategy": "ALWAYS",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "functionName",
                            "type": "AMAZON.SearchQuery",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1106341067417.40107048007"
                            }
                        },
                        {
                            "name": "parameter",
                            "type": "AMAZON.SearchQuery",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.567289259016.1356019018713"
                            }
                        }
                    ]
                },
                {
                    "name": "AddToFunction",
                    "delegationStrategy": "ALWAYS",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "programming",
                            "type": "programming",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.626042408415.1173046089472"
                            }
                        },
                        {
                            "name": "nameOfExisting",
                            "type": "AMAZON.SearchQuery",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1146634221235.1106923462539"
                            }
                        },
                        {
                            "name": "nameOfNew",
                            "type": "AMAZON.SearchQuery",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.626042408415.1101069282400"
                            }
                        }
                    ]
                },
                {
                    "name": "AddToIfStatement",
                    "delegationStrategy": "ALWAYS",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "programming",
                            "type": "programming",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.807202331494.948758877913"
                            }
                        },
                        {
                            "name": "nameOfExisting",
                            "type": "AMAZON.SearchQuery",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.845602503680.1307612754110"
                            }
                        },
                        {
                            "name": "nameOfNew",
                            "type": "AMAZON.SearchQuery",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.807202331494.374684915472"
                            }
                        }
                    ]
                },
                {
                    "name": "ForLoop",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "name",
                            "type": "AMAZON.SearchQuery",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1435944911103.1199332224736"
                            }
                        },
                        {
                            "name": "variable",
                            "type": "AMAZON.SearchQuery",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1435944911103.1379922616474"
                            }
                        },
                        {
                            "name": "start",
                            "type": "AMAZON.NUMBER",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1435944911103.737321503843"
                            }
                        },
                        {
                            "name": "end",
                            "type": "AMAZON.NUMBER",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1435944911103.750538779749"
                            }
                        },
                        {
                            "name": "increment",
                            "type": "AMAZON.NUMBER",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1435944911103.332688692207"
                            }
                        }
                    ]
                }
            ],
            "delegationStrategy": "ALWAYS"
        },
        "prompts": [
            {
                "id": "Elicit.Slot.1321995527018.1302645320394",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What are the parameters?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1090791255967.993900532642",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What are the parameters?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1106341067417.40107048007",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What are the parameters?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.567289259016.1356019018713",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What are the parameters"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1146634221235.1106923462539",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What is the name of exisiting?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.845602503680.1307612754110",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What is the current type's name?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1216607720873.1257001992324",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What do you want to add?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1216607720873.262900854778",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What is the name of this new thing?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1257951335000.1117018468455",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What did you want to add?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1257951335000.520224210618",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What is the name of this thing?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.626042408415.1173046089472",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What is type?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.626042408415.1101069282400",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What is the new name?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.807202331494.948758877913",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What is the type?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.807202331494.374684915472",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What is the new name?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1435944911103.1199332224736",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "what would you like to name it"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1435944911103.332688692207",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "what would you like it to increment by "
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1435944911103.750538779749",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "what number would you like it to end at?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1435944911103.737321503843",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "what number would you like it to start at?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1435944911103.1379922616474",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "what would you like to name your variable"
                    }
                ]
            }
        ]
    }
}