// import { useImmer } from "use-immer";
// import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
// import Menu from "./menu";
// import { menuChangeEvent } from "@/utils/event";
// import classNames from "classnames";
import styles from "./index.module.scss";

const Layout = () => {
  // const [menuFold, setMenuFold] = useImmer<boolean>(true);

  // const handleMenuFold = () => {
  //   setMenuFold(!menuFold);
  //   window.dispatchEvent(menuChangeEvent);
  // };

  // const jumpToHome = () => {
  //   window.location.href = "/";
  // };

  return (
    <div className={styles.layout}>
      {/* <div className={classNames(styles.left, { [styles.menuFold]: menuFold })}>
        <div className={styles.title} onClick={jumpToHome}>
          {menuFold ? "T" : "Tokenalytic"}
        </div>
        <Menu menuFold={menuFold} />
        <div className={styles.leftBottom}>
          <div className={styles.control} onClick={handleMenuFold}>
            {menuFold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            <span className={styles.controlText}>
              {menuFold ? null : "menuFold"}
            </span>
          </div>
        </div>
      </div> */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
