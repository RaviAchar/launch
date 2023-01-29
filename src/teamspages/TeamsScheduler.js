import { FontIcon, Layer, Stack } from "@fluentui/react";
import React from "react";
import { BarChart } from "./TeamsCharts/TeamsBarChart";
import TeamsDonutChart from "./TeamsCharts/TeamsDonutChart";
import { TeamsDocumentCard } from "./TeamsDocumentCard";
import { AnimationClassNames, mergeStyles, getTheme } from '@fluentui/react/lib/Styling';
import { ShoppingCartIcon } from '@fluentui/react-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import { registerIcons } from '@fluentui/react/lib/Styling';
import { Badge, CounterBadge } from "@fluentui/react-badge";


const theme = getTheme();

const contentClass = mergeStyles([
    {
      backgroundColor: theme.palette.themePrimary,
      color: theme.palette.white,
      lineHeight: '40px',
      padding: '0 20px',
    },
    AnimationClassNames.scaleUpIn100,
  ]);
  const iconClass = mergeStyles({
    fontSize: 25,
    height: 30,
    width: 10,
    margin: '0 0px',
  });
  registerIcons({
    icons: {
        ShoppingCart: <ShoppingCartIcon />
    }
  });


export default function TeamsScheduler() {
    return (
        <div className="ms-Grid">
            <div className="ms-Grid-row">
            <Layer><div className={contentClass} >Items in Cart &nbsp;&nbsp; 
           <Icon  iconName="ShoppingCart" style={{ padding: "0", margin: "0"}}  className={iconClass} />&nbsp;<CounterBadge shape="rounded" appearance="ghost" style={{textAlign:"center",borderRadius: "5px", backgroundColor:"orange",  fontWeight:"bold"}}  >1</CounterBadge>
      </div></Layer>
            </div>
            <div className="ms-Grid-row">

                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-smPush12">
                    <div className="LayoutPage-demoBlock"><BarChart/></div>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-smPush12"><TeamsDocumentCard/>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-smPush12">
                    <div className="LayoutPage-demoBlock"><TeamsDonutChart/></div>
                </div>
            </div>
        </div>
    )
}