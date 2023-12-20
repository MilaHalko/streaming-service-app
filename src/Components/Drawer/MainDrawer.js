import React from 'react'
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

function MainDrawer({children, drawerOpen, closeDrawer}) {
    return (
        <Drawer open={drawerOpen}
                onClose={closeDrawer}
                level={null}
                handler={false}
                placement="right"
        >
            {children}
        </Drawer>
    )
}

export default MainDrawer
