import React from "react";
import * as TerminalModule from "terminal-in-react";
import MacWindows from "./MacWindows";
import './cli.scss'

const Terminal = TerminalModule.default.default;

const Cli = ({ windowState, windowName, setWindowState }) => {
    const commands = {
        whoami: () => "Devesh Gour",

        skills: () => "HTML, CSS, JavaScript, React, Git, GitHub",

        about: () => "B.Tech CSE | React Developer | MERN Learner",

        github: () => "github.com/deveshgour2",
    };

    return (
        <MacWindows
            windowState={windowState}
            windowName={windowName}
            setWindowState={setWindowState}
        >
            <div className="cli-window">
                <Terminal
                    color="white"


                    commands={commands}
                    msg="Welcome to Devesh's Terminal 🚀"
                />
            </div>
        </MacWindows>
    );
};

export default Cli;