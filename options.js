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
                            "type": "AMAZON.SearchQuery"
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
                }
            ],
            "types": []
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
            }
        ]
    }
}