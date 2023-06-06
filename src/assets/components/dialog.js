import { Dialog, DialogContent } from "@mui/material";
import * as React from "react";
/** Variables */
const images = require.context("../pics/site-banner/", true);
/** */
const Dia = (props) => {
    /** */
    return(
        <Dialog open={props.dia} onClose={()=>props.setDia(false)} className="picdialog">
            <DialogContent className="bigpic">
                <img src={props.picsrc} alt="bigboi" id="dialogpic" />
            </DialogContent>
            <DialogContent className="smallpic">
                {images.keys().map((item, i) => (
                <img
                    key={item + i}
                    src={images(item)}
                    alt={item}
                    onClick={() => {
                    document.getElementById("dialogpic").src = images(item);
                    }}
                />
                ))}
            </DialogContent>
        </Dialog>
    );
};
/** */
const BigPic = (props) => {
    /** */
    return(
        <Dialog open={props.dia} onClose={()=>props.setDia(false)} className="picdialog">
            <DialogContent className="bigpic">
                <img src={props.picsrc} alt="bigboi" id="dialogpic" />
            </DialogContent>
            <DialogContent className="smallpic">
            </DialogContent>
        </Dialog>
    );
};
/** */
export {Dia, BigPic};