import { useChartStore } from "@/store/charts";
import EchartsPanel from "./echarts-panel";
import MaskGuide from "./mask-guide";
import ChartInfo from "./chart-info";
import ChartSetting from "./setting"
import { svgMap } from "@/constants/svg";
import styles from "./index.module.scss";

const DataPanel = () => {
  const hasLevelAuth = useChartStore.use.hasLevelAuth();

  return (
    <div className={styles.dataPanel}>
      {
        <>
          {!hasLevelAuth ? (
            <>
              <div className={styles.maskBackground}>
                {svgMap["maskBackground"]}
              </div>
              <MaskGuide />
            </>
          ) : null}
          <div className={styles.echartsPanel}>
            <ChartInfo />
            <ChartSetting />
            <EchartsPanel />
          </div>
        </>
      }
    </div>
  );
};

export default DataPanel;
