import { createTheme, ThemeProvider } from "@fluentui/react";
import React from "react";
import TeamsEvent from "./TeamsEvent";
import TeamsSchedule from "./TeamsScheduler";

const myTheme = createTheme({
    palette: {
        themePrimary: '#cc1863',
        themeLighterAlt: '#080104',
        themeLighter: '#210410',
        themeLight: '#3d071e',
        themeTertiary: '#7a0f3c',
        themeSecondary: '#b41657',
        themeDarkAlt: '#d12b70',
        themeDark: '#d84884',
        themeDarker: '#e273a1',
        neutralLighterAlt: '#f8f8f8',
        neutralLighter: '#f4f4f4',
        neutralLight: '#eaeaea',
        neutralQuaternaryAlt: '#dadada',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c8c8',
        neutralTertiary: '#b0afae',
        neutralSecondary: '#979594',
        neutralSecondaryAlt: '#979594',
        neutralPrimaryAlt: '#7d7c7a',
        neutralPrimary: '#171616',
        neutralDark: '#4a4948',
        black: '#30302f',
        white: '#ffffff',
    }
});

export default function TeamsTabMain({ compName }) {

    return (
        <ThemeProvider theme={myTheme}>
            <div style={{ backgroundColor: "white", color: "black" }}>
                {
                    compName === "EVENT" && <TeamsEvent />}
                {
                    compName === "SCHEDULE" && <TeamsSchedule />
                }
            </div>
        </ThemeProvider>
    )
}